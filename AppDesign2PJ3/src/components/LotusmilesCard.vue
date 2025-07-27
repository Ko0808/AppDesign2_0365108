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
  position: relative;
  color: #3e3e3e;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  background-image: url('../image/LotusMile.png');
  background-position: center;
  border-radius: 1rem;
  
  aspect-ratio: 85.6 / 53.98; 
  
  background-size: contain; /* 'cover'から変更 */
  background-repeat: no-repeat; /* 画像の繰り返しを防ぐ */
}

/* ★★★ テキストを絶対位置で配置するためのスタイル ★★★ */
.card-name,
.member-since,
.valid-through {
  position: absolute;
  font-weight: 500;
  font-family: 'Courier New', Courier, monospace;
}

/* ★★★ ここのtopとleftの値を調整しました ★★★ */
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