<script lang="ts">
  // 「ボイスを聞く」のスピーカー。アイコンの線画の基準（README「アイコン」）。
  // 塗りの色は fill-pink などのクラスで渡す。
  let { fillClass = 'fill-surface', size = 18 }: { fillClass?: string; size?: number } = $props()
</script>

<svg aria-hidden="true" width={size} height={size} viewBox="0 0 18 18" class="shrink-0">
  <path d="M3 7 H6 L10 3 V15 L6 11 H3 Z" class={[fillClass, 'stroke-ink stroke-[1.8] [stroke-linejoin:round]']} />
  <path d="M12.5 6 Q14.5 9 12.5 12" class="fill-none stroke-ink stroke-[1.8] [stroke-linecap:round]" />
</svg>
