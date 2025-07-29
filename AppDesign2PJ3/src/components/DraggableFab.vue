<script setup>
import { ref, onUnmounted, watch } from 'vue';

const props = defineProps({
  isExpanded: Boolean
});
const emit = defineEmits(['close']);

const fabRef = ref(null);
const position = ref({ 
  top: window.innerHeight - 120, 
  left: window.innerWidth - 80 
});
const isDragging = ref(false);
const offset = ref({ x: 0, y: 0 });

// --- Draggable Logic (変更なし) ---
const onDragStart = (event) => {
  if (props.isExpanded) return;
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

const onDragMove = (event) => {
  if (!isDragging.value) return;
  event.preventDefault();
  const fabElement = fabRef.value;
  const parentElement = document.querySelector('.app-container');
  if (!fabElement || !parentElement) return;
  const parentRect = parentElement.getBoundingClientRect();
  const fabRect = fabElement.getBoundingClientRect();
  const clientX = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
  const clientY = event.type === 'touchmove' ? event.touches[0].clientY : event.clientY;
  let newLeft = clientX - offset.value.x;
  let newTop = clientY - offset.value.y;
  newLeft = Math.max(parentRect.left, Math.min(newLeft, parentRect.right - fabRect.width));
  newTop = Math.max(parentRect.top, Math.min(newTop, parentRect.bottom - fabRect.height));
  position.value = { top: newTop, left: newLeft };
};

const onDragEnd = () => {
  if (!isDragging.value) return;
  isDragging.value = false;
  const fabElement = fabRef.value;
  const parentElement = document.querySelector('.app-container');
  if (!fabElement || !parentElement) return;
  const fabRect = fabElement.getBoundingClientRect();
  const parentRect = parentElement.getBoundingClientRect();
  const fabCenter = fabRect.left + fabRect.width / 2;
  const parentCenter = parentRect.left + parentRect.width / 2;
  let newLeft;
  if (fabCenter < parentCenter) {
    newLeft = parentRect.left + 20;
  } else {
    newLeft = parentRect.right - fabRect.width - 20;
  }
  fabElement.style.transition = 'left 0.3s ease-out';
  position.value.left = newLeft;
  setTimeout(() => {
    if(fabElement) fabElement.style.transition = '';
  }, 300);
  window.removeEventListener('mousemove', onDragMove);
  window.removeEventListener('mouseup', onDragEnd);
  window.removeEventListener('touchmove', onDragMove);
  window.removeEventListener('touchend', onDragEnd);
};

onUnmounted(() => {
  onDragEnd();
});
</script>

<template>
  <div>
    <div 
      v-if="isExpanded" 
      class="overlay" 
      @click="emit('close')"
    ></div>

    <div 
      ref="fabRef"
      class="draggable-fab"
      :class="{ 
        'is-dragging': isDragging, 
        'expanded': isExpanded
      }"
      :style="isExpanded ? {} : { top: position.top + 'px', left: position.left + 'px' }"
      @mousedown="onDragStart"
      @touchstart="onDragStart"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.draggable-fab {
  position: fixed;
  z-index: 2000;
  cursor: grab;
  user-select: none;
  touch-action: none;
  
  transition: width 0.4s cubic-bezier(0.6, 0, 0.2, 1), 
              height 0.4s cubic-bezier(0.6, 0, 0.2, 1), 
              border-radius 0.4s cubic-bezier(0.6, 0, 0.2, 1), 
              transform 0.4s cubic-bezier(0.6, 0, 0.2, 1),
              top 0.4s cubic-bezier(0.6, 0, 0.2, 1),
              left 0.4s cubic-bezier(0.6, 0, 0.2, 1),
              background-color 0.2s ease-in-out 0.2s;

  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  background-color: var(--primary-color, #005d6a);
  
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* 中身がはみ出ないように */
}

.draggable-fab.is-dragging {
  cursor: grabbing;
  transform: scale(1.1);
}

.draggable-fab.expanded {
  width: 90%;
  max-width: 480px;
  height: 80vh;
  max-height: 600px;
  border-radius: 1rem;
  cursor: default;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  background-color: white;
  box-shadow: 0 8px 30px rgba(0,0,0,0.2);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.4);
  z-index: 1999;
  /* フェードインアニメーション */
  animation: fade-in 0.4s ease-in-out;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* --- Slot Content Styling --- */

/* By default, hide the chat window and show the icon */
::v-deep .chat-window {
  position: absolute; /* Take out of flex flow */
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}

::v-deep .chat-icon {
  opacity: 1;
  transition: opacity 0.2s ease;
  display: flex; /* Ensure icon is centered */
  align-items: center;
  justify-content: center;
}

/* When expanded, show the chat window and hide the icon */
.draggable-fab.expanded ::v-deep .chat-window {
  opacity: 1;
  transform: scale(1);
  transition-delay: 0.15s; /* Delay appearance */
  pointer-events: auto;
}

.draggable-fab.expanded ::v-deep .chat-icon {
  opacity: 0;
  pointer-events: none;
}

</style>