<script>
  import { showRegisterFormEmailPassword, showRegisterFormNameBirthdate } from '../app.js'
  import Header from '$components/Header.svelte'
  import Content from '$components/Content.svelte'
  import RegisterFormEmailPassword from '$components/RegisterFormEmailPassword.svelte'
  import RegisterFormNameBirthdate from '$components/RegisterFormNameBirthdate.svelte'
</script>

<svelte:head>
  <title>Monte Cinema</title>
  <meta name="description" content="Best cinema in the town" />
</svelte:head>

<Header />

{#if $showRegisterFormEmailPassword}
  <Content headline="Ahoy you!" subheadline="Care to register?">
    <RegisterFormEmailPassword />
  </Content>
{/if}

{#if $showRegisterFormNameBirthdate}
  <Content headline="Great!" subheadline="Now your name">
    <RegisterFormNameBirthdate />
  </Content>
{/if}