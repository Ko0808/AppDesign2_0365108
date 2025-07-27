<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
  <div class="map-page">
    <div class="map-header">
      <button @click="router.back()" class="back-button">
        <svg height="24px" width="24px" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
      </button>
      <span class="title">Kuala Lumpur Intl Airport (KUL)</span>
    </div>
    <div class="map-container">
      <img src="../assets/airport-map-placeholder.png" alt="Airport Map">
    </div>
  </div>
</template>

<style scoped>
.map-page {
  /* 親のpaddingを打ち消して画面いっぱいに広げる */
  margin: 0 calc(var(--app-horizontal-padding, 1.5rem) * -1);
  height: calc(100vh - 3.75rem - 4.375rem); /* ヘッダーとフッターの高さを引く */
  display: flex;
  flex-direction: column;
}
.map-header {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;
}
.back-button {
  background: none;
  border: none;
  cursor: pointer;
}
.title {
  font-weight: bold;
}
.map-container {
  flex-grow: 1;
  overflow: hidden; /* 画像がはみ出さないように */
}
.map-container img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* 画像の比率を保ったまま表示 */
}
</style>