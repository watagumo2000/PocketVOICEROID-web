<script lang="ts">
  // CHARACTER：サムネイルと ‹ › でキャラを切り替える。
  // 切り替えるたびに {#key} で中身を作り直し、animate-swap（右から 40px スライド＋フェードイン 0.45 秒）を再生する。
  // 「視差効果を減らす」設定では app.css で動きが止まる。
  import SectionTitle from './SectionTitle.svelte'
  import { characters, toneAt, otherTone } from '../data'
  import { bg, outlined, shadowQuote, wrap } from '../ui'

  let idx = $state(0)
  const n = characters.length

  const c = $derived(characters[idx])
  const main = $derived(toneAt(idx))
  const sub = $derived(otherTone(main))
  const no = (i: number) => String(i + 1).padStart(2, '0')

  const prev = () => (idx = (idx - 1 + n) % n)
  const next = () => (idx = (idx + 1) % n)

  // 名前の札（components/NamePlate/README.md）の二重のずらし影
  const plateShadow = {
    pink: 'shadow-[5px_5px_0_var(--color-pink),5px_5px_0_3px_var(--color-ink)]',
    blue: 'shadow-[5px_5px_0_var(--color-blue),5px_5px_0_3px_var(--color-ink)]',
  }
  // ‹ › の丸ボタン
  const arrow = 'size-48 rounded-full border-mid border-ink bg-surface text-[20px] font-black cursor-pointer'
</script>

<section id="character" class="relative py-110 bg-surface dots-line max-sm:py-56">
  <!-- 上端の斜めの切り替え（白い三角＋ピンクの細い帯） -->
  <div aria-hidden="true" class="absolute inset-x-0 top-0 h-60 bg-surface [clip-path:polygon(0_0,100%_0,100%_0,0_100%)]"></div>
  <div aria-hidden="true" class="absolute inset-x-0 top-0 h-14 bg-pink origin-top-left [transform:skewY(-1.4deg)_translateY(56px)]"></div>

  <div class={[wrap, 'flex flex-col gap-40']}>
    <SectionTitle en="CHARACTER" ja="キャラクター紹介" alt end />

    <div class="flex flex-wrap items-center gap-x-56 gap-y-32">
      {#key idx}
        <!-- 斜め帯＋立ち絵＋名前の札 -->
        <div class="relative h-620 min-w-0 flex-[1_1_420px] animate-swap max-sm:h-480 max-sm:basis-full">
          <div aria-hidden="true" class={['absolute inset-y-0 left-[12%] w-[62%] clip-band-main', bg[main]]}></div>
          <div aria-hidden="true" class={['absolute inset-y-0 left-[62%] w-[22%] clip-band-sub', bg[sub]]}></div>
          <p aria-hidden="true" class={[outlined, 'absolute left-0 top-10 text-[160px] leading-[0.9] opacity-90 max-sm:text-number']}>
            {no(idx)}
          </p>
          <!-- animate-bob が translate を使うので、中央寄せは transform で行う -->
          <img
            src={c.img}
            alt={c.name}
            class="absolute left-1/2 bottom-40 w-[min(460px,92%)] [transform:translateX(-50%)] animate-bob"
          />
          <p
            class={[
              'absolute right-[2%] top-30 writing-vertical py-16 px-8 bg-surface border-bold border-ink rounded-sm text-[22px] font-black leading-none tracking-[0.16em]',
              plateShadow[main],
            ]}
          >
            {c.name}
          </p>
        </div>

        <div class="flex min-w-0 flex-[1_1_380px] flex-col gap-18 animate-swap">
          <p class="font-display text-eyebrow-en">{c.en}</p>
          <h3 class="flex flex-wrap items-baseline gap-x-16 gap-y-4 text-[clamp(32px,3.6vw,46px)] font-black leading-[1.3]">
            {c.name}<span class="text-[16px] font-bold text-ink-muted">{c.kana}</span>
          </h3>
          <p class="flex flex-wrap items-center gap-10">
            <!-- CvPill（components/CvPill/README.md） -->
            <span class="inline-flex items-stretch overflow-hidden bg-surface border-thin border-ink rounded-pill">
              <span class={['py-5 px-12 text-caption font-black leading-[1.5]', bg[main]]}>VOICE</span>
              <span class="py-5 px-14 text-label">{c.cv}</span>
            </span>
            <span class="text-label text-ink-muted">{c.role}</span>
          </p>
          <!-- QuoteBox：名前の札とは逆の色の影 -->
          <p class={['mt-6 py-16 px-20 bg-surface text-quote', shadowQuote[sub]]}>「{c.quote}」</p>
          <p class="text-body text-ink-muted">{c.prof}</p>
        </div>
      {/key}
    </div>

    <!-- 480px 以下は「追加できる」の枠を隠して（下の説明文と同じ内容）、‹ サムネイル › を1行に収める -->
    <div role="group" aria-label="キャラクターを選ぶ" class="flex flex-wrap items-center justify-center gap-14 max-xs:gap-8">
      <button type="button" class={arrow} aria-label="前のキャラクター" onclick={prev}>‹</button>
      {#each characters as ch, i (ch.name)}
        <!-- CharacterThumb（components/CharacterThumb/README.md） -->
        <button
          type="button"
          aria-label={ch.name}
          aria-pressed={i === idx}
          onclick={() => (idx = i)}
          class={[
            'relative flex size-96 items-end justify-center overflow-hidden pb-6 border-bold border-ink rounded-xl cursor-pointer',
            'transition-[translate,box-shadow] duration-150 not-aria-pressed:hover:-translate-y-3 aria-pressed:-translate-y-4 aria-pressed:shadow-thumb',
            bg[toneAt(i)],
          ]}
        >
          <img src={ch.img} alt="" class="absolute inset-0 size-full object-cover object-[50%_14%]" />
          <span class="relative px-8 bg-surface border-thin border-ink rounded-pill font-display text-caption font-bold leading-[1.4]">
            {no(i)}
          </span>
        </button>
      {/each}
      <span
        class="inline-flex size-96 flex-col items-center justify-center gap-2 bg-surface border-mid border-dashed border-ink rounded-xl text-center text-caption font-bold leading-[1.4] max-xs:hidden"
      >
        <span aria-hidden="true" class="text-[26px] font-black leading-none">＋</span>キャラを<br />追加できる
      </span>
      <button type="button" class={arrow} aria-label="次のキャラクター" onclick={next}>›</button>
    </div>
    <p class="-mt-16 text-center text-tag font-medium leading-[1.8] text-ink-muted">
      キャラは自由に追加できます。茜・葵を削除しても、ホーム画面の「茜・葵を呼び戻す」で戻せます。
    </p>
  </div>
</section>
