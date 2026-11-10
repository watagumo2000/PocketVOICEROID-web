<script lang="ts">
  // FEATURE：斜め帯の上のスマホ画面＋番号・見出し・説明・タグ（components/FeatureRow/README.md）を4つ。
  // 奇数番目は pink、偶数番目は blue。偶数番目は左右を入れ替える。960px 以下は画像が上・文章が下に積む。
  import SectionTitle from './SectionTitle.svelte'
  import PhoneFrame from './PhoneFrame.svelte'
  import Sparkle from './Sparkle.svelte'
  import Tags from './Tags.svelte'
  import { features, toneAt, otherTone } from '../data'
  import { bg, marker, outlined, textShadowPop, wrap } from '../ui'

  // 各行のキラキラの位置と大きさ（見本どおり）
  const sparkles = [
    'left-[4%] top-60 size-44',
    'right-[2%] top-80 size-40',
    'left-[2%] bottom-70 size-36',
    'right-[4%] bottom-90 size-38',
  ]
</script>

<section id="feature" class="relative pt-90 pb-120 max-sm:py-56">
  <div aria-hidden="true" class="absolute right-0 top-40 h-260 w-300 dots-blue opacity-60"></div>

  <div class={[wrap, 'flex flex-col gap-56']}>
    <SectionTitle en="FEATURE" ja="できること" />

    {#each features as f, i (f.title)}
      {@const tone = toneAt(i)}
      <div
        class={[
          'flex items-center gap-56 max-md:flex-col max-md:gap-20',
          i % 2 === 1 && 'flex-row-reverse',
        ]}
      >
        <!-- 斜め帯＋スマホ枠（components/DiagonalBands/README.md） -->
        <div class="relative h-600 w-[min(480px,100%)] shrink-0 max-md:self-center max-sm:h-500">
          <div aria-hidden="true" class={['absolute inset-y-0 left-[6%] w-[70%] clip-band-main', bg[tone]]}></div>
          <div aria-hidden="true" class={['absolute inset-y-0 left-[58%] w-[26%] clip-band-sub', bg[otherTone(tone)]]}></div>
          <Sparkle tone={otherTone(tone)} late={i % 2 === 1} class={sparkles[i]} />
          <div class="absolute left-1/2 top-18 -translate-x-1/2">
            <!-- スマホでは 500px の高さに収まるように枠を小さくする（比率はそのまま） -->
            <PhoneFrame src={f.screen?.src} alt={f.screen?.alt} label={f.label} class="max-sm:w-220" />
          </div>
        </div>

        <!-- 縦に積むときは、1行が長くなりすぎないように幅を 560px までにして中央にそろえる -->
        <div class="flex min-w-0 flex-[1_1_320px] flex-col gap-18 max-md:w-full max-md:max-w-560 max-md:flex-none">
          <p class="flex items-end gap-12">
            <span class={[outlined, 'text-number', textShadowPop[tone]]}>{String(i + 1).padStart(2, '0')}</span>
            <small class="pb-14 font-display text-[16px] font-bold leading-none tracking-[0.24em]">POINT</small>
          </p>
          <h3 class="text-[clamp(26px,2.8vw,36px)] font-black leading-[1.5]">
            <span class={marker[tone]}>{f.title}</span>
          </h3>
          <p class="text-body text-ink-muted">{f.body}</p>
          <Tags tags={f.tags} />
        </div>
      </div>
    {/each}
  </div>
</section>
