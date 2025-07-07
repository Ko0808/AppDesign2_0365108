<template>
  <div class="search-container">
    <div class="search-bar">
      <svg class="search-icon" height="24px" width="24px"><path d="M784-120 ..."/></svg>
      <input type="text" placeholder="Enter a city, airport, or place.">
    </div>
    <ul class="airport-list">
      <li>MEL<span>Melbourne Airport</span></li>
      <li>PER<span>Perth Airport</span></li>
      <li>SYD<span>Sydney Airport</span></li>
      <li>PNH<span>Phnom Penh International Airport</span></li>
      </ul>
  </div>
</template>

<style scoped>
.search-bar { display: flex; align-items: center; border: 1px solid #ccc; border-radius: 0.5rem; padding: 0.5rem; }
.search-icon { color: #888; margin-right: 0.5rem; }
.search-bar input { border: none; outline: none; font-size: 1rem; width: 100%; }
.airport-list { list-style: none; padding: 1rem 0; margin: 0; }
.airport-list li { padding: 1rem 0.5rem; border-bottom: 1px solid #eee; }
.airport-list li span { margin-left: 1rem; color: #333; }
</style>