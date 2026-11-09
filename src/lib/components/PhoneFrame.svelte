<script lang="ts">
  // スマホ枠（components/PhoneFrame/README.md）。src を渡すまでは点線の枠で場所だけ示す。
  // 比率は 260:563 で固定。幅は class で変えられる（基準は 260px）。
  let {
    src,
    alt = '',
    label,
    class: className = '',
  }: { src?: string; alt?: string; label: string; class?: string } = $props()
</script>

<div
  class={[
    'w-260 max-w-full aspect-[260/563] p-10 bg-surface border-frame border-ink rounded-phone shadow-card',
    className,
  ]}
>
  <div class="size-full rounded-screen overflow-hidden bg-surface-soft">
    {#if src}
      <img {src} {alt} class="block size-full object-cover" />
    {:else}
      <div
        class="flex flex-col items-center justify-center gap-6 size-full border-2 border-dashed border-placeholder rounded-screen text-ink-muted text-tag text-center"
      >
        <span class="whitespace-pre-line">{label}</span>
        <span class="text-caption">縦長（例：1080×2400）</span>
      </div>
    {/if}
  </div>
</div>
