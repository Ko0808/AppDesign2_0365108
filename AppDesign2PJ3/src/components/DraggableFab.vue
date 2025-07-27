<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const fabRef = ref(null);
const position = ref({ top: 80, left: 80 });
const isDragging = ref(false);
const offset = ref({ x: 0, y: 0 });

// ドラッグ開始処理
const onDragStart = (event) => {
  isDragging.value = true;
  
  const clientX = event.type === 'touchstart' ? event.touches[0].clientX : event.clientX;
  const clientY = event.type === 'touchstart' ? event.touches[0].clientY : event.clientY;
  
  const fabElement = fabRef.value;
  if (fabElement) {
    const rect = fabElement.getBoundingClientRect();
    offset.value.x = clientX - rect.left;
    offset.value.y = clientY - rect.top;
  }

  window.addEventListener('mousemove', onDragMove);
  window.addEventListener('mouseup', onDragEnd);
  window.addEventListener('touchmove', onDragMove, { passive: false });
  window.addEventListener('touchend', onDragEnd);
};

// ドラッグ中の移動処理（ドラッグ範囲の制限を追加）
const onDragMove = (event) => {
  if (!isDragging.value) return;
  event.preventDefault();

  const fabElement = fabRef.value;
  // 親コンテナ(.app-container)の矩形情報を取得
  const parentElement = fabElement.closest('.app-container');
  if (!fabElement || !parentElement) return;

  const parentRect = parentElement.getBoundingClientRect();
  const fabRect = fabElement.getBoundingClientRect();
  
  const clientX = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
  const clientY = event.type === 'touchmove' ? event.touches[0].clientY : event.clientY;

  let newLeft = clientX - offset.value.x;
  let newTop = clientY - offset.value.y;

  // 親コンテナの境界内に位置を制限
  newLeft = Math.max(parentRect.left, Math.min(newLeft, parentRect.right - fabRect.width));
  newTop = Math.max(parentRect.top, Math.min(newTop, parentRect.bottom - fabRect.height));

  // %単位に変換して位置を更新
  position.value = {
    top: (newTop / window.innerHeight) * 100,
    left: (newLeft / window.innerWidth) * 100
  };
};

// ドラッグ終了処理（画面の端に吸着する機能を追加）
const onDragEnd = () => {
  if (!isDragging.value) return;
  isDragging.value = false;
  
  const fabElement = fabRef.value;
  const parentElement = fabElement.closest('.app-container');
  if (!fabElement || !parentElement) return;

  const fabRect = fabElement.getBoundingClientRect();
  const parentRect = parentElement.getBoundingClientRect();
  
  const fabCenter = fabRect.left + fabRect.width / 2;
  const parentCenter = parentRect.left + parentRect.width / 2;

  let newLeft;
  if (fabCenter < parentCenter) {
    // 左半分の場合は左端にくっつく
    newLeft = parentRect.left;
  } else {
    // 右半分の場合は右端にくっつく
    newLeft = parentRect.right - fabRect.width;
  }

  // transitionを一時的に追加してアニメーションさせる
  fabElement.style.transition = 'left 0.3s ease-out, top 0.3s ease-out';
  
  position.value.left = (newLeft / window.innerWidth) * 100;
  
  // アニメーションが終わったらtransitionを削除
  setTimeout(() => {
    if(fabElement) fabElement.style.transition = '';
  }, 300);

  // イベントリスナーの削除
  window.removeEventListener('mousemove', onDragMove);
  window.removeEventListener('mouseup', onDragEnd);
  window.removeEventListener('touchmove', onDragMove);
  window.removeEventListener('touchend', onDragEnd);
};

// コンポーネントが破棄される時にもリスナーを削除
onUnmounted(() => {
  onDragEnd(); 
});
</script>

<template>
  <div 
    ref="fabRef"
    class="draggable-fab"
    :class="{ 'is-dragging': isDragging }"
    :style="{ top: position.top + '%', left: position.left + '%' }"
    @mousedown.prevent="onDragStart"
    @touchstart.prevent="onDragStart"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.draggable-fab {
  position: fixed;
  z-index: 2000;
  cursor: grab;
  user-select: none;
  touch-action: none;
  
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  background-color: var(--primary-color, #005d6a);

  /* 中のコンテンツ（アイコン）を中央に配置 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.draggable-fab.is-dragging {
  cursor: grabbing;
  transform: scale(1.1); /* ドラッグ中は少し大きくする */
}

.draggable-fab.expanded {
  width: 90%; /* 親コンテナの90%まで広がる */
  max-width: 380px; /* ただし最大幅は設ける */
  height: 70vh; /* 画面の高さの70% */
  max-height: 500px;
  border-radius: 1rem; /* 角丸の長方形に */
  cursor: default; /* カーソルを通常に戻す */
  
  /* 位置を画面の右下に再配置 */
  left: auto !important; /* !importantでインラインスタイルを上書き */
  right: 5%;
  top: auto !important;
  bottom: 5%;
}

</style>