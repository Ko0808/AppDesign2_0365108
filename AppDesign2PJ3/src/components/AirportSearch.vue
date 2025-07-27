<script setup>
import { ref, computed } from 'vue';

const emit = defineEmits(['select']);

// 検索ボックスの入力値を保持する変数
const searchTerm = ref('');

// ダミーデータ（リストを少し長くしました）
const allAirports = ref([
  { code: 'MEL', name: 'Melbourne Airport' },
  { code: 'PER', name: 'Perth Airport' },
  { code: 'SYD', name: 'Sydney Airport' },
  { code: 'PNH', name: 'Phnom Penh International Airport' },
  { code: 'KUL', name: 'Kuala Lumpur International Airport' },
  { code: 'SIN', name: 'Singapore Changi Airport' },
  { code: 'BKK', name: 'Suvarnabhumi Airport' },
  { code: 'HKG', name: 'Hong Kong International Airport' },
  { code: 'NRT', name: 'Narita International Airport' },
]);

// 検索ワードに基づいてリストを絞り込む算出プロパティ
const filteredAirports = computed(() => {
  if (!searchTerm.value) {
    return allAirports.value; // 検索ワードがなければ全て表示
  }
  const lowerCaseSearch = searchTerm.value.toLowerCase();
  return allAirports.value.filter(airport => 
    airport.name.toLowerCase().includes(lowerCaseSearch) ||
    airport.code.toLowerCase().includes(lowerCaseSearch)
  );
});

const selectAirport = (airport) => {
  emit('select', airport);
};
</script>

<template>
  <div class="search-container">
    <div class="search-bar">
      <svg class="search-icon" height="24px" width="24px"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
      <input 
        type="text" 
        placeholder="Enter a city, airport, or place."
        v-model="searchTerm"
      >
    </div>
    <ul class="airport-list">
      <li 
        v-for="airport in filteredAirports" 
        :key="airport.code" 
        @click="selectAirport(airport)"
      >
        {{ airport.code }}<span>{{ airport.name }}</span>
      </li>
      <li v-if="filteredAirports.length === 0" class="no-results">
        No airports found.
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* 既存のスタイルは変更不要 */
.search-bar { display: flex; align-items: center; border: 1px solid #ccc; border-radius: 0.5rem; padding: 0.5rem; }
.search-icon { color: #888; margin-right: 0.5rem; }
.search-bar input { border: none; outline: none; font-size: 1rem; width: 100%; }
.airport-list { list-style: none; padding: 1rem 0; margin: 0; }
.airport-list li {
  padding: 1rem 0.5rem;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}
.airport-list li:hover {
  background-color: #f9f9f9;
}
.airport-list li span { margin-left: 1rem; color: #333; }
.no-results {
  text-align: center;
  color: #888;
  cursor: default;
}
.no-results:hover {
  background-color: transparent;
}
</style>