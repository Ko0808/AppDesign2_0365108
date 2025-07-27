<script setup>
import { ref } from 'vue';
import AirportInput from '../components/AirportInput.vue';
import { useRouter } from 'vue-router'; 
import BottomSheet from '../components/BottomSheet.vue';
import AirportSearch from '../components/AirportSearch.vue';

const router = useRouter();
const tripType = ref('oneway');

const departureAirport = ref('');
const arrivalAirport = ref('');

const isAirportModalOpen = ref(false);
const currentAirportField = ref(null); // どの空港フィールドが選択されたかを追跡

const openAirportModal = (field) => {
  currentAirportField.value = field;
  isAirportModalOpen.value = true;
};

const onAirportSelect = (airport) => {
  if (currentAirportField.value === 'departure') {
    departureAirport.value = airport.name;
  } else if (currentAirportField.value === 'arrival') {
    arrivalAirport.value = airport.name;
  }
  isAirportModalOpen.value = false; 
};
</script>

<template>
  <div class="calculator-page">
    <div class="page-title-chip">Miles Calculator</div>

    <div 
      class="trip-type-tabs" 
      :class="{ 'oneway-active': tripType === 'oneway' }"
    >
      <button class="tab-button" @click="tripType = 'round'">Round</button>
      <button class="tab-button" @click="tripType = 'oneway'">One way</button>
      <div class="glider"></div>
    </div>

    <div class="form-area">
      <AirportInput label="Departure City" v-model="departureAirport" @click="openAirportModal('departure')">
        <svg height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M120-120v-66.67h720V-120H120Zm67.33-206.67L42-568.67 126.67-592 242-495.33l156.67-42.34-211.67-282 104-27.66 306.33 257L776.67-639q30-7.67 55.83 7.83t34.17 45.5q8.33 29.34-6.17 55.17-14.5 25.83-43.17 34.17l-630 169.66Z"/></svg>
      </AirportInput>

      <div class="swap-icon">
        <svg height="24px" viewBox="0 -960 960 960" width="24px"><path d="m318-160-46.67-47 115-115H80v-66.67h306.33l-115-115 46.67-47 195.33 195.34L318-160Zm324-249.33L446.67-604.67 642-800l46.67 47-115 115H880v66.67H573.67l115 115-46.67 47Z" transform="rotate(90, 480, -480)"/></svg>
      </div>

      <AirportInput label="Arrival City" v-model="arrivalAirport" @click="openAirportModal('arrival')">
        <svg height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M120-120v-80h720v80H120Zm622-202L120-499v-291l96 27 48 139 138 39-35-343 115 34 128 369 172 49q25 8 41.5 29t16.5 48q0 35-28.5 61.5T742-322Z"/></svg>
      </AirportInput>
    </div>

    <button class="calculate-button">Calculate</button>
    <BottomSheet :is-open="isAirportModalOpen" @close="isAirportModalOpen = false">
      <AirportSearch @select="onAirportSelect" />
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

/* BookingViewからコピーしてきたタブのスタイル */
.trip-type-tabs {
  display: flex;
  position: relative;
  background-color: #e0e0e0;
  border-radius: 0.75rem;
  padding: 0.25rem;
  margin-bottom: 1.5rem;
}
.tab-button {
  flex: 1;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 0.5rem;
  background-color: transparent; 
  color: #333;
  transition: color 0.3s ease-in-out; 
  z-index: 1; 
  position: relative;
  cursor: pointer;
}
.trip-type-tabs .tab-button.active {
  color: #333; /* 文字色を調整 */
}
.glider {
  position: absolute;
  top: 0.25rem;
  left: 0.25rem;
  height: calc(100% - 0.5rem); 
  width: calc(50% - 0.25rem);  
  background-color: var(--secondary-color, #E69D00);
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease-in-out;
}
.trip-type-tabs.oneway-active .glider {
  transform: translateX(100%);
}

/* フォーム */
.form-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
}
.swap-icon {
  border: 1px solid #ccc;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #888;
  cursor: pointer;
}
.calculate-button {
  width: 100%;
  background-color: var(--primary-color, #005d6a);
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 1rem;
  border: none;
  border-radius: 0.75rem;
  margin-top: 2rem;
}
</style>