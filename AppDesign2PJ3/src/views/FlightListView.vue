<script setup>
    import { ref } from 'vue';
    import FlightItemCard from '../components/FlightItemCard.vue';
    import { useRouter } from 'vue-router'; 

    const router = useRouter(); 
    const selectedDateId = ref(2);

    const dateTabs = ref([
    { id: 1, day: '1/JAN', price: 1200 },
    { id: 2, day: '2/JAN', price: 900 },
    { id: 3, day: '3/JAN', price: 1100 },
    { id: 4, day: '4/JAN', price: 1150 },
    { id: 5, day: '5/JAN', price: 1050 },
    ]);

    const flights = ref([
    { id: 1, origin: 'KUL', stop: 'SGN', destination: 'KIX', stops: '1', duration: '6h0m', departureTime: '00:00', arrivalTime: '06:00', class: 'Economy', price: 900},
    { id: 2, origin: 'KUL', stop: 'SGN', destination: 'KIX', stops: '1', duration: '6h0m', departureTime: '08:00', arrivalTime: '14:00', class: 'Economy', price: 900},
    { id: 3, origin: 'KUL', stop: 'SGN', destination: 'KIX', stops: '1', duration: '6h0m', departureTime: '16:00', arrivalTime: '22:00', class: 'Economy', price: 900},
    ]);

    const selectFlight = (flight) => {
    console.log('Selected flight:', flight.id);
    // 将来的に、選択したフライト情報をここでPiniaストアに保存するなどする
    
    router.push('/passenger-info'); // passenger-infoページにプログラムで遷移
    };

</script>

<template>
  <div class="flight-list-page">
    <div class="date-tabs-container">
      <button 
        v-for="tab in dateTabs" 
        :key="tab.id" 
        class="date-tab"
        :class="{ active: tab.id === selectedDateId }"
        @click="selectedDateId = tab.id"
      >
        <span class="day">{{ tab.day }}</span>
        <span class="price">RM{{ tab.price }}</span>
      </button>
    </div>

    <div class="route-display">
      <span>KUL</span>
      <svg xmlns="http://www.w3.org/2000/svg" height="10%" viewBox="0 -960 960 960" width="10%" fill="#FFD964"><path d="M283.33-80v-88.67L406-254v-162.67L80-285.33v-108L406-622v-184q0-30.33 21.83-52.17Q449.67-880 480-880q30.33 0 52.17 21.83Q554-836.33 554-806v184l326 228.67v108L554-416.67V-254l122 85.33V-80l-196-59.33L283.33-80Z" transform="rotate(90, 480, -480)"/></svg>
      <span>KIX</span>
      <svg class="filter-icon" height="24px" width="24px"><path d="M426.67-160v-533.33...Z"/></svg>
    </div>

    <div class="flight-list">
      <div 
        v-for="flight in flights" 
        :key="flight.id" 
        @click="selectFlight(flight)"
        style="cursor: pointer;"
      >
        <FlightItemCard :flight="flight" />
      </div>
    </div>
  </div>
</template>

<style scoped>
    .date-tabs-container {
        display: flex;
        overflow-x: auto;
        padding: 0.5rem 0;
        gap: 0.5rem;
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none;  /* IE and Edge */
    }
    .date-tabs-container::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
    }
    .date-tab {
        flex: 0 0 auto;
        padding: 0.5rem 1rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        background-color: #f0f0f0;
        cursor: pointer;
        text-align: center;
    }
    .date-tab .day { display: block; font-weight: bold; }
    .date-tab.active {
        background-color: #fff;
        border-color: var(--secondary-color, #E69D00);
        border-width: 2px;
    }
    .route-display {
        display: flex;
        align-items: center;
        background-color: var(--primary-color, #005d6a);
        color: white;
        padding: 0.75rem 1rem;
        font-size: 1.5rem;
        font-weight: bold;
        width: calc(100% + (var(--app-horizontal-padding) * 2));
        margin-left: calc(var(--app-horizontal-padding) * -1);
        margin-right: calc(var(--app-horizontal-padding) * -1);
        padding-left: 2rem;
        gap: 10%;
    }
    .route-display .airplane-icon { margin: 0 1rem; fill: white; }
    .route-display .filter-icon { margin-left: auto; fill: white; cursor: pointer; }
    .flight-list {
        padding-top: 1rem;
    }
</style>