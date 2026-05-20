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

  const currentLocale = getLocale();
  const basePath = deLocalizeHref("/");

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

<nav aria-label="Language switcher" class="relative inline-flex">
  <div bind:this={container} class="relative">
    <button
      type="button"
      class="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
      aria-label={`Current language: ${currentLanguage.label}`}
      aria-expanded={open}
      aria-haspopup="menu"
      on:click={toggleDropdown}
    >
      <span
        class="inline-flex h-3.5 w-5 overflow-hidden rounded-xs"
        aria-hidden="true"
      >
        {@html currentLanguage.flag}
      </span>
      <span class="sr-only">{currentLanguage.label}</span>

      <svg
        class={`h-4 w-4 text-slate-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
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
      <div
        class="absolute left-0 z-20 mt-2 w-56 max-w-[calc(100vw-1rem)] overflow-hidden rounded-2xl border border-slate-200 bg-white/95 p-2 shadow-xl backdrop-blur"
        role="menu"
      >
        {#each languages as language}
          <a
            href={language.href}
            aria-current={language.isCurrent ? "page" : undefined}
            class={`flex items-center justify-between rounded-xl px-3 py-2 text-sm transition ${
              language.isCurrent
                ? "bg-slate-900 text-white"
                : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
            }`}
            on:click={(event) => handleLanguageClick(event, language.isCurrent)}
          >
            <span class="flex items-center gap-2">
              <span
                class="inline-flex h-3.5 w-5 overflow-hidden rounded-xs"
                aria-hidden="true"
              >
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
