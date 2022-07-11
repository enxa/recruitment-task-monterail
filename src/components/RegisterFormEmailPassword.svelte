<script>
  import { user, showRegisterFormEmailPassword, showRegisterFormNameBirthdate } from '../app.js'

  let passwordVisible = null;
  
  let passwordValidation = [
    {
      condition: 'At least 8 characters',
      isValid: null,
      regex: /.{8,}$/
    },
    {
      condition: 'At least one letter',
      isValid: null,
      regex: /[a-zA-Z]/
    },
    {
      condition: 'At least one digit',
      isValid: null,
      regex: /[0-9]/
    },
  ]

  let validatePassword = () => {
    passwordValidation.forEach((_, i) => {
      passwordValidation[i].regex.test($user.password) ? 
      passwordValidation[i].isValid = true : 
      passwordValidation[i].isValid = false
    })
  }

  let handleSubmit = () => {
    if (passwordValidation.some(({ isValid }) => isValid === false || isValid === null)) {
      return
    }
    $showRegisterFormEmailPassword = false
    $showRegisterFormNameBirthdate = true
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <label class="email">
    <span>Email</span>
    <input type="text" placeholder="Something ending with..." required bind:value={$user.email}>
  </label>
  <label class="password">
    <span>Password</span>
    <div>
      {#if !passwordVisible}
        <input type="password" placeholder="Enter your password" required bind:value={$user.password} on:input={validatePassword}>
        <img src="/images/eye.svg" alt="eye icon" on:click={() => passwordVisible = true}>
      {/if}
      {#if passwordVisible}
        <input type="text" placeholder="Enter your password" required bind:value={$user.password} on:input={validatePassword}>
        <img src="/images/eye-close.svg" alt="eye icon" on:click={() => passwordVisible = false}>
      {/if}
    </div>
    <input style="display: none">
  </label>
  <div class="validation-password">
    {#if $user.password}
      {#each passwordValidation as password}
        <p class:valid={password.isValid == true} class:invalid={password.isValid == false}>{password.condition}</p>
      {/each}
    {/if}
  </div>
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
    label.email {
      margin-bottom: 1.6rem;
    }
    label.password div {
      position: relative;
    }
      label.password input {
        width: 100%;
      }
      label.password img {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 2rem;
        width: 7rem;
        height: 100%;
        cursor: pointer;
      }
    div.validation-password {
      padding-bottom: 4rem;
      font: var(--font-small-regular);
    }
      div.validation-password p.valid {
        color: var(--color-junglegreen);
      }
      div.validation-password p.invalid {
        color: var(--color-crimson);
      }
    div.buttons {
      display: grid;
      grid-template-columns: 1fr;
      gap: .8rem;
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

input[type=password]::-ms-reveal,
input[type=password]::-ms-clear {
  display: none;
}
</style>