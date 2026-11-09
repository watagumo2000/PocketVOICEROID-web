<script lang="ts">
  import { tag } from '../ui'

  let { tags }: { tags: string[] } = $props()
</script>

<ul class="flex flex-wrap gap-8">
  {#each tags as t (t)}
    <li class={tag}>{t}</li>
  {/each}
</ul>
