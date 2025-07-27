<script setup>
// このページは静的なので、今のところロジックは不要です
</script>

<template>
  <div class="confirmation-page">
    <div class="hero-section">
      <div class="hero-text">
        <h1>Thank You</h1>
        <p>Your payment was successful</p>
      </div>
    </div>

    <div class="actions-section">
      <button class="action-button">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M680-80v-144H280v144H120v-240q0-58.67 40.67-99.33T260-560h440q58.67 0 99.33 40.67Q840-478.67 840-420v240H680ZM260-626.67q-27.67 0-47.17-19.5-19.5-19.5-19.5-47.17V-880h593.34v186.66q0 27.67-19.5 47.17-19.5 19.5-47.17 19.5H260Zm420-25.33h53.33V-813.33H226.67v101.33H260q58.67 0 99.33 40.67Q400-630.67 400-572v45.33h160V-572q0-58.67 40.67-99.33Q641.33-712 700-712h20v40Z"/></svg>
        <span>Print Your Receipt</span>
      </button>
      <button class="action-button">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M120-160v-640l760 320-760 320Zm66.67-101 486-205.33-486-206v153l226 94.66-226 94.34v153.33Zm0 0v-411.33 411.33Z"/></svg>
        <span>Send e-Receipt</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.confirmation-page {
  /* 親のpaddingを打ち消して画面いっぱいに広げる */
  margin: 0 calc(var(--app-horizontal-padding, 1.5rem) * -1);
}

.hero-section {
  position: relative;
  height: 40vh; /* 画面の高さの40% */
  background-image: url('../image/Vietnam Airlines Press Release.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  min-width: 100vw;
}

/* 画像の上に半透明の黒いオーバーレイをかけて文字を読みやすくする */
.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
}

.hero-text {
  position: relative; /* オーバーレイより手前に表示 */
  z-index: 1;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.hero-text h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
}

.hero-text p {
  font-size: 1.2rem;
  margin: 0;
  opacity: 0.9;
}

.actions-section {
  padding: 2rem var(--app-horizontal-padding, 1.5rem);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.action-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 0.5rem;
  border: 1px solid var(--primary-color, #005d6a);
  background-color: var(--primary-color, #005d6a);
  color: white;
  cursor: pointer;
}

/* 2つ目のボタンのスタイルを少し変える */
.action-button:last-of-type {
  background-color: transparent;
  color: var(--primary-color, #005d6a);
}
</style>