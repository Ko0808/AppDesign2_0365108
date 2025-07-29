<template>
  <div class="loading-overlay">
    <div class="animation-container">
      <svg class="airplane" viewBox="0 0 160 160">
        <path d="M110,40 a30,30 0 1,0 0,80" fill="none" stroke="white" stroke-width="2" stroke-dasharray="4, 4"/>
        <path d="M10,80 h140" fill="none" stroke="white" stroke-width="1" opacity="0.5"/>
        <path d="M10,80 a70,70 0 0,0 140,0" fill="none" stroke="white" stroke-width="1" opacity="0.5"/>
        <path d="M10,80 a70,70 0 0,1 140,0" fill="none" stroke="white" stroke-width="1" opacity="0.5"/>
        <path d="M36,92 L80,80 L36,68 L50,80 Z" fill="white"/>
      </svg>
    </div>
    <p class="loading-text">Searching for the best flights...</p>
  </div>
</template>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  color: white;
}

.animation-container svg {
  width: 150px;
  height: 150px;
}

.airplane path {
  animation: fly 4s linear infinite;
  transform-origin: center;
}

.loading-text {
  margin-top: 1rem;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 1px;
}

@keyframes fly {
  0% {
    transform: rotate(0deg) translateX(35px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(35px) rotate(0deg);
  }
}
</style>