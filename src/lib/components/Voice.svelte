<script lang="ts">
  // VOICE：ボイスの説明＋アプリ画面風の吹き出しカード＋A.I.VOICE の手順4つ。
  import SectionTitle from './SectionTitle.svelte'
  import SpeakerIcon from './SpeakerIcon.svelte'
  import Tags from './Tags.svelte'
  import { placeholders, toneAt } from '../data'
  import { bg, waveBar, waveDelays, wrap } from '../ui'

  // 手順の説明。{ code } の部分は等幅風のチップで出す
  type Part = string | { code: string }
  const steps: { t: string; d: Part[] }[] = [
    {
      t: 'リストを書き出す',
      d: [
        '編集画面の「VOICE」→「A.I.VOICE用のリストを書き出す」で、セリフを ',
        { code: '##' },
        ' でつないだテキストができます。ボイスがないセリフだけ、も選べます。',
      ],
    },
    {
      t: 'A.I.VOICE Editor で音声保存',
      d: [
        '「テキストを開く」で読み込み、区切り文字列 ',
        { code: '##' },
        '・ファイル命名規則 ',
        { code: '{Number}' },
        ' で保存。テキストファイルも一緒に保存します。',
      ],
    },
    {
      t: 'スマホに読み込む',
      d: ['できたフォルダをスマホにコピーし、「ボイスのフォルダを読み込む」で選ぶと、セリフと自動で対応づけられます。'],
    },
    { t: '「保存する」で完了', d: ['セリフにボイスが付いたのを確かめて、保存すれば完成です。'] },
  ]

  const bars = [
    { x: 4, y: 11, h: 8 },
    { x: 13, y: 5, h: 20 },
    { x: 22, y: 8, h: 14 },
    { x: 31, y: 2, h: 26 },
    { x: 40, y: 10, h: 10 },
  ]
</script>

<section id="voice" class="relative pt-110 pb-120 dots-line">
  <div class={[wrap, 'flex flex-col gap-40']}>
    <SectionTitle en="VOICE" ja="ボイスで、声でも話す" alt end />

    <div class="flex flex-wrap items-start gap-x-56 gap-y-40">
      <div class="flex min-w-0 flex-[1_1_380px] flex-col gap-18 max-sm:basis-full">
        <h3 class="text-[clamp(24px,2.6vw,32px)] font-black leading-[1.5]">
          <span class="marker-blue">セリフごとにボイスを付けられる</span>
        </h3>
        <p class="text-body text-ink-muted">
          キャラをタップしてセリフが変わると、ボイスが鳴ります。吹き出しのスピーカーボタンでもう一度聞けて、ウィジェットをタップしたときも鳴ります。ホーム画面の「ボイス
          オン/オフ」で自動再生を切り替えられます。
        </p>
        <Tags tags={['#WAVE', '#MP3', '#A.I.VOICE対応']} />

        <!-- アプリ画面のイメージ（Card＋SpeechBubble。操作はできない飾り） -->
        <div class="mt-14 flex flex-col gap-20 px-24 pt-34 pb-22 bg-surface border-bold border-ink rounded-2xl shadow-card">
          <div
            class="relative flex items-center gap-14 px-20 pt-22 pb-16 bg-surface border-bold border-ink rounded-xl shadow-[5px_5px_0_var(--color-pink)] text-[16px] font-bold leading-[1.7]"
          >
            <span class="absolute left-16 -top-16 py-3 px-12 bg-pink border-mid border-ink rounded-[8px] text-tag font-black">琴葉 茜</span>
            <p class="flex-1">{placeholders.akaneVoiceLine}</p>
            <span
              role="img"
              aria-label="もう一度聞くボタン"
              class="inline-flex size-44 shrink-0 items-center justify-center rounded-full border-mid border-ink bg-blue"
            >
              <SpeakerIcon size={22} />
            </span>
          </div>
          <div class="flex items-center justify-between gap-12">
            <span class="inline-flex items-center gap-10 text-[15px] font-black">
              <svg aria-hidden="true" viewBox="0 0 48 30" class="h-25 w-40 overflow-visible fill-ink">
                {#each bars as b, i (b.x)}
                  <rect x={b.x} y={b.y} width="5" height={b.h} rx="2.5" class={[waveBar, waveDelays[i]]} />
                {/each}
              </svg>
              ボイス
            </span>
            <span
              role="img"
              aria-label="ボイス オン"
              class="inline-flex items-center gap-8 py-4 pr-4 pl-14 bg-pink border-mid border-ink rounded-pill font-display text-[14px] font-bold leading-none"
            >
              ON<span class="size-26 rounded-full bg-surface border-mid border-ink"></span>
            </span>
          </div>
        </div>
      </div>

      <div class="flex min-w-0 flex-[1_1_440px] flex-col gap-14 max-sm:basis-full">
        <h3 class="mb-4 text-[clamp(22px,2.4vw,28px)] font-black leading-[1.5]">A.I.VOICE で、まとめて作れる</h3>
        <ol class="flex flex-col gap-14">
          {#each steps as s, i (s.t)}
            <li class="flex items-start gap-16 py-18 px-20 bg-surface border-bold border-ink rounded-xl">
              <span
                class={[
                  'inline-flex size-44 shrink-0 items-center justify-center rounded-full border-mid border-ink font-display text-[20px] font-bold leading-none',
                  bg[toneAt(i)],
                ]}>{i + 1}</span
              >
              <div>
                <p class="text-[17px] font-black">{s.t}</p>
                <p class="mt-4 text-[14px] leading-[1.8] text-ink-muted">
                  {#each s.d as part, j (j)}
                    {#if typeof part === 'string'}{part}{:else}<code
                        class="py-1 px-6 bg-surface-soft border-[1.5px] border-line rounded-xs font-display font-semibold text-ink"
                        >{part.code}</code
                      >{/if}
                  {/each}
                </p>
              </div>
            </li>
          {/each}
        </ol>
      </div>
    </div>
  </div>
</section>
