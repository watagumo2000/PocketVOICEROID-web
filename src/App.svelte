<script lang="ts">
  import SvgDefs from './lib/components/SvgDefs.svelte'
  import Header from './lib/components/Header.svelte'
  import Hero from './lib/components/Hero.svelte'
  import Ribbon from './lib/components/Ribbon.svelte'
  import Features from './lib/components/Features.svelte'
  import Characters from './lib/components/Characters.svelte'
  import Situation from './lib/components/Situation.svelte'
  import Voice from './lib/components/Voice.svelte'
  import About from './lib/components/About.svelte'
  import Footer from './lib/components/Footer.svelte'
</script>

<SvgDefs />
<Header />
<!-- テープなどの飾りが左右にはみ出しても、スマホでページの幅が広がらないように切る -->
<div class="overflow-x-clip">
  <main>
    <Hero />
    <Ribbon />
    <Features />
    <Characters />
    <Situation />
    <Voice />
    <About />
  </main>
  <Footer />
</div>
