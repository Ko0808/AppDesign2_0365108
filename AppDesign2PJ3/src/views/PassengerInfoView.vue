<script setup>
import { ref, computed } from 'vue';
import BookingSummaryBar from '../components/BookingSummaryBar.vue';
import { useRouter } from 'vue-router';

// 各フォームの入力値を保持するための変数
const title = ref('');
const firstName = ref('');
const lastName = ref('');
const nationality = ref('');
const passportNumber = ref('');
const email = ref('');
const confirmEmail = ref('');
const countryCode = ref('');
const phoneNumber = ref('');

const isNextEnabled = computed(() => {
  return (
    firstName.value.trim() !== '' &&
    lastName.value.trim() !== '' &&
    nationality.value.trim() !== '' &&
    passportNumber.value.trim() !== ''
  );
});

const router = useRouter();
const goToPayment = () => {
  if (!isNextEnabled.value) return;
  router.push('/payment');
};
</script>

<template>
  <div class="passenger-info-page">
    <BookingSummaryBar />

    <form class="info-form" @submit.prevent="goToPayment">
      <section class="form-section">
        <h2>Personal Information</h2>
        <div class="form-group">
          <label for="title">Title</label>
          <select id="title" v-model="title">
            <option disabled value="">Please select one</option>
            <option>Mr.</option>
            <option>Mrs.</option>
            <option>Ms.</option>
          </select>
        </div>
        <div class="form-group">
          <label for="first-name">First Name</label>
          <input type="text" id="first-name" v-model="firstName">
        </div>
        <div class="form-group">
          <label for="last-name">Last Name</label>
          <input type="text" id="last-name" v-model="lastName">
        </div>
        <div class="form-group">
          <label for="nationality">Nationality</label>
          <input type="text" id="nationality" v-model="nationality">
        </div>
        <div class="form-group">
          <label for="passport">Passport Number</label>
          <input type="text" id="passport" v-model="passportNumber">
        </div>
      </section>

      <section class="form-section">
        <h2>Contact Information</h2>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email">
        </div>
        <div class="form-group">
          <label for="confirm-email">Confirm Email</label>
          <input type="email" id="confirm-email" v-model="confirmEmail">
        </div>
        <div class="form-group">
          <label for="country-code">Country Code</label>
          <input type="text" id="country-code" v-model="countryCode">
        </div>
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input type="tel" id="phone" v-model="phoneNumber">
        </div>
      </section>

      <button 
        class="next-button"
        :disabled="!isNextEnabled"
        @click="goToPayment"
      >
          Next
      </button>
    </form>
  </div>
</template>

<style scoped>
    .info-form { padding: 1.5rem 0; }
    .form-section { margin-bottom: 2rem; }
    .form-section h2 { font-size: 1.2rem; margin-bottom: 1rem; }
    .form-group { margin-bottom: 1rem; }
    .form-group label { display: block; margin-bottom: 0.5rem; color: #666; }
    .form-group input, .form-group select {
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    background-color: #fff;
    }
    .next-button {
      width: 100%;
      padding: 1rem;
      font-size: 1.1rem;
      font-weight: bold;
      color: white;
      background-color: var(--primary-color, #005d6a); /* ★ デフォルトを活性色に */
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;
    }
    /* ★ .activeセレクタを:disabledセレクタに変更 */
    .next-button:disabled {
        background-color: #6c757d; /* 非活性時の色 */
        cursor: not-allowed;
    }
</style>