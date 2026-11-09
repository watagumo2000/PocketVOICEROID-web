<script lang="ts">
  // 上に固定するヘッダー。見本と違い、スクロールしてもずっと表示する。
  // - 今いるセクションのナビを pink で塗る（aria-current）
  // - 960px 以下ではナビをメニューボタンにまとめる（NavPill の README）
  import { onMount } from 'svelte'
  import { navItems, type SectionId } from '../data'
  import { button } from '../ui'

  let current = $state<SectionId>('top')
  let scrolled = $state(false)
  let menuOpen = $state(false)
  let headerEl: HTMLElement
  let barEl: HTMLElement
  let menuButton = $state<HTMLButtonElement>()

  onMount(() => {
    // ヘッダーのバー（開いたメニューは含めない）の高さを CSS 変数にして、ページ内リンクの止まる位置に使う
    const setHeight = () =>
      document.documentElement.style.setProperty('--header-h', `${barEl.offsetHeight}px`)
    const ro = new ResizeObserver(setHeight)
    ro.observe(barEl)

    const onScroll = () => {
      scrolled = window.scrollY > 8
      // ページの一番下まで来たら最後の項目（ABOUT）にする（短いセクションが判定の線に届かない対策）
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = navItems[navItems.length - 1].id
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    // 画面の上から 40% の線にかかっているセクションを「今いる場所」にする
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) current = entry.target.id as SectionId
        }
      },
      { rootMargin: '-40% 0px -60% 0px' },
    )
    for (const item of navItems) {
      const el = document.getElementById(item.id)
      if (el) io.observe(el)
    }

    return () => {
      ro.disconnect()
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  })

  function closeMenu(returnFocus = false) {
    menuOpen = false
    if (returnFocus) menuButton?.focus()
  }

  function onKeydown(e: KeyboardEvent) {
    if (menuOpen && e.key === 'Escape') closeMenu(true)
  }

  function onWindowClick(e: MouseEvent) {
    if (menuOpen && !headerEl.contains(e.target as Node)) closeMenu()
  }
</script>

<svelte:window onkeydown={onKeydown} onclick={onWindowClick} />

<header
  bind:this={headerEl}
  class={[
    'fixed inset-x-0 top-0 z-50 border-b-2 transition-colors duration-200',
    // 一番上ではメインビジュアルの上に透けて乗り、スクロールしたら白地とフチを付ける
    scrolled || menuOpen ? 'bg-surface border-ink' : 'border-transparent',
  ]}
>
  <div
    bind:this={barEl}
    class="mx-auto flex max-w-1200 items-center justify-between gap-16 px-40 py-18 max-md:px-18 max-md:py-14"
  >
    <a href="#top" class="rounded-xs font-display text-[18px] font-bold leading-none tracking-[0.04em] no-underline">
      VOICEROID POCKET
    </a>

    <nav
      aria-label="ページ内のメニュー"
      class="inline-flex flex-wrap gap-6 p-6 bg-surface border-thin border-ink rounded-pill font-display text-nav max-md:hidden"
    >
      {#each navItems as item (item.id)}
        <a
          href={`#${item.id}`}
          aria-current={current === item.id ? 'page' : undefined}
          class="py-8 px-14 rounded-pill no-underline aria-[current=page]:bg-pink">{item.label}</a
        >
      {/each}
    </nav>

    <button
      bind:this={menuButton}
      type="button"
      class={[button({ size: 'sm' }), 'gap-8 md:hidden']}
      aria-expanded={menuOpen}
      aria-controls="sp-menu"
      onclick={() => (menuOpen = !menuOpen)}
    >
      <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" class="fill-none stroke-ink stroke-[2.5] [stroke-linecap:round]">
        {#if menuOpen}
          <path d="M5 5 L15 15 M15 5 L5 15" />
        {:else}
          <path d="M3 5 H17 M3 10 H17 M3 15 H17" />
        {/if}
      </svg>
      <span>{menuOpen ? 'とじる' : 'メニュー'}</span>
    </button>
  </div>

  <nav id="sp-menu" hidden={!menuOpen} aria-label="ページ内のメニュー（スマホ）" class="px-18 pb-18 md:hidden">
    <ul
      class="grid grid-cols-2 gap-6 p-8 bg-surface border-bold border-ink rounded-xl shadow-card"
    >
      {#each navItems as item (item.id)}
        <li>
          <a
            href={`#${item.id}`}
            aria-current={current === item.id ? 'page' : undefined}
            onclick={() => closeMenu()}
            class="flex min-h-44 items-center px-14 rounded-pill font-display text-nav no-underline aria-[current=page]:bg-pink"
            >{item.label}</a
          >
        </li>
      {/each}
    </ul>
  </nav>
</header>
