<script setup>
import { ref } from 'vue';

// 支払い方法タブの状態管理
const activePaymentTab = ref('credit-card');

// フォームの入力値を保持する変数
const cardNumber = ref('');
const expiryDate = ref('');
const cvv = ref('');
const holderName = ref('');

// 保険の選択状態を管理（radioボタンなので、一つの選択肢だけを保持）
const selectedInsurance = ref('no_insurance'); // 初期値は'No Insurance'

// 利用規約の同意状態を管理
const termsAccepted = ref(false);
</script>

<template>
  <div class="payment-page">
    <h2>Payment Method</h2>

    <div class="payment-tabs">
      <button 
        :class="{ active: activePaymentTab === 'credit-card' }" 
        @click="activePaymentTab = 'credit-card'">
        Credit Card
      </button>
      <button 
        :class="{ active: activePaymentTab === 'online-banking' }" 
        @click="activePaymentTab = 'online-banking'">
        Online Banking
      </button>
      <button 
        :class="{ active: activePaymentTab === 'e-wallet' }" 
        @click="activePaymentTab = 'e-wallet'">
        E-Wallet
      </button>
    </div>

    <div class="tab-content" v-if="activePaymentTab === 'credit-card'">
      <div class="form-card">
        <div class="input-group">
          <label for="card-number">Card Number</label>
          <input type="text" id="card-number" v-model="cardNumber">
        </div>
        <div class="form-row">
          <div class="input-group">
            <label for="expiry-date">Expiry Date</label>
            <input type="text" id="expiry-date" v-model="expiryDate" placeholder="MM/YY">
          </div>
          <div class="input-group">
            <label for="cvv">CVV</label>
            <input type="text" id="cvv" v-model="cvv">
          </div>
        </div>
        <div class="input-group">
          <label for="holder-name">Holder's Name</label>
          <input type="text" id="holder-name" v-model="holderName">
        </div>
      </div>
    </div>
    
    <section class="insurance-section">
      <h2>Insurance</h2>
      <div class="insurance-options">
        <label class="insurance-option">
          <input type="radio" name="insurance" value="premium" v-model="selectedInsurance">
          <span class="label-text">Premium Insurance</span>
          <span class="price">RM90</span>
        </label>
        <label class="insurance-option">
          <input type="radio" name="insurance" value="normal" v-model="selectedInsurance">
          <span class="label-text">Normal Insurance</span>
          <span class="price">RM40</span>
        </label>
        <label class="insurance-option">
          <input type="radio" name="insurance" value="no_insurance" v-model="selectedInsurance">
          <span class="label-text">No Insurance</span>
          <span class="price">RM0</span>
        </label>
      </div>
    </section>

    <div class="terms-checkbox">
      <label>
        <input type="checkbox" v-model="termsAccepted">
        I understand terms & conditions
      </label>
    </div>

    <button class="pay-button" :disabled="!termsAccepted">
      Pay
    </button>
  </div>
</template>

<style scoped>
h2 { font-size: 1.2rem; margin-bottom: 1rem; }

/* 支払い方法タブ */
.payment-tabs { display: flex; gap: 0.5rem; margin-bottom: 1rem; }
.tab-button {
  flex-grow: 1;
  padding: 0.75rem;
  font-size: 0.9rem;
  font-weight: bold;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  background-color: #f0f0f0;
  color: #666;
  cursor: pointer;
}
.tab-button.active {
  background-color: var(--primary-color, #005d6a);
  color: white;
  border-color: var(--primary-color, #005d6a);
}

/* フォーム */
.form-card {
  background-color: #f5f5dc; /* ベージュ系の色 */
  padding: 1.5rem 1rem;
  border-radius: 0.5rem;
}
.form-row { display: flex; gap: 1rem; }
.form-row .input-group { flex: 1; }
.input-group { margin-bottom: 1rem; }
.input-group:last-child { margin-bottom: 0; }
.input-group label { display: block; margin-bottom: 0.5rem; color: #333; font-weight: 500;}
.input-group input {
  width: 100%;
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
}

/* 保険セクション */
.insurance-section { margin-top: 2rem; }
.insurance-options { background-color: #fff; padding: 0.5rem 1rem; border-radius: 0.5rem; }
.insurance-option {
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}
.insurance-option:last-child { border-bottom: none; }
.insurance-option input[type="radio"] { margin-right: 1rem; }
.insurance-option .label-text { flex-grow: 1; }
.insurance-option .price { font-weight: bold; }

/* 利用規約 */
.terms-checkbox { margin-top: 1.5rem; }
.terms-checkbox label { display: flex; align-items: center; gap: 0.5rem; }

/* 支払いボタン */
.pay-button {
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  color: white;
  background-color: var(--primary-color, #005d6a);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: 1.5rem;
}
.pay-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>