<script setup>
    import { ref, computed } from 'vue';
    import AirportSelector from '../components/AirportSelector.vue';
    import DateSelector from '../components/DateSelector.vue';
    import { useRouter } from 'vue-router';

    import BottomSheet from '../components/BottomSheet.vue';
    import AirportSearch from '../components/AirportSearch.vue';
    import DatePicker from '../components/DatePicker.vue';
    import PassengerStepper from '../components/PassengerStepper.vue';
    import GearLoading from '../components/GearLoading.vue';
    
    // 'round' or 'oneway' のどちらがアクティブかを管理
    const tripType = ref('round');
    const isRoundTrip = computed(() => tripType.value === 'round');

    const isLoading = ref(false);
    const router = useRouter();
    const isAirportModalOpen = ref(false);
    const isDateModalOpen = ref(false);
    const adults = ref(1);
    const children = ref(0);

    const searchFlights = () => {
      isLoading.value = true;
      setTimeout(() => {
        isLoading.value = false;
        router.push('/flights');
      }, 3000);
    };

</script>

<template>
  <div class="booking-page">

    <div 
      class="trip-type-tabs" 
      :class="{ 'oneway-active': tripType === 'oneway' }"
    >
      <button class="tab-button" @click="tripType = 'round'">Round</button>
      <button class="tab-button" @click="tripType = 'oneway'">One way</button>
      <div class="glider"></div>
    </div>

    <div class="form-area">
      <div class="flight-row">
        <AirportSelector label="Departure City" @click="isAirportModalOpen = true" />
        <div class="flight-icon">
          <svg xmlns="http://www.w3.org/2000/svg" height="2.5rem" viewBox="0 -960 960 960" width="auto" fill="#015878"><path d="M120-120v-66.67h720V-120H120Zm67.33-206.67L42-568.67 126.67-592 242-495.33l156.67-42.34-211.67-282 104-27.66 306.33 257L776.67-639q30-7.67 55.83 7.83t34.17 45.5q8.33 29.34-6.17 55.17-14.5 25.83-43.17 34.17l-630 169.66Z"/></svg>
        </div>
        <DateSelector label="Departure Date" @click="isDateModalOpen = true" />
      </div>

      

      <div class="flight-row">
        <AirportSelector label="Arrival City" @click="isAirportModalOpen = true" />
        <div class="flight-icon">
          <svg xmlns="http://www.w3.org/2000/svg" height="2.5rem" viewBox="0 -960 960 960" width="auto" fill="#015878"><path d="M120-120v-80h720v80H120Zm622-202L120-499v-291l96 27 48 139 138 39-35-343 115 34 128 369 172 49q25 8 41.5 29t16.5 48q0 35-28.5 61.5T742-322Z"/></svg>
        </div>
        <DateSelector 
          label="Return Date" 
          :disabled="!isRoundTrip"
          @click="isDateModalOpen = true" 
        />
      </div>
    </div>
    
    <div class="input-group">
      <label>Passenger</label>
      <div class="passenger-input-area">
        <PassengerStepper label="Adults" v-model="adults" :min="1" />
        <div class="divider"></div>
        <PassengerStepper label="Children" v-model="children" :min="0" />
      </div>
    </div>

    <div class="input-group">
      <label>Promo Code</label>
      <input type="text" placeholder="Enter promo code">
    </div>

    <button class="search-button" @click="searchFlights">Search</button>
    <GearLoading v-if="isLoading" />

    <BottomSheet :is-open="isAirportModalOpen" @close="isAirportModalOpen = false">
      <AirportSearch />
    </BottomSheet>

    <BottomSheet :is-open="isDateModalOpen" @close="isDateModalOpen = false">
      <DatePicker />
    </BottomSheet>

  </div>
</template>

<style scoped>
    .booking-page {
        padding: 1rem 0;
    }
    .page-title-chip {
        display: inline-block;
        background-color: #e0e0e0;
        padding: 0.25rem 1rem;
        border-radius: 1rem;
        font-weight: 500;
        margin-bottom: 1rem;
    }

    /* タブ */
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
        color: #666;
        transition: color 0.3s ease-in-out; 
        z-index: 1; 
        position: relative;
        cursor: pointer;
    }

    .trip-type-tabs .tab-button.active {
        color: white;
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
        
        /* ★ アニメーションの指定 */
        transition: transform 0.3s ease-in-out;
    }

    .trip-type-tabs.oneway-active .glider {
        transform: translateX(100%);
    }

    /* フォーム */
    .form-area {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .flight-row {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    .flight-row > :first-child, .flight-row > :last-child {
        flex: 1;
    }
    .flight-icon {
        color: #005d6a;
    }
    .swap-icon {
        text-align: center;
        color: #888;
        cursor: pointer;
        padding: 0;
    }

    .passenger-input-area {
        width: 100%;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 0.75rem;
        background-color: #fff;
    }
    .divider {
        height: 1px;
        background-color: #eee;
        margin: 0.25rem 0;
    }

    /* 乗客・プロモコード */
    .input-group {
        margin-top: 1rem;
    }
    .input-group label {
        display: block;
        font-weight: 500;
        margin-bottom: 0.5rem;
    }
    .input-group input, .passenger-selector {
        width: 100%;
        padding: 1rem;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 0.75rem;
    }
    .passenger-selector {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    /* 検索ボタン */
    .search-button {
        width: 100%;
        background-color: var(--primary-color, #005d6a);
        color: white;
        font-size: 1.2rem;
        font-weight: bold;
        padding: 1rem;
        border: none;
        border-radius: 0.75rem;
        margin-top: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
    }
</style>