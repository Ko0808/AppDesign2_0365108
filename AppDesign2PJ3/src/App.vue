<script setup>
import TheHeader from './components/TheHeader.vue'; // ★ 作成したヘッダーをインポート
import TheBottomNav from './components/TheBottomNav.vue';
</script>

<template>
  <div class="app-container">
    <TheHeader /> <main class="app-content">
      <router-view />
    </main>

    <TheBottomNav v-if="$route.meta.showFooter" />
  </div>
</template>

<style>/* アプリ全体の基準を設定 */
  html {
    font-size: 16px; /* これが1remの基準値となる */
  }

  /* 全ての要素で、paddingとborderを幅の計算に含めるようにする */
  * {
    box-sizing: border-box;
  }
</style>

<style scoped>
.app-container {
  /* max-width: 400px; を削除またはコメントアウト */
  width: 100%; /* 横幅は常に100% */
  max-width: 480px; /* ★ ただし、PCなどで見た時の最大幅は設けておく */
  margin: auto;
  background-color: #f4f6f8;
  min-height: 100vh; /* 画面の高さ分は最低でも確保 */
  overflow-x: hidden;
  padding-left: 0.3rem; /* 左右の余白を追加 */
  padding-right: 0.3rem; /* 左右の余白を追加 */
}

.app-content {
  /* ★ px指定をremに変更 */
  padding-top: 3.75rem;    /* 60px -> 3.75rem */
  padding-bottom: 4.375rem; /* 70px -> 4.375rem */
  padding-left: 1.5rem;       /* 左右の余白を追加 */
  padding-right: 1.5rem;      /* 左右の余白を追加 */
  width: 100%;
}
</style>