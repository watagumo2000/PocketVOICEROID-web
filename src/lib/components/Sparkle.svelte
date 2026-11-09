<script lang="ts">
  // 4点星のキラキラ。位置と大きさは class で渡す（absolute で置く）。
  import type { Tone } from '../data'

  let {
    tone = 'blue',
    late = false,
    class: className = '',
  }: { tone?: Tone | 'white'; late?: boolean; class?: string } = $props()

  const fills = { pink: 'fill-pink', blue: 'fill-blue', white: 'fill-surface' }
</script>

<svg
  aria-hidden="true"
  viewBox="-20 -20 40 40"
  class={[
    'absolute animate-twinkle transform-fill origin-center',
    late && '[animation-delay:-0.9s]',
    fills[tone],
    className,
  ]}
>
  <use href="#spk" x="-20" y="-20" width="40" height="40" />
</svg>
