<script lang="ts">
  // ABOUT：斜め帯の上に白いカード（Card＋情報リスト）。左下に茜、右上に葵。
  import { author, images, placeholders } from '../data'
  import { button, wrap } from '../ui'

  const info = [
    ['制作', author],
    ['対応OS', 'Android 13 以上'],
    ['登場キャラクター', '琴葉 茜・琴葉 葵（キャラは自由に追加できます）'],
    ['ボイス', 'WAVE・MP3 など（A.I.VOICE 用のリスト書き出しに対応）'],
  ]
</script>

<section id="about" class="relative overflow-hidden py-100 max-sm:py-80">
  <svg aria-hidden="true" viewBox="0 0 1280 420" preserveAspectRatio="xMidYMid slice" class="absolute inset-0 size-full">
    <rect width="1280" height="420" class="fill-pink" />
    <polygon points="0,0 380,0 240,420 0,420" class="fill-blue" />
    <polygon points="380,0 410,0 270,420 240,420" class="fill-surface" />
    <polygon points="1000,0 1280,0 1280,420 860,420" class="fill-blue" />
    <polygon points="970,0 1000,0 860,420 830,420" class="fill-surface" />
    <g class="fill-surface">
      <use href="#spk" x="160" y="70" width="44" height="44" class="animate-twinkle transform-fill origin-center" />
      <use href="#spk" x="1100" y="290" width="52" height="52" class="animate-twinkle transform-fill origin-center [animation-delay:-0.9s]" />
    </g>
  </svg>

  <div class={[wrap, 'flex justify-center']}>
    <div
      class="relative flex w-[min(720px,100%)] flex-col gap-18 px-36 pt-36 pb-32 bg-surface border-bold border-ink rounded-2xl shadow-card max-sm:px-24 max-sm:pt-32 max-sm:pb-28"
    >
      <!-- スマホではキャラを小さくして、カードの角に少しだけかける -->
      <img
        src={images.akane}
        alt=""
        class="absolute -left-70 -bottom-30 w-130 animate-bob max-sm:-left-18 max-sm:-bottom-40 max-sm:w-84"
      />
      <img
        src={images.aoi}
        alt=""
        class="absolute -right-66 -top-50 w-124 animate-bob [animation-delay:-1.4s] max-sm:-right-14 max-sm:-top-56 max-sm:w-80"
      />

      <div class="flex flex-col items-center gap-8 text-center">
        <p class="font-display text-[14px] font-bold leading-[1.4] tracking-[0.26em]">ABOUT</p>
        <h2 class="text-[clamp(24px,3vw,34px)] font-black">このアプリについて</h2>
      </div>
      <p class="text-[15px] leading-[1.9] text-ink-muted">
        琴葉茜・琴葉葵をはじめとするキャラクターが、ホーム画面のウィジェット・アプリ画面・通知で話しかけてくれる
        Android アプリです。キャラクターや表情、セリフはアプリ上から自由に追加・編集できます。
      </p>
      <!-- 480px 以下は項目名と値を縦に積む（項目名の列が幅を取って値が細くなるのを防ぐ） -->
      <dl
        class="grid grid-cols-[auto_minmax(0,1fr)] gap-x-18 gap-y-10 py-16 px-20 bg-surface-soft rounded-lg text-[14px] leading-[1.5] max-xs:grid-cols-1 max-xs:gap-y-2"
      >
        {#each info as [term, desc] (term)}
          <dt class="font-black max-xs:not-first:mt-10">{term}</dt>
          <dd>{desc}</dd>
        {/each}
      </dl>
      <div class="flex flex-wrap justify-center gap-12">
        <!-- リンク先は未定（仮置き） -->
        <a href={placeholders.githubUrl} class={button({ tone: 'pink' })}>
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" class="fill-none stroke-ink stroke-[2.2] [stroke-linecap:round] [stroke-linejoin:round]">
            <path d="M8 6 L2 12 L8 18 M16 6 L22 12 L16 18 M14 4 L10 20" />
          </svg>
          GitHub でアプリを見る
        </a>
      </div>
    </div>
  </div>
</section>
