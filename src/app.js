import { writable } from 'svelte/store'

export const user = writable({
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  acceptPrivacyPolicy: false
})

export const showRegisterFormEmailPassword = writable(true)
export const showRegisterFormNameBirthdate = writable(false)