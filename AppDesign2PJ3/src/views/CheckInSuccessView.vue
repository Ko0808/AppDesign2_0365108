<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import BottomSheet from '../components/BottomSheet.vue';
import BoardingPass from '../components/BoardingPass.vue';

const router = useRouter();

// 搭乗券モーダルの表示状態を管理
const isBoardingPassModalOpen = ref(false);

// モーダルが閉じられた時に実行される関数
const onModalClose = () => {
  isBoardingPassModalOpen.value = false;
  // ホーム画面('/')に移動する
  router.push('/'); 
};
</script>

<template>
  <div class="success-page">
    <div class="fullscreen-shine-effect"></div>
    <div class="hero-section">
      <div class="hero-text">
        <h1>Thank You</h1>
        <p>Your check-in is success</p>
      </div>
    </div>

    <div class="actions-section">
      <button class="action-button" @click="isBoardingPassModalOpen = true">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="m350-328 364-98.67q16.33-4.66 24.17-16.83 7.83-12.17 3.16-28.5-4.66-16.33-17.83-23.17-13.17-6.83-28.7-2.74l-101.47 26.58-164-158L376-616.67 476.67-440l-106 28.67-51.34-41.34-32 10L350-328Zm463.33 168H146.67q-27.5 0-47.09-19.58Q80-199.17 80-226.67V-382q35.67-5.33 59.83-32.83Q164-442.33 164-480t-24.17-65.5Q115.67-573.33 80-578v-155.33q0-27.5 19.58-47.09Q119.17-800 146.67-800h666.66q27.5 0 47.09 19.58Q880-760.83 880-733.33v506.66q0 27.5-19.58 47.09Q840.83-160 813.33-160Zm0-66.67v-506.66H146.67v106.66Q185-602 207.83-563.83q22.84 38.16 22.84 83.83t-22.84 83.83Q185-358 146.67-333.33v106.66h666.66ZM480-480Z"/></svg>
        <span>Show boarding pass</span>
      </button>
    </div>
    <BottomSheet :is-open="isBoardingPassModalOpen" @close="onModalClose">
      <BoardingPass />
    </BottomSheet>
  </div>
</template>

<style scoped>
.success-page {
  /* 親のpaddingを打ち消して画面いっぱいに広げる */
  margin: 0 calc(var(--app-horizontal-padding, 1.5rem) * -1);
}
.hero-section {
  position: relative;
  height: 40vh;
  background-image: url('../image/Vietnam Airlines Press Release.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
}
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
  position: relative;
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

.fullscreen-shine-effect {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; /* コンテンツの背景になるように */
  overflow: hidden;
  pointer-events: none; /* クリックを背後に通す */
}

.fullscreen-shine-effect::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%; 
    
    /* ★★★ グラデーションに色を追加 ★★★ */
    background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0) 100%
  );
    
    transform: skewX(-25deg) translateX(-250%);
    
    /* ★★★ infinite を削除して1回だけ再生 ★★★ */
    animation: shine 1.5s ease-out 0.5s; /* 遅延時間を0.5秒に調整 */
}

@keyframes shine {
  100% {
    transform: skewX(-25deg) translateX(250%);
  }
}

/* 既存のコンテンツがエフェクトより手前に来るようにz-indexを設定 */
.hero-section, .actions-section {
  position: relative;
  z-index: 2;
}
</style>