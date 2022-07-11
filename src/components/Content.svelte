<script>
  export let headline = ''
  export let subheadline = ''
</script>

<section>
  <div class="headlines">
    <h1 class="headline">{headline}</h1>
    <h1 class="subheadline">{subheadline}</h1>
  </div>
  <div>
    <slot />
  </div>
</section>

<style>
  section {
    width: 100%;
    height: 100%;
    margin: auto;
    max-width: 600px;
  }
    div.headlines {
      margin: 6.4rem 0 2.4rem 0;
    }
    @media (min-width: 640px) {
      div.headlines {
        margin: 12.4rem 0 4rem 0;
      }
    }
      h1 {
        font: var(--font-large-semibold);
        text-align: center;
      }
      @media (min-width: 640px) {
        h1 {
          text-align: left;
          font-size: 8rem;
          line-height: 8.16rem;
          letter-spacing: -.1rem;
        }
      }
      h1.headline {
        color: var(--color-tuna);
      }
      h1.subheadline {
        color: var(--color-jumbo);
      }
</style>