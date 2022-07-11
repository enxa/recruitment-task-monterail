<script>
  import { goto } from '$app/navigation'
  import { slide } from 'svelte/transition'
  import { user, showRegisterFormEmailPassword, showRegisterFormNameBirthdate } from '../app.js'

  let adult = null

  let validatedateOfBirth = () => {
    new Date().getFullYear() - $user.dateOfBirth.split('-')[0]*1 < 18 ? adult = false : adult = true
  }

  let handleSubmit = () => {
    if (!adult) {
      return
    }

    if (
      $user.email.length > 0 &&
      $user.password.length > 0 && 
      $user.firstName.length > 0 && 
      $user.lastName.length > 0 && 
      $user.dateOfBirth.length > 0 && 
      $user.acceptPrivacyPolicy === true
    ) {
      goto('/thanks')
      $showRegisterFormNameBirthdate = false
      $showRegisterFormEmailPassword = true
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label class="first-name">
    <span>First Name</span>
    <input type="text" placeholder="e.g. Jessica" required bind:value={$user.firstName}>
  </label>
  <label class="last-name">
    <span>Last Name</span>
    <input type="text" placeholder="e.g. Walton" required bind:value={$user.lastName}>
  </label>
  <label class="date-of-birth">
    <span>Date of birth</span>
    <input type="date" required bind:value={$user.dateOfBirth} on:input={validatedateOfBirth}>
  </label>
  <div class="validation-date-of-birth">
    {#if adult === false}
      <p transition:slide>You should be minimum 18 years old</p>
    {/if}
  </div>
  <label class="accept-privay-policy">
    <input type=checkbox bind:checked={$user.acceptPrivacyPolicy}>
      <p>I accept <a href="https://www.monterail.com">Privacy Policy</a></p>
  </label>
  <div class="buttons">
    <button class="next-step">Next step</button>
    <button class="log-in" on:click|preventDefault>Log in instead</button>
  </div>
</form>

<style>
  form {
    display: flex;
    flex-flow: column nowrap;
    padding: 2.4rem;
    margin-bottom: 12.4rem;
  }
  @media (min-width: 640px) {
    form {
      box-shadow: 0px 4px 22px rgba(52, 53, 65, 0.15);
      border-radius: 24px;
      padding: 6.4rem;
    }
  }
    label span {
      font: var(--font-small-bold);
      color: var(--color-froly);
      display: block;
      margin-bottom: .4rem;
    }
    label {
      display: grid;
      grid-template-columns: 1fr;
    }
    label.first-name, label.last-name {
      margin-bottom: 1.6rem;
    }
    label.date-of-birth input {
      text-transform: uppercase;
    }
    div.validation-date-of-birth {
      padding-bottom: 2.55rem;
      font: var(--font-small-regular);
    }
    label.accept-privay-policy {
      display: flex;
      align-items: center;
      margin-bottom: 4rem;
      cursor: pointer;
    }
      label.accept-privay-policy input {
        width: 2.4rem;
        height: 2.4rem;
        margin-right: 1.2rem;
        position: relative;
        visibility: hidden;
      }
      label.accept-privay-policy input::before {
        content: '';
        visibility: visible;
        position: absolute;
        width: 100%;
        height: 100%;
        border: .075rem solid var(--color-bombay);
        border-radius: .8rem;
      }
      label.accept-privay-policy input:checked::after {
        content: '';
        visibility: visible;
        position: absolute;
        width: 100%;
        height: 100%;
        border: .075rem solid var(--color-bombay);
        border-radius: .8rem;
        background: url("/images/tick.svg") no-repeat center center / contain;
        opacity: 1;
        transition: .4s all ease-in-out;
      }

      label.accept-privay-policy a {
        color: var(--color-tuna);
        position: relative;
      }
        label.accept-privay-policy a::before {
          content: '';
          position: absolute;
          width: 0;
          left: 0;
          bottom: 0;
          height: 1px;
          background: var(--color-tuna);
          transition: .4s width;
        }
        label.accept-privay-policy:hover a::before {
          width: 100%;
        }
      
    div.buttons {
      display: grid;
      grid-template-columns: 1fr;
      gap: .5rem;
    }
    @media (min-width: 640px) {
      div.buttons {
        grid-template-columns: 1fr 1fr;
      }
        button.next-step {
          grid-column: 2/3;
          grid-row: 1/2;
        }
        button.log-in {
          grid-column: 1/2;
          grid-row: 1/2;
        }
    }
      button.log-in {
        color: var(--color-crimson);
        background: var(--color-white);
      }
</style>