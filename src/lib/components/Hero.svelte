<script lang="ts">
  // メインビジュアル。キャラは琴葉 茜、説明の札はロゴの上で固定（見本の Tweaks の値）。
  // - 961px 以上：見本どおり、ロゴ・キャラ・縦書きのコピーを重ねて置く
  // - 960px 以下：重ねずに順に並べる（タブレットは左に文字・右にキャラ、スマホは縦に積む）。
  //   コピーは横書きにする（components/CatchCopy/README.md「狭くて入らない場合は横書き」）
  import Logo from './Logo.svelte'
  import { images } from '../data'
  import { button } from '../ui'

  // キャッチコピー1行ぶんの白座布団
  const catchLine = 'bg-surface py-10 px-4'
  const catchLineSm = 'bg-surface py-2 px-8 [box-decoration-break:clone]'
</script>

<section
  id="top"
  class="relative overflow-hidden md:h-800 max-md:pt-[calc(var(--header-h,84px)+24px)] max-md:pb-64"
>
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

  <!-- PC では中身を section に対して absolute で置くため、この箱は static にする -->
  <div
    class="md:static max-md:relative max-md:mx-auto max-md:flex max-md:max-w-760 max-md:items-end max-md:justify-between max-md:gap-24 max-md:px-18 max-sm:flex-col max-sm:items-stretch"
  >
    <div
      class="relative z-1 flex flex-col items-start gap-14 md:absolute md:top-120 md:left-[max(24px,calc(50%_-_600px))] md:w-360 max-md:w-full max-md:max-w-360 max-md:shrink-0 max-sm:mx-auto"
    >
      <!-- Badge（components/Badge/README.md） -->
      <p class="mb-2 self-stretch text-center">
        <span class="inline-block py-4 px-12 bg-ink text-on-ink rounded-xs text-[15px] font-black leading-[1.4]"
          >推しが話しかけてくれる Androidアプリ</span
        >
      </p>
      <h1 class="w-full"><Logo /></h1>
      <!-- 横書きのキャッチコピー（960px 以下） -->
      <p class="text-catch-sm md:hidden">
        <span class={[catchLineSm, 'shadow-[4px_4px_0_var(--color-pink)]']}>あなたの毎日に</span><br />
        <span class={[catchLineSm, 'shadow-[4px_4px_0_var(--color-blue)]']}>推しのいる生活を</span>
      </p>
      <a href="#feature" class={[button({ size: 'lg', tone: 'pink' }), 'mt-8']}>アプリの特徴を見る ›</a>
      <div class="flex flex-wrap gap-8">
        <a href="#character" class={button({ size: 'sm' })}>キャラクター</a>
        <a href="#about" class={button({ size: 'sm' })}>このアプリについて</a>
      </div>
    </div>

    <!-- 1100px 以下の PC はキャラを少し右に寄せて、左のロゴとの重なりを減らす -->
    <img
      src={images.akane}
      alt="琴葉 茜"
      width="956"
      height="1056"
      class="animate-bob md:absolute md:left-1/2 md:bottom-50 md:w-500 md:-ml-240 md:max-lg:w-420 md:max-lg:-ml-150 max-md:relative max-md:w-[min(380px,52%)] max-sm:mx-auto max-sm:mt-8 max-sm:w-[min(300px,82%)]"
    />
  </div>

  <!-- 縦書きのキャッチコピー（961px 以上） -->
  <p class="absolute top-120 right-[max(40px,calc(50%_-_560px))] writing-vertical text-catch max-md:hidden">
    <span class={[catchLine, 'shadow-[4px_4px_0_var(--color-pink)]']}>あなたの毎日に</span><br />
    <span class={[catchLine, 'shadow-[4px_4px_0_var(--color-blue)]']}>推しのいる生活を</span>
  </p>
</section>
