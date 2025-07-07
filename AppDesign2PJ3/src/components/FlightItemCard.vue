<script setup>
defineProps({
  flight: Object
});
</script>

<template>
  <div class="flight-card">
    <div class="path-info">
      <div class="path-visual">
        <span class="dot"></span>
        <span class="line"></span>
        <span class="dot filled"></span>
        <span class="line"></span>
        <span class="dot"></span>
      </div>
      <div class="path-airports">
        <span>{{ flight.origin }}</span>
        <span>{{ flight.stop }}</span>
        <span>{{ flight.destination }}</span>
      </div>
    </div>
    <div class="time-info">
      <span>{{ flight.stops }} stop / {{ flight.duration }}</span>
      <div class="times">
        <span>{{ flight.departureTime }}</span>
        <span>{{ flight.arrivalTime }}</span>
      </div>
    </div>
    <div class="price-info">
      <span class="class">{{ flight.class }}</span>
      <span class="price">RM{{ flight.price }}</span>
    </div>
  </div>
</template>

<style scoped>
.flight-card {
  display: flex;
  align-items: center;
  background-color: var(--primary-color, #005d6a);
  color: white;
  padding: 1rem;
  border-radius: 0.2rem;
  margin-bottom: 1rem;
}
.path-info {
  flex: 2;
  display: flex;
  flex-direction: column;
}
.path-visual { display: flex; align-items: center; }
.dot { display: block; width: 10px; height: 10px; border: 2px solid white; border-radius: 50%; }
.dot.filled { background-color: white; }
.line { flex-grow: 1; height: 1px; background-color: white; opacity: 0.5; }
.path-airports { display: flex; justify-content: space-between; font-weight: bold; margin-top: 0.25rem; }

.time-info {
  flex: 1.5;
  text-align: center;
  font-size: 0.8rem;
  opacity: 0.8;
}
.times { display: flex; justify-content: space-between; margin-top: 0.25rem; }

.price-info {
  flex: 1;
  text-align: right;
}
.price {
  font-size: 1.5rem;
  font-weight: bold;
}
.class {
  font-size: 0.8rem;
  display: block;
}
.class::before {
  content: '▼';
  display: inline-block;
  margin-right: 0.25rem;
}
</style>