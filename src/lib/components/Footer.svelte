<script lang="ts">
  import { author, placeholders } from '../data'
  import { wrap } from '../ui'

  const links = [
    { href: '#feature', label: 'アプリの特徴' },
    { href: '#character', label: 'キャラクター' },
    { href: '#situation', label: '話す状況' },
    { href: '#voice', label: 'ボイス' },
    { href: '#about', label: 'このアプリについて' },
  ]
</script>

<footer class="bg-ink pt-40 pb-32 text-on-ink">
  <div class={[wrap, 'flex flex-col items-center gap-18 text-center']}>
    <span class="font-display text-[22px] font-bold leading-none tracking-[0.04em] text-pink">VOICEROID POCKET</span>
    <nav aria-label="フッターのメニュー" class="flex flex-wrap justify-center gap-x-22 gap-y-8 text-tag">
      {#each links as l (l.href)}
        <!-- ink の地の上なので、フォーカスの輪は白にする -->
        <a href={l.href} class="inline-flex min-h-44 items-center text-on-ink no-underline hover:underline focus-visible:outline-on-ink">
          {l.label}
        </a>
      {/each}
    </nav>
    <p class="text-caption text-on-ink-muted">
      「VOICEROID」は株式会社AHSの商標です。{placeholders.characterRights}<br />
      フォント：Zen Maru Gothic、Fredoka（SIL Open Font License 1.1）<br />
      © {author}
    </p>
  </div>
</footer>
