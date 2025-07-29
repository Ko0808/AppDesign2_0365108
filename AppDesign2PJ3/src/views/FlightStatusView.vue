<script setup>
import { ref } from 'vue';
import FlightStatusCard from '../components/FlightStatusCard.vue';

const isYourFlightsOpen = ref(true);
const isOtherFlightsOpen = ref(true);

const otherFlights = ref([
  { id: 1, number: 'VN000', origin: 'KUL', destination: 'KUL', date: '01JUN2024', time: '00:00', status: 'cancelled' },
  { id: 2, number: 'VN000', origin: 'KUL', destination: 'KUL', date: '01JUN2024', time: '00:00', newTime: '01:15', status: 'delayed' },
]);
</script>

<template>
  <div class="flight-status-page">
    <div class="page-title-chip">Flight Status</div>

    <section class="collapsible-section">
      <div class="section-header" @click="isYourFlightsOpen = !isYourFlightsOpen">
        <h3>Your Flights</h3>
        <svg class="arrow" :class="{ open: isYourFlightsOpen }" height="24px" width="24px"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/></svg>
      </div>
      <div v-if="isYourFlightsOpen" class="section-content">
        <div class="no-delay-message">
          <p>No delays or cancellations on your flight</p>
          <svg height="24px" width="24px"><path d="M160-200v-66.67h66.67v-120q0-90.83 58.5-154.58Q343.67-605 440-613.33V-720h80v106.67q96.33 8.34 154.83 72.09Q733.33-477.5 733.33-386.67v120H800V-200H160Zm320-46.67q33.67 0 57.17-23.5t23.5-57.17q0-33.67-23.5-57.17t-57.17-23.5q-33.67 0-57.17 23.5t-23.5 57.17q0 33.67 23.5 57.17t57.17 23.5Z"/></svg>
        </div>
      </div>
    </section>

    <section class="collapsible-section">
      <div class="section-header" @click="isOtherFlightsOpen = !isOtherFlightsOpen">
        <h3>Other Flights</h3>
        <svg class="arrow" :class="{ open: isOtherFlightsOpen }" height="24px" width="24px"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/></svg>
      </div>
      <div v-if="isOtherFlightsOpen" class="section-content">
        <div class="other-flights-list">
          <FlightStatusCard v-for="flight in otherFlights" :key="flight.id" :flight="flight" />
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
    .page-title-chip { /* ... */ }
    .collapsible-section { background-color: #fff; border-radius: 0.75rem; margin-bottom: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .section-header { display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem; cursor: pointer; }
    .section-header h3 { margin: 0; font-size: 1.1rem; }
    .arrow { transition: transform 0.3s; fill: #888; }
    .arrow.open { transform: rotate(180deg); }
    .section-content { padding: 0 1.5rem 1.5rem 1.5rem; }
    .no-delay-message { text-align: center; color: #888; padding: 2rem 0; }
    .no-delay-message p { margin: 0 0 1rem 0; }
    .other-flights-list { display: flex; flex-direction: column; gap: 1rem; }
    .status-card {
        display: flex;
        align-items: stretch; /* ★ 子要素の高さを揃える */
        gap: 1rem;
        padding: 0; /* ★ paddingを0に変更 */
        border-radius: 0.75rem;
        background-color: #fff;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        overflow: hidden; /* ★ 角丸を適用するため */
    }

    .icon-wrapper {
        padding: 1rem;
        display: flex; /* ★ アイコンを中央に配置するため */
        align-items: center;
        justify-content: center;
        background-color: #166987; /* ★ 背景色を指定 */
        color: white;
    }

    .details {
        flex-grow: 1;
        padding: 1rem 1rem 1rem 0; /* ★ 右側だけにpaddingを設定 */
    }
</style>