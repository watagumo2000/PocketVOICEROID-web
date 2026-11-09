<script lang="ts">
  // メインビジュアル。キャラは琴葉 茜、説明の札はロゴの上で固定（見本の Tweaks の値）。
  import Logo from './Logo.svelte'
  import { images } from '../data'
  import { button } from '../ui'

  // キャッチコピー1行ぶんの白座布団（components/CatchCopy/README.md）
  const catchLine = 'bg-surface py-10 px-4'
</script>

<section id="top" class="relative h-800 overflow-hidden max-sm:h-820">
  <svg aria-hidden="true" viewBox="0 0 1280 800" preserveAspectRatio="xMidYMid slice" class="absolute inset-0 size-full">
    <defs>
      <pattern id="kv-dots" width="22" height="22" patternUnits="userSpaceOnUse">
        <circle cx="4" cy="4" r="3" class="fill-pink" />
      </pattern>
    </defs>
    <rect x="0" y="0" width="360" height="300" fill="url(#kv-dots)" opacity="0.6" />
    <rect x="980" y="560" width="300" height="240" fill="url(#kv-dots)" opacity="0.6" />
    <polygon points="430,0 790,0 610,800 250,800" class="fill-pink" />
    <polygon points="790,0 930,0 750,800 610,800" class="fill-blue" />
    <polygon points="420,0 436,0 256,800 240,800" class="fill-blue" />
    <g class="fill-blue">
      <use href="#spk" x="300" y="140" width="56" height="56" class="animate-twinkle transform-fill origin-center" />
      <use href="#spk" x="1060" y="200" width="40" height="40" class="animate-twinkle transform-fill origin-center [animation-delay:-0.9s]" />
    </g>
    <g class="fill-pink">
      <use href="#spk" x="920" y="420" width="48" height="48" class="animate-twinkle transform-fill origin-center [animation-delay:-0.9s]" />
      <use href="#spk" x="190" y="520" width="32" height="32" class="animate-twinkle transform-fill origin-center" />
    </g>
  </svg>

  <!-- PC とスマホの間（〜1100px）はキャラを少し右に寄せて、左のロゴとの重なりを減らす -->
  <img
    src={images.akane}
    alt="琴葉 茜"
    width="956"
    height="1056"
    class="absolute left-1/2 bottom-50 w-500 -ml-240 animate-bob max-lg:w-420 max-lg:-ml-150 max-sm:bottom-56 max-sm:w-280 max-sm:-ml-140"
  />

  <p class="absolute top-120 right-[max(40px,calc(50%_-_560px))] writing-vertical text-catch max-sm:hidden">
    <span class={[catchLine, 'shadow-[4px_4px_0_var(--color-pink)]']}>毎日に、</span><br />
    <span class={[catchLine, 'shadow-[4px_4px_0_var(--color-blue)]']}>推しのいる生活を</span>
  </p>

  <div
    class="absolute top-120 left-[max(24px,calc(50%_-_600px))] flex w-360 flex-col items-start gap-14 max-sm:inset-x-18 max-sm:top-92 max-sm:w-auto max-sm:max-w-340"
  >
    <!-- Badge（components/Badge/README.md） -->
    <p class="mb-2 self-stretch text-center">
      <span class="inline-block py-4 px-12 bg-ink text-on-ink rounded-xs text-[15px] font-black leading-[1.4]"
        >推しが話しかけてくれる Androidアプリ</span
      >
    </p>
    <h1 class="w-full"><Logo /></h1>
    <a href="#feature" class={[button({ size: 'lg', tone: 'pink' }), 'mt-8']}>アプリの特徴を見る ›</a>
    <div class="flex flex-wrap gap-8">
      <a href="#character" class={button({ size: 'sm' })}>キャラクター</a>
      <a href="#about" class={button({ size: 'sm' })}>このアプリについて</a>
    </div>
  </div>
</section>
