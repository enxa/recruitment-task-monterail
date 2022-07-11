<script>
  import { fade } from 'svelte/transition'
  import '../app.css';
</script>

<main transition:fade>
  <slot />
</main>