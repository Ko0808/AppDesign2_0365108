<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; 

const router = useRouter();

const passengerName = ref('');
const nationality = ref('');
const passportNumber = ref('');

const goToSeatSelection = () => {
  router.push('/seat-selection');
};
</script>

<template>
  <div class="personal-info-page">
    <div class="page-title-chip">Check-in</div>

    <div class="content-card">
      <h2 class="section-title">Personal Information</h2>

      <div class="form-inputs">
        <div class="input-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="passengerName">
        </div>
        <div class="input-group">
          <label for="nationality">Nationality</label>
          <input type="text" id="nationality" v-model="nationality">
        </div>
        <div class="input-group">
          <label for="passport">Passport Number</label>
          <input type="text" id="passport" v-model="passportNumber">
        </div>
      </div>

      <div class="navigation-buttons">
        <router-link to="/prohibited-items" class="nav-button back">Back</router-link>
        <button class="nav-button next" @click="goToSeatSelection">Next</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-title-chip {
  display: inline-block;
  background-color: #e0e0e0;
  padding: 0.25rem 1rem;
  border-radius: 1rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
}
.content-card {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.section-title {
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  color: #333;
  margin: 0;
  padding-bottom: 1.5rem;
}
.form-inputs {
  display: flex;
  flex-direction: column;
  gap: 2rem; /* 入力欄の間隔を広げる */
}
.input-group {
  display: flex;
  flex-direction: column;
}
.input-group label {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
}
.input-group input {
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 0.5rem 0;
  font-size: 1.1rem;
}
.input-group input:focus {
  outline: none;
  border-bottom-color: var(--primary-color, #005d6a);
}
.navigation-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 3rem;
}
.nav-button {
  flex: 1;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 0.5rem;
  cursor: pointer;
}
.back {
  background-color: #e0e0e0;
  color: #333;
  border: none;
}
.next {
  background-color: #6c757d;
  color: white;
  border: none;
}
</style>