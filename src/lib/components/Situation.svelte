<script lang="ts">
  // SITUATION：話す状況ごとのカード7枚＋「どれを話す？」の説明カード。
  import SectionTitle from './SectionTitle.svelte'
  import { situations, toneAt, type SituationIcon } from '../data'
  import { bg, wrap } from '../ui'

  const card = 'flex flex-col items-start gap-8 p-20 border-bold border-ink rounded-xl'
</script>

<!-- アイコンは線の太さ 2.2px、角の丸い ink の線画（README「アイコン」） -->
{#snippet icon(name: SituationIcon)}
  <svg aria-hidden="true" viewBox="0 0 24 24" class="size-26 fill-none stroke-ink stroke-[2.2] [stroke-linecap:round] [stroke-linejoin:round]">
    {#if name === 'chat'}
      <path d="M4 5h16v11H9l-5 4z" />
    {:else if name === 'clock'}
      <circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" />
    {:else if name === 'calendar'}
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" /><path d="M3.5 10h17M8 3v4M16 3v4" />
    {:else if name === 'gift'}
      <rect x="4" y="9" width="16" height="11" rx="1.5" />
      <path d="M3 9h18M12 9v11M12 9c-1.5-4-5.5-4-5.5-1.5S10 9 12 9zM12 9c1.5-4 5.5-4 5.5-1.5S14 9 12 9z" />
    {:else if name === 'bolt'}
      <path d="M13 3L6 13h5l-1 8 7-10h-5z" />
    {:else if name === 'battery'}
      <rect x="3" y="7.5" width="16" height="9" rx="2" /><path d="M21 10.5v3M6.5 10.5v3" />
    {:else if name === 'heart'}
      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
    {/if}
  </svg>
{/snippet}

<section id="situation" class="relative py-110 max-sm:py-56">
  <div aria-hidden="true" class="absolute left-0 top-30 h-260 w-300 dots-pink opacity-50"></div>

  <div class={[wrap, 'flex flex-col gap-40']}>
    <SectionTitle en="SITUATION" ja="話す状況でセリフが変わる" />

    <div class="flex max-w-720 flex-col gap-10">
      <h3 class="text-[clamp(24px,2.6vw,32px)] font-black leading-[1.5]">
        <span class="marker-pink">キャラクターによる多種多様な言葉</span>
      </h3>
      <p class="text-body text-ink-muted">
        セリフごとに「いつ話すか」を選べます。特定の時間帯や曜日、記念日にしか話さない会話も？
        茜・葵には、曜日・お正月・クリスマス・充電・電池・久しぶりのセリフが最初から入っています。
      </p>
    </div>

    <ul class="grid grid-cols-4 gap-20 max-md:grid-cols-2 max-xs:grid-cols-1">
      {#each situations as s, i (s.name)}
        <!-- 480px 以下はアイコンを左に置いた横長のカードにして、縦の長さを抑える -->
        <li class={[card, 'bg-surface shadow-pop max-xs:flex-row max-xs:gap-14 max-xs:py-16']}>
          <span
            class={['inline-flex size-48 shrink-0 items-center justify-center rounded-full border-mid border-ink', bg[toneAt(i)]]}
          >
            {@render icon(s.icon)}
          </span>
          <div class="flex flex-col gap-8 max-xs:gap-2">
            <p class="mt-4 text-[20px] font-black max-xs:mt-0 max-xs:text-[18px]">{s.name}</p>
            <p class="text-[14px] leading-[1.7] text-ink-muted">{s.when}</p>
          </div>
        </li>
      {/each}
      <li class={[card, 'bg-ink text-on-ink shadow-[5px_5px_0_var(--color-blue)]']}>
        <p class="font-display text-tag tracking-[0.2em] text-pink">HOW IT PICKS</p>
        <p class="text-[20px] font-black">どれを話す？</p>
        <p class="text-[14px] leading-[1.7] text-on-ink-muted">
          「久しぶり」→「記念日」の順に優先。ほかは今当てはまる条件のセリフから選び、なければ普段のセリフを話します。
        </p>
      </li>
    </ul>
  </div>
</section>
