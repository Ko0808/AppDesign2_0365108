<script setup>
defineProps({
  flight: Object
});
</script>

<template>
  <div class="status-card" :class="flight.status">
    <div class="icon-wrapper">
      <svg v-if="flight.status === 'cancelled'" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#1f1f1f"><path d="M880-285.33 678.33-367 406-638.67V-806q0-30.33 21.83-52.17Q449.67-880 480-880q30.33 0 52.17 21.83Q554-836.33 554-806v184l326 228.67v108Zm-400 146L283.33-80v-88.67L406-254v-162.67L80-285.33v-108L305.33-552 56-801.33 102.67-848 848-102l-46.67 46L554-303.33V-254l122 85.33V-80l-196-59.33Z"/></svg>
      <svg v-else-if="flight.status === 'delayed'" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#1f1f1f"><path d="M440-120q-75 0-140.5-28.33-65.5-28.34-114.17-77-48.66-48.67-77-114.17Q80-405 80-480t28.33-140.5q28.34-65.5 77.34-114.17 49-48.66 114.5-77Q365.67-840 440.67-840q24.33 0 48.5 3.5 24.16 3.5 49.5 10.5v70q-24-8.67-48.5-13t-49.5-4.33Q318-773.33 232.33-688q-85.66 85.33-85.66 208T232-272q85.33 85.33 208 85.33T648-272q85.33-85.33 85.33-208 0-13.67-1.33-27.67-1.33-14-4.67-31.66h68q2.67 15 3.67 29.66 1 14.67 1 29.67 0 75-28.33 140.5-28.34 65.5-77 114.17-48.67 48.66-114.17 77Q515-120 440-120Zm114.67-192.67-152-152V-680h66.66v188.67l132 132-46.66 46.66ZM729.33-606v-123.33h-124V-796h124v-124H796v124h124v66.67H796V-606h-66.67Z"/></svg>
    </div>
    <div class="details">
      <div class="flight-info">
        <span>{{ flight.number }}</span>
        <span>{{ flight.origin }}</span>
        <svg height="16px" width="16px"><path d="M283.33-80v-88.67L406-254v-162.67L80-285.33v-108L406-622v-184q0-30.33 21.83-52.17...Z" transform="rotate(90, 480, -480)"/></svg>
        <span>{{ flight.destination }}</span>
      </div>
      <div class="time-info">
        <span>{{ flight.date }}</span>
        <span :class="{ 'original-time': flight.status === 'delayed' }">{{ flight.time }}</span>
        <span v-if="flight.status === 'delayed'" class="new-time">{{ flight.newTime }}</span>
      </div>
    </div>
    <div v-if="flight.status === 'cancelled'" class="status-text cancelled">
      Cancelled
    </div>
    <div v-else-if="flight.status === 'delayed'" class="status-text delayed">
      Delayed
    </div>
  </div>
</template>

<style scoped>
.status-card {
  display: flex;
  align-items: stretch; /* ★ 子要素の高さを揃える */
  gap: 1rem;
  padding: 1rem; /* ★ paddingを1remに変更 */
  border-radius: 0.75rem;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden; /* ★ 角丸を適用するため */
}

.icon-wrapper {
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 0.5rem; /* ★ 角丸を追加 */
}

.delayed .icon-wrapper { 
  background-color: #FFA726; /* オレンジに近い黄色 */
}

.cancelled .icon-wrapper {
  background-color: #e57373; /* 赤系 */
} 

.details {
  flex-grow: 1;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.flight-info { display: flex; justify-content: space-between; align-items: center; font-weight: bold; font-size: 1.1rem; }
.time-info { color: #888; font-size: 0.9rem; }
.original-time { text-decoration: line-through; }
.new-time { 
  color: #F57C00; /* 濃いオレンジ */
  font-weight: bold; 
  margin-left: 0.5rem;
}
.status-text { 
    font-weight: bold;
    font-size: 1rem; 
    padding: 0.5rem;
}
.cancelled { color: #e57373; } /* 赤系 */
.delayed { 
  color: #F57C00; /* 濃いオレンジ */
}
</style>