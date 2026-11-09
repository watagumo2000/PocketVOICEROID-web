<script lang="ts">
  // 組みロゴ（components/Logo/README.md）。文字に Fredoka を使うので画像にせず inline SVG で置く。
  import { waveBar, waveDelays } from '../ui'

  const bars = [
    { x: 112, y: 130, h: 12 },
    { x: 121, y: 121, h: 30 },
    { x: 130, y: 125, h: 22 },
    { x: 139, y: 116, h: 40 },
    { x: 148, y: 129, h: 14 },
  ]
  // POCKET の大きい文字（フチを文字の外側に出す）
  const big = 'font-display font-bold text-[92px] stroke-ink stroke-10 paint-stroke'
</script>

<svg class="block w-full overflow-visible" viewBox="0 30 440 162" role="img" aria-label="VOICEROID POCKET">
  <rect x="113" y="43" width="220" height="36" rx="18" class="fill-ink" />
  <rect x="110" y="40" width="220" height="36" rx="18" class="fill-pink stroke-ink stroke-3" />
  <text x="220" y="65" text-anchor="middle" class="fill-ink font-display font-bold text-[19px] tracking-[6px]">VOICEROID</text>
  <!-- 影（ink） -->
  <text x="100" y="174" text-anchor="end" class={['fill-ink', big]}>P</text>
  <circle cx="138" cy="142" r="34" class="fill-ink" />
  <text x="176" y="174" textLength="228" lengthAdjust="spacingAndGlyphs" class={['fill-ink', big]}>CKET</text>
  <!-- 本体 -->
  <text x="95" y="168" text-anchor="end" class={['fill-pink', big]}>P</text>
  <circle cx="133" cy="136" r="33" class="fill-blue stroke-ink stroke-5" />
  <g class="fill-ink">
    {#each bars as b, i (b.x)}
      <rect x={b.x} y={b.y} width="6" height={b.h} rx="3" class={[waveBar, waveDelays[i]]} />
    {/each}
  </g>
  <text x="171" y="168" textLength="228" lengthAdjust="spacingAndGlyphs" class={big}
    ><tspan class="fill-pink">C</tspan><tspan class="fill-blue">K</tspan><tspan class="fill-pink">E</tspan><tspan
      class="fill-blue">T</tspan
    ></text
  >
  <!-- キラキラ -->
  <path
    class="animate-twinkle transform-fill origin-center fill-blue stroke-ink stroke-[2.5] [stroke-linejoin:round]"
    d="M410 70 C412 84 413 85 427 87 C413 89 412 90 410 104 C408 90 407 89 393 87 C407 85 408 84 410 70 Z"
  />
  <path
    class="animate-twinkle transform-fill origin-center [animation-delay:-0.9s] fill-pink stroke-ink stroke-[2.5] [stroke-linejoin:round]"
    d="M40 64 C41.5 74 42 74.5 52 76 C42 77.5 41.5 78 40 88 C38.5 78 38 77.5 28 76 C38 74.5 38.5 74 40 64 Z"
  />
  <circle class="animate-twinkle transform-fill origin-center fill-pink stroke-ink stroke-2" cx="372" cy="58" r="5" />
</svg>
