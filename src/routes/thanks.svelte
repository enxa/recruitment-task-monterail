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

<Content>
  <div class="headlines">
    <h1 class="headline">Good job {$user.firstName}</h1>
  </div>
  <div >
    <p>We have sent you an email to <strong>{$user.email}</strong></p>
    <p>Make sure to click the link from the message to activate your account.</p>
    <button on:click={gotoHomePage}>Go to homepage</button>
  </div>
</Content>

<style>
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