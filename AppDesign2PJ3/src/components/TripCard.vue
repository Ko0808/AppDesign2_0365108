<script setup>
// 親コンポーネント(MyTripView.vue)から旅行データを受け取るための設定
defineProps({
  trip: {
    type: Object, // データはオブジェクト形式
    required: true // このデータは必須
  }
});
</script>

<template>
  <div class="trip-card">
    <div class="card-header">
      <span>{{ trip.flightNumber }}</span>
    </div>
    <div class="card-body">
      <div class="location">
        <span class="airport-code">{{ trip.origin }}</span>
        <span class="date-time">{{ trip.departureDate }} {{ trip.departureTime }}</span>
      </div>
      <svg class="airplane-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M283.33-80v-88.67L406-254v-162.67L80-285.33v-108L406-622v-184q0-30.33 21.83-52.17Q449.67-880 480-880q30.33 0 52.17 21.83Q554-836.33 554-806v184l326 228.67v108L554-416.67V-254l122 85.33V-80l-196-59.33L283.33-80Z" transform="rotate(90, 480, -480)"/></svg>
      <div class="location">
        <span class="airport-code">{{ trip.destination }}</span>
        <span class="date-time">{{ trip.arrivalDate }} {{ trip.arrivalTime }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trip-card {
  background-color: #fff;
  border: 1px solid #005d6a;
  border-radius: 0.75rem;
  margin-bottom: 1.3rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  margin-top: 10%;
}
.card-header {
  padding: 0.75rem 1rem;
  background-color: #f0f8ff;
  border-bottom: 1px solid #e0e0e0;
  font-weight: bold;
  color: #005d6a;
  border-radius: 0.75rem 0.75rem 0 0;
}
.card-body {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
}
.location {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.airport-code {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
}
.date-time {
  font-size: 0.8rem;
  color: #666;
}
.airplane-icon {
  color: #005d6a;
}
</style>