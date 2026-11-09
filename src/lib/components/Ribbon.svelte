<script lang="ts">
  // 流れるテープ（components/Ribbon/README.md）。同じ並びを繰り返して、つなぎ目なしでループさせる。
  // メインビジュアルの下端に重ねる（-mt-46）。
  const words = ['VOICEROID POCKET', 'KOTONOHA AKANE', 'KOTONOHA AOI']
  const loop = Array.from({ length: 4 }, () => words).flat()
</script>

<div aria-hidden="true" class="relative z-2 h-70 -mt-46">
  <div
    class="absolute -inset-x-[5%] top-10 flex h-46 items-center overflow-hidden whitespace-nowrap bg-pink border-y-3 border-ink -rotate-2"
  >
    <div class="inline-flex animate-marquee font-display text-[20px] font-bold leading-none tracking-[0.12em]">
      {#each loop as word, i (i)}
        <span class="pr-[1.4em]">{word}</span><span class="pr-[1.4em]">✦</span>
      {/each}
    </div>
  </div>
  <div class="absolute -inset-x-[5%] top-64 h-8 bg-blue -rotate-2"></div>
</div>
