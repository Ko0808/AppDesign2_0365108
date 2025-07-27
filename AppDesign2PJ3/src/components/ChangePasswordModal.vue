<script setup>
import { ref, computed } from 'vue';

const emit = defineEmits(['close']);

// 現在のステップを管理 ('enter' or 'confirm')
const step = ref('enter');

const currentPassword = ref('');
const newPassword = ref('');
const confirmPassword = ref('');

// 「Next」ボタンが有効になる条件
const isNextButtonDisabled = computed(() => {
  return currentPassword.value.length < 8; // 例: 8文字以上
});

// 「Confirm」ボタンが有効になる条件
const isConfirmButtonDisabled = computed(() => {
  return newPassword.value.length < 8 || newPassword.value !== confirmPassword.value;
});

// 次のステップに進む関数
const goToConfirmStep = () => {
  step.value = 'confirm';
};

// パスワード変更を確定する関数
const confirmChange = () => {
  console.log('Password changed!');
  emit('close'); 
};
</script>

<template>
  <div class="change-password-modal">
    <div class="title-bar">
      <h2>Change Password</h2>
    </div>

    <div v-if="step === 'enter'" class="form-container">
      <div class="input-group">
        <label for="current-password">Current Password</label>
        <input type="password" id="current-password" v-model="currentPassword">
      </div>
      <a href="#" class="forgot-link">Forget password?</a>
      <button class="next-button" :disabled="isNextButtonDisabled" @click="goToConfirmStep">
        Next
      </button>
    </div>

    <div v-else-if="step === 'confirm'" class="form-container">
      <div class="input-group">
        <label for="new-password">New Password</label>
        <input type="password" id="new-password" v-model="newPassword">
      </div>
      <div class="input-group">
        <label for="confirm-password">Confirm New Password</label>
        <input type="password" id="confirm-password" v-model="confirmPassword">
      </div>
      <button class="next-button" :disabled="isConfirmButtonDisabled" @click="confirmChange">
        Confirm
      </button>
    </div>
  </div>
</template>

<style scoped>
.title-bar {
  background-color: var(--primary-color, #005d6a);
  color: white;
  padding: 1rem;
  /* モーダルの角丸に合わせて調整 */
  border-radius: 1.5rem 1.5rem 0 0; 
}
.title-bar h2 {
  margin: 0;
  font-size: 1.2rem;
  text-align: center;
}
.form-container {
  padding: 2rem 1rem;
}
.input-group {
  position: relative;
}
.input-group label {
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  font-size: 0.8rem;
  color: #888;
}
.input-group input {
  width: 100%;
  padding: 1.8rem 1rem 0.6rem 1rem;
  font-size: 1.1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}
.forgot-link {
  display: block;
  text-align: right;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #666;
  text-decoration: none;
}
.next-button {
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  color: white;
  background-color: var(--primary-color, #005d6a);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: 2rem;
  transition: background-color 0.2s;
}
.next-button:disabled {
  background-color: #d8d8d8;
  color: #888;
  cursor: not-allowed;
}
</style>