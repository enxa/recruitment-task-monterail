<script>
  import { goto } from '$app/navigation'
  import { user } from '../app.js'
  import Header from '$components/Header.svelte'
  import Content from '$components/Content.svelte'

  let gotoHomePage = () => {
    Object.keys($user).forEach(v => $user[v] = '')
    $user.acceptPrivacyPolicy = false
    console.log($user)
    goto('/')
  }
</script>

<svelte:head>
  <title>Monte Cinema</title>
  <meta name="description" content="Best cinema in the town" />
</svelte:head>

<Header />

<Content headline="Good job {$user.firstName}" textAlign="center">
  <div>
    <p>We have sent you an email to <strong>{$user.email}</strong></p>
    <p>Make sure to click the link from the message to activate your account.</p>
    <button on:click={gotoHomePage}>Go to homepage</button>
  </div>
</Content>

<style>
  div {
    display: grid;
    place-items: center;
  }
    p {
      text-align: center;
    }
    button {
      margin-top: 4.8rem;
      text-align: center;
    }
</style>