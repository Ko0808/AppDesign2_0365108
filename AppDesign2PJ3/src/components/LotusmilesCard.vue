<script setup>
// このコンポーネントは静的な表示のみなので、スクリプトは不要です
</script>

<template>
  <div class="lotusmiles-card">
    <div class="card-name">OBATA KOU</div>
    <div class="member-since">1/1</div>
    <div class="valid-through">12/28</div>
  </div>
</template>

<style scoped>
.lotusmiles-card {
  position: relative; /* ★ エフェクトを配置する際の基準点 */
  overflow: hidden;   /* ★ はみ出したエフェクトを隠す */
  
  color: #3e3e3e;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  background-image: url('../image/LotusMile.png');
  background-position: center;
  border-radius: 1rem;
  aspect-ratio: 85.6 / 53.98;
  background-size: contain;
  background-repeat: no-repeat;
}
.lotusmiles-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.4) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  
  transform: skewX(-25deg) translateX(-250%);
  
  /* アニメーションを定義 */
  animation: shine 2s ease-out 0.5s; /* 0.5秒遅れて開始 */
}

/* ★★★ アニメーション本体を定義 ★★★ */
@keyframes shine {
  100% {
    transform: skewX(-25deg) translateX(250%);
  }
}

.card-name,
.member-since,
.valid-through {
  position: absolute;
  font-weight: 500;
  font-family: 'Courier New', Courier, monospace;
}

.card-name {
  top: 59.5%;
  left: 10%;
  font-size: 1.1rem;
  font-weight: bold;
}

.member-since {
  top: 74%;
  left: 10%;
  font-size: 1rem;
  font-weight: bold;
}

.valid-through {
  top: 74%;
  left: 32%;
  font-size: 1rem;
  font-weight: bold;
}
</style>