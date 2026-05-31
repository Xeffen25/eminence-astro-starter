<script lang="ts">
  import { onMount } from "svelte";
  import {
    deLocalizeHref,
    getLocale,
    locales,
    localizeHref,
  } from "@/paraglide/runtime";
  import esFlagSvg from "@/assets/flags/es.svg?raw";
  import gbFlagSvg from "@/assets/flags/gb.svg?raw";

  const languageMeta = {
    es: { label: "Español", flag: esFlagSvg },
    en: { label: "English", flag: gbFlagSvg },
  };

  export let path = "/";

  const currentLocale = getLocale();
  const basePath = deLocalizeHref(path);

  const languages = locales.map((locale) => {
    const meta = languageMeta[locale];

    if (!meta) {
      throw new Error(`Missing language metadata for locale: ${locale}`);
    }

    return {
      locale,
      label: meta.label,
      flag: meta.flag,
      href: localizeHref(basePath, { locale }),
      isCurrent: locale === currentLocale,
    };
  });

  const currentLanguage =
    languages.find((language) => language.isCurrent) ?? languages[0];

  let open = false;
  let container: HTMLDivElement | null = null;

  function toggleDropdown(): void {
    open = !open;
  }

  function closeDropdown(): void {
    open = false;
  }

  function handleLanguageClick(event: MouseEvent, isCurrent: boolean): void {
    if (isCurrent) {
      event.preventDefault();
    }

    closeDropdown();
  }

  function handleDocumentClick(event: MouseEvent): void {
    if (!open || !container) {
      return;
    }

    const target = event.target as Node | null;

    if (target && !container.contains(target)) {
      closeDropdown();
    }
  }

  onMount(() => {
    document.addEventListener("click", handleDocumentClick, true);

    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
    };
  });
</script>

<nav aria-label="Language switcher" class="language-switcher">
  <div bind:this={container} class="language-switcher__container">
    <button
      type="button"
      class="language-switcher__button"
      aria-label={`Current language: ${currentLanguage.label}`}
      aria-expanded={open}
      aria-haspopup="menu"
      on:click={toggleDropdown}
    >
      <span class="language-switcher__flag" aria-hidden="true">
        {@html currentLanguage.flag}
      </span>
      <span class="language-switcher__sr-only">{currentLanguage.label}</span>

      <svg
        class={`language-switcher__chevron ${open ? "is-open" : ""}`}
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 7.5L10 12.5L15 7.5"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    {#if open}
      <div class="language-switcher__menu" role="menu">
        {#each languages as language}
          <a
            href={language.href}
            aria-current={language.isCurrent ? "page" : undefined}
            class={`language-switcher__item ${language.isCurrent ? "is-current" : ""}`}
            on:click={(event) => handleLanguageClick(event, language.isCurrent)}
          >
            <span class="language-switcher__item-content">
              <span class="language-switcher__flag" aria-hidden="true">
                {@html language.flag}
              </span>
              <span>{language.label}</span>
            </span>
          </a>
        {/each}
      </div>
    {/if}
  </div>
</nav>

<style>
  .language-switcher {
    --language-switcher-button-border: #cbd5e1;
    --language-switcher-button-bg: #f8fafc;
    --language-switcher-button-text: #0f172a;
    --language-switcher-button-hover-bg: #f1f5f9;
    --language-switcher-button-focus-ring: #94a3b8;
    --language-switcher-button-shadow: 0 1px 2px 0 rgb(15 23 42 / 12%);
    --language-switcher-chevron: #64748b;

    --language-switcher-menu-border: #e2e8f0;
    --language-switcher-menu-bg: rgb(255 255 255 / 95%);
    --language-switcher-menu-shadow:
      0 20px 25px -5px rgb(15 23 42 / 18%), 0 8px 10px -6px rgb(15 23 42 / 14%);

    --language-switcher-item-current-bg: #0f172a;
    --language-switcher-item-current-text: #ffffff;
    --language-switcher-item-default-text: #334155;
    --language-switcher-item-hover-bg: #f1f5f9;
    --language-switcher-item-hover-text: #0f172a;

    position: relative;
    display: inline-flex;
  }

  .language-switcher__container {
    position: relative;
  }

  .language-switcher__button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    border: 1px solid var(--language-switcher-button-border);
    border-radius: 0.75rem;
    background: var(--language-switcher-button-bg);
    color: var(--language-switcher-button-text);
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.25rem;
    box-shadow: var(--language-switcher-button-shadow);
    transition:
      background-color 150ms ease,
      box-shadow 150ms ease;
  }

  .language-switcher__button:hover {
    background: var(--language-switcher-button-hover-bg);
  }

  .language-switcher__button:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 2px var(--language-switcher-button-focus-ring),
      var(--language-switcher-button-shadow);
  }

  .language-switcher__flag {
    display: inline-flex;
    width: 1.25rem;
    height: 0.875rem;
    overflow: hidden;
    border-radius: 0.125rem;
  }

  .language-switcher__sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .language-switcher__chevron {
    width: 1rem;
    height: 1rem;
    color: var(--language-switcher-chevron);
    transition: transform 200ms ease;
  }

  .language-switcher__chevron.is-open {
    transform: rotate(180deg);
  }

  .language-switcher__menu {
    position: absolute;
    left: 0;
    z-index: 20;
    width: 14rem;
    max-width: calc(100vw - 1rem);
    margin-top: 0.5rem;
    padding: 0.5rem;
    overflow: hidden;
    border: 1px solid var(--language-switcher-menu-border);
    border-radius: 1rem;
    background: var(--language-switcher-menu-bg);
    box-shadow: var(--language-switcher-menu-shadow);
    backdrop-filter: blur(8px);
  }

  .language-switcher__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0.75rem;
    border-radius: 0.75rem;
    color: var(--language-switcher-item-default-text);
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-decoration: none;
    transition:
      background-color 150ms ease,
      color 150ms ease;
  }

  .language-switcher__item:hover {
    background: var(--language-switcher-item-hover-bg);
    color: var(--language-switcher-item-hover-text);
  }

  .language-switcher__item.is-current {
    background: var(--language-switcher-item-current-bg);
    color: var(--language-switcher-item-current-text);
  }

  .language-switcher__item-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
</style>
