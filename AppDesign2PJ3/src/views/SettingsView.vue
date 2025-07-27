<script setup>

    import { ref } from 'vue';

    import BottomSheet from '../components/BottomSheet.vue';

    import ChangePasswordModal from '../components/ChangePasswordModal.vue';


    // どの設定モーダルが開いているかを管理 ('country', 'language', 'currency', or null)
    const activeModal = ref(null);

    // ダミーデータ
    const countries = ref(['Malaysia', 'Singapore', 'Thailand', 'Vietnam']);
    const languages = ref(['English', 'Bahasa Melayu', '中文']);
    const currencies = ref(['MYR', 'SGD', 'THB', 'VND']);

    // モーダル内で項目がクリックされた時の処理（現状は閉じるだけ）
    const onOptionSelect = (option) => {
        console.log('Selected:', option);
        // ここで実際に値を更新するロジックを追加する（将来的）
        activeModal.value = null; // モーダルを閉じる
    }

    const isPasswordModalOpen = ref(false);

</script>

<template>
  <div class="settings-page">
    <div class="page-title-chip">Settings</div>

    <div class="settings-list">
        <div class="settings-group">
            <div @click="activeModal = 'country'" class="settings-item">
                <span class="label">Country</span>
                <span class="value">Malaysia <svg height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="m375-200-43-43 198-198-198-198 43-43 241 241-241 241Z"/></svg></span>
            </div>
            <div @click="activeModal = 'language'" class="settings-item">
                <span class="label">Language</span>
                <span class="value">English <svg height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="m375-200-43-43 198-198-198-198 43-43 241 241-241 241Z"/></svg></span>
            </div>
            <div @click="activeModal = 'currency'" class="settings-item">
                <span class="label">Currency</span>
                <span class="value">MYR <svg height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="m375-200-43-43 198-198-198-198 43-43 241 241-241 241Z"/></svg></span>
            </div>
        </div>

        <div class="settings-group">
            <div @click="isPasswordModalOpen = true" class="settings-item">
                <span class="label">Change Password</span>
                <span class="value"><svg height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="m375-200-43-43 198-198-198-198 43-43 241 241-241 241Z"/></svg></span>
            </div>
        </div>

      <div class="settings-group">
        <router-link to="#" class="settings-item">
          <span class="label">Support</span>
          <span class="value"><svg height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="m375-200-43-43 198-198-198-198 43-43 241 241-241 241Z"/></svg></span>
        </router-link>
        <router-link to="#" class="settings-item">
          <span class="label">Terms & Conditions</span>
          <span class="value"><svg height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="m375-200-43-43 198-198-198-198 43-43 241 241-241 241Z"/></svg></span>
        </router-link>
      </div>
    </div>

    <BottomSheet :is-open="activeModal !== null" @close="activeModal = null">
      <div class="modal-content">
        <div v-if="activeModal === 'country'">
          <h2>Select Country</h2>
          <ul>
            <li v-for="country in countries" :key="country" @click="onOptionSelect(country)">{{ country }}</li>
          </ul>
        </div>
        <div v-if="activeModal === 'language'">
          <h2>Select Language</h2>
          <ul>
            <li v-for="language in languages" :key="language" @click="onOptionSelect(language)">{{ language }}</li>
          </ul>
        </div>
        <div v-if="activeModal === 'currency'">
          <h2>Select Currency</h2>
          <ul>
            <li v-for="currency in currencies" :key="currency" @click="onOptionSelect(currency)">{{ currency }}</li>
          </ul>
        </div>
      </div>
    </BottomSheet>
    
    <BottomSheet :is-open="isPasswordModalOpen" @close="isPasswordModalOpen = false">
      <ChangePasswordModal />
    </BottomSheet>
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
.settings-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.settings-group {
  background-color: #fff;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid #eee;
}
.settings-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  text-decoration: none;
  color: #333;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}
.settings-item:last-child {
  border-bottom: none;
}
.settings-item .label {
  font-weight: 500;
}
.settings-item .value {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #888;
}
.settings-item .value svg {
  fill: #ccc;
}

/* モーダル用のスタイル */
.modal-content {
  padding: 1rem;
}
.modal-content h2 {
  text-align: center;
  margin-top: 0;
  font-size: 1.2rem;
  color: #333;
}
.modal-content ul {
  list-style: none;
  padding: 0;
}
.modal-content li {
  padding: 1rem;
  text-align: center;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  font-size: 1.1rem;
}
.modal-content li:last-child {
  border-bottom: none;
}
.modal-content li:hover {
  background-color: #f9f9f9;
}
</style>