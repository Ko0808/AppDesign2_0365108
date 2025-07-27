<script setup>
import { ref } from 'vue';
import BottomSheet from './BottomSheet.vue';
import AirportSearch from './AirportSearch.vue';

// 親から受け取るデータを定義
const props = defineProps({
  label: String,
  modelValue: String // v-modelでバインドされる値
});

// 親にデータの更新を通知する'emit'を定義
const emit = defineEmits(['update:modelValue']);

// モーダルの開閉状態を管理する変数
const isAirportModalOpen = ref(false);

// 空港が選択された時の処理
const onAirportSelect = (airport) => {
  // 1. v-modelの値を更新するよう親に通知
  emit('update:modelValue', airport.name);
  // 2. モーダルを閉じる
  isAirportModalOpen.value = false;
};
</script>

<template>
  <div class="input-container" @click="isAirportModalOpen = true">
    <div class="icon-wrapper">
      <slot></slot>
    </div>
    <input 
      type="text" 
      :placeholder="label" 
      :value="modelValue" 
      readonly
    >
    <button class="search-icon">
      <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M792-120.67 532.67-380q-30 25.33-69.64 39.67Q423.39-326 378.67-326q-108.44 0-183.56-75.17Q120-476.33 120-583.33t75.17-182.17q75.16-75.17 182.5-75.17 107.33 0 182.16 75.17 74.84 75.17 74.84 182.27 0 43.23-14 82.9-14 39.66-40.67 73l260 258.66-48 48Zm-414-272q79.17 0 134.58-55.83Q568-504.33 568-583.33q0-79-55.42-134.84Q457.17-774 378-774q-79.72 0-135.53 55.83-55.8 55.84-55.8 134.84t55.8 134.83q55.81 55.83 135.53 55.83Z"/></svg>
    </button>
  </div>

  <BottomSheet :is-open="isAirportModalOpen" @close="isAirportModalOpen = false">
    <AirportSearch @select="onAirportSelect" />
  </BottomSheet>
</template>

<style scoped>
.input-container {
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  cursor: pointer; 
  width: 100%;
  padding: 0.5rem;
}
.icon-wrapper {
  padding: 0 0.5rem;
  color: var(--primary-color, #005d6a);
}
input {
  flex-grow: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0.5rem;
  background-color: transparent; /* 背景を透明にして親divのクリックを邪魔しない */
  cursor: pointer;
}
.search-icon {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #888;
}
</style>