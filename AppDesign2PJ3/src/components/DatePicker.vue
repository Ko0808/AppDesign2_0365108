<template>
  <div class="date-picker-container">
    <h2>January 2025</h2>
    <div class="calendar-grid">
      <div class="day-header">Mon</div><div class="day-header">Tue</div><div class="day-header">Wed</div><div class="day-header">Thu</div><div class="day-header">Fri</div><div class="day-header">Sat</div><div class="day-header sun">Sun</div>
      <div class="day">1</div><div class="day">2</div><div class="day">3</div><div class="day">4</div><div class="day">5</div><div class="day">6</div><div class="day sun">7</div>
      <div class="day">8</div><div class="day">9</div><div class="day">10</div><div class="day">11</div><div class="day">12</div><div class="day">13</div><div class="day sun">14</div>
      </div>
    <h2>February 2025</h2>
    <button class="done-button">Done</button>
  </div>
</template>

<style scoped>
h2 { text-align: center; margin: 1.5rem 0 1rem 0; }
.calendar-grid { display: grid; grid-template-columns: repeat(7, 1fr); text-align: center; gap: 0.5rem; }
.day-header { font-weight: bold; color: #888; }
.day { padding: 0.75rem 0; cursor: pointer; }
.day.sun, .day-header.sun { color: red; }
.done-button { width: 100%; padding: 1rem; background-color: var(--primary-color, #005d6a); color: white; border: none; border-radius: 0.5rem; font-size: 1rem; margin-top: 1.5rem; }
</style>