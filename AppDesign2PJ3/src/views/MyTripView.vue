<script setup>
    import { ref, computed } from 'vue';
    import TripCard from '../components/TripCard.vue'; // ★作成したTripCardコンポーネントをインポート

    // 'upcoming' or 'past' のどちらのタブがアクティブかを管理する状態
    const activeTab = ref('upcoming');

    // ダミーデータ（本来はサーバーから取得する）
    const upcomingTrips = ref([
    { id: 1, flightNumber: 'VN123', origin: 'KUL', destination: 'HAN', departureDate: '01AUG2025', departureTime: '08:00', arrivalDate: '01AUG2025', arrivalTime: '10:30' },
    { id: 2, flightNumber: 'VN456', origin: 'SGN', destination: 'KUL', departureDate: '15SEP2025', departureTime: '14:00', arrivalDate: '15SEP2025', arrivalTime: '16:00' },
    ]);
    const pastTrips = ref([
    { id: 3, flightNumber: 'VN789', origin: 'KUL', destination: 'DAD', departureDate: '10JUN2024', departureTime: '11:00', arrivalDate: '10JUN2024', arrivalTime: '13:00' },
    ]);

    // アクティブなタブに応じて表示する旅行リストを切り替える
    const displayedTrips = computed(() => {
    return activeTab.value === 'upcoming' ? upcomingTrips.value : pastTrips.value;
    });
</script>

<template>
  <div class="page-title-chip">My Trip</div>

  <div class="trip-tabs">
    <button 
      class="tab-button" 
      :class="{ active: activeTab === 'upcoming' }"
      @click="activeTab = 'upcoming'"
    >
      Upcoming Trips
    </button>
    <button 
      class="tab-button" 
      :class="{ active: activeTab === 'past' }"
      @click="activeTab = 'past'">
      Past Trips
    </button>
  </div>

  <div class="sort-filter">
    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor"><path d="M426.67-160v-533.33L308-574.67l-46.67-46.66L480-840l218.67 218.67-46.67 46.66L533.33-693.33V-160h-106.66ZM120-426.67v-106.66h213.33v106.66H120Zm506.67 0v-106.66h213.33v106.66H626.67Z"/></svg>
    <span>Sort - Filter</span>
  </div>

  <div class="trip-list">
    <TripCard 
      v-for="trip in displayedTrips" 
      :key="trip.id" 
      :trip="trip" 
    />
    <p v-if="displayedTrips.length === 0" class="no-trips">No trips found.</p>
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
    margin-left: -0.5rem; 
    }
    .trip-tabs {
    display: flex;
    gap: 0.7rem;
    margin-bottom: 1.5rem;
    }
    .tab-button {
    flex: 1;
    padding: 0.75rem;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    background-color: #d8d8d8;
    color: #666;
    transition: all 0.2s ease-in-out;
    }
    .tab-button.active {
    background-color: var(--primary-color, #005d6a); /* CSS変数があればそれを使う */
    color: white;
    }
    .sort-filter {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #333;
    margin-bottom: 1rem;
    }
    .trip-list {
    padding-top: 1rem;
    }
    .no-trips {
    text-align: center;
    color: #888;
    margin-top: 2rem;
    }
</style>