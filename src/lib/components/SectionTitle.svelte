<script lang="ts">
  // 白抜きの英字＋白座布団の日本語ラベル（components/SectionTitle/README.md）。
  // 標準は英字の影が pink・ラベルが blue。alt で入れ替え、end で右寄せ。
  import { outlined } from '../ui'

  let {
    en,
    ja,
    alt = false,
    end = false,
  }: { en: string; ja: string; alt?: boolean; end?: boolean } = $props()
</script>

<div class={['flex flex-col gap-10', end ? 'items-end text-right' : 'items-start']}>
  <!-- 英字は飾り。見出しの意味は日本語の h2 に持たせる -->
  <p
    aria-hidden="true"
    class={[
      outlined,
      'text-[clamp(56px,8vw,104px)] leading-none tracking-[0.02em]',
      alt ? 'text-shadow-pop-blue' : 'text-shadow-pop-pink',
    ]}
  >
    {en}
  </p>
  <h2 class={['py-6 px-16 bg-surface text-heading-m', alt ? 'shadow-label-pink' : 'shadow-label-blue']}>{ja}</h2>
</div>
