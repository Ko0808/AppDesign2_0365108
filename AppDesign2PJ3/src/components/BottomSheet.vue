<script setup>
// このコンポーネントは、'isOpen'というデータ(prop)を受け取り、
// 'close'というイベントを親に通知します。
defineProps({
  isOpen: Boolean
});
const emit = defineEmits(['close']);
</script>

<template>
  <Transition name="slide-up">
    <div v-if="isOpen" class="bottom-sheet">
      <div class="sheet-overlay" @click="emit('close')"></div>
      
      <div class="sheet-panel">
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.bottom-sheet {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end; /* パネルを下揃えに */
  z-index: 2000;
}
.sheet-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
}
.sheet-panel {
  width: 100%;
  max-width: 480px; /* アプリの最大幅と合わせる */
  height: 90vh; /* 画面の高さの90% */
  background-color: white;
  border-radius: 1.5rem 1.5rem 0 0;
  box-shadow: 0 -5px 15px rgba(0,0,0,0.1);
  z-index: 2001;
  overflow-y: auto; /* 中身が多ければスクロール */
  padding: 1rem;
}

/* Transition用のアニメーションスタイル */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease-out;
}
.slide-up-enter-active .sheet-panel,
.slide-up-leave-active .sheet-panel {
  transition: transform 0.3s ease-out;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
}
.slide-up-enter-from .sheet-panel,
.slide-up-leave-to .sheet-panel {
  transform: translateY(100%);
}
</style>