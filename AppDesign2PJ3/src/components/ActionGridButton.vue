<template>
  <button class="action-button">
    <div class="icon-wrapper">
      <slot></slot>
    </div>
    <span class="label"><slot name="text"></slot></span>
  </button>
</template>

<style scoped>
.action-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: var(--primary-color, #005d6a);
  color: white;
  border: none;
  border-radius: 0.75rem;
  padding: 1.5rem 1rem;
  cursor: pointer;
  text-align: center;
}
.icon-wrapper {
  height: 24px; /* アイコンの高さを揃える */
}
.label {
  font-weight: 500;
}
</style>