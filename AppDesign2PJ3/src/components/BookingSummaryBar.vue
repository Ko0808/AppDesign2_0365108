<template>
  <div class="summary-bar">
    <div class="route">
      <span class="airport">KUL</span>
      <span class="dot"></span>
      <span class="airport">KIX</span>
    </div>
    <div class="details">
      <span>01 Jan</span> - <span>01 Jan</span>
    </div>
    <div class="passengers">
      <svg height="20px" width="20px" viewBox="0 -960 960 960"><path d="M480-493q...Z"/></svg>
      <span>1</span>
    </div>
  </div>
</template>

<style scoped>
.summary-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-color, #005d6a);
  color: white;
  padding: 0.75rem var(--app-horizontal-padding, 1.5rem);
  margin: 0 calc(var(--app-horizontal-padding, 1.5rem) * -1); /* 親のpaddingを相殺 */
}
.route {
  font-size: 1.2rem;
  font-weight: bold;
}
.dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: white;
  border-radius: 50%;
  margin: 0 0.5rem;
  vertical-align: middle;
}
.details {
  font-size: 0.9rem;
}
.passengers {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.passengers svg {
  fill: white;
}
</style>