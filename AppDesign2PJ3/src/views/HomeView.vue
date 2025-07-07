<script setup>
import { ref } from 'vue';

// 「Special Offer」セクションのデータを配列として用意
// 本来はサーバーから取得するデータ
const specialOffers = ref([
  { id: 1, city: 'Kuala Lumpur', price: 'RM1000', image: 'https://placehold.co/300x200/666/white?text=Kuala+Lumpur' },
  { id: 2, city: 'Hanoi', price: 'RM1000', image: 'https://placehold.co/300x200/555/white?text=Hanoi' },
  { id: 3, city: 'Ho Chi Minh', price: 'RM1000', image: 'https://placehold.co/300x200/444/white?text=Ho+Chi+Minh' },
]);
</script>

<template>
   
    <section class="ticket-section">
    <h2>Flight Ticket</h2>
    <div class="ticket-card">
        <div class="ticket-info">
        <span class="flight-number">VN000</span>
        <span class="passenger-name">Mr. Kou Obata</span>
        </div>
        <div class="flight-details">
        <div class="location">
            <span class="airport-code">KUL</span>
            <span class="date-time">01JUN2024 00:00</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#015878">
            <path d="M283.33-80v-88.67L406-254v-162.67L80-285.33v-108L406-622v-184q0-30.33 21.83-52.17Q449.67-880 480-880q30.33 0 52.17 21.83Q554-836.33 554-806v184l326 228.67v108L554-416.67V-254l122 85.33V-80l-196-59.33L283.33-80Z" transform="rotate(90, 480, -480)"/>
        </svg>
        <div class="location">
            <span class="airport-code">KUL</span>
            <span class="date-time">01JUN2024 00:00</span>
        </div>
        </div>
    </div>
    </section>

    <section class="action-buttons">
    <button class="action-btn">
        <svg width="85" height="85" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
        <span>Flight Status</span>
    </button>
    <button class="action-btn">
        <svg width="85" height="85" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
        <span>Check-in</span>
    </button>
    </section>

    <section class="special-offer-section">
    <h2>Special Offer</h2>
    <div class="offer-list">
        <div class="offer-card" v-for="offer in specialOffers" :key="offer.id">
        <img :src="offer.image" :alt="offer.city" class="offer-image">
        <div class="offer-details">
            <h3>{{ offer.city }}</h3>
            <p>{{ offer.price }}</p>
        </div>
        </div>
    </div>
    </section>
</template>

<style scoped>
/* 基本的なスタイルリセットとフォント設定 */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  
}

/* アプリ全体のコンテナ */
.app-container {
  max-width: 480px; /* スマホ画面をシミュレート */
  margin: auto;
  background-color: #f4f6f8;
  min-height: 100vh;
  position: relative;
  padding-bottom: 80px; /* ボトムナビゲーションの高さ分 */
}

/* ヘッダー */
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #015878; /* 画像から抽出したテーマカラー */
  color: white;
}
.header-logo {
  height: 24px;
}

/* メインコンテンツ */
.app-content {
  padding: 1rem;
}
h2 {
  font-size: 1.2rem;
  margin-bottom: 0rem;
  color: #333;
  font-size: 140%;
  text-align: left;
  padding-bottom: 0.5rem;
}

/* チケットセクション */
.ticket-section{
   
}
.ticket-card {
  background: url('../image/backgroundSky.jpg') no-repeat center center;
  background-size: cover;
  border-radius: 5px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  color: #005d6a;
  min-height: 15vh;
}
.ticket-info {
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-bottom: 0;
}
.flight-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.location {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.airport-code {
  font-size: 2rem;
  font-weight: bold;
}
.date-time {
  font-size: 0.8rem;
  color: #333;
}


/* アクションボタン */
.action-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}
.action-btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background-color: #005d6a;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  cursor: pointer;
  min-height: 15vh;
}

/* スペシャルオファー */
.special-offer-section {
  margin-top: 2rem;
}
.offer-list {
  display: flex;
  overflow-x: auto; /* 横スクロールを可能にする */
  gap: 1rem;
  padding-bottom: 1rem; /* スクロールバーのための余白 */
  min-height: 25vh;
}
.offer-list::-webkit-scrollbar {
  display: none;
}
.offer-card {
  flex: 0 0 150px; /* カードの幅を固定 */
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  color: white;
  height: 95%;
}
.offer-image {
  width: auto;
  height: 100%;
  object-fit: cover;
  display: block;
}
.offer-details {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
}
.offer-details h3 { font-size: 1.1rem; }
.offer-details p { font-size: 0.9rem; }

/* ボトムナビゲーション */
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-width: 400px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
  height: 70px; /* 少し高さを確保 */
  padding: 5px 0; /* 上下のパディング */
  background-color: #F7F3E7;
}

.nav-item {
  display: flex; /* Flexboxを有効にする */
  flex-direction: column; /* 要素を縦に並べる */
  align-items: center; /* 水平方向の中央揃え */
  justify-content: center; /* 垂直方向の中央揃え */
  flex: 1; /* 各アイテムが均等に幅を持つようにする */
  font-size: 1rem;
  color: #555;
  cursor: pointer;
  height: 100%;
}

/* 通常のアイコンのスタイル */
.nav-icon {
  width: 32px;
  height: 32px;
  margin-bottom: 4px; /* アイコンと文字の間のスペース */
  fill: #166987; /* 塗りはなし */
  stroke: #166987; /* 線の色を指定 */
  stroke-width: 3;
}

/* Bookingボタンの特別スタイル */
.booking {
  transform: translateY(-20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
}
.booking-logo {
  max-width: 100%; /* コンテナの幅を超えないようにする */
  max-height: 100%; /* コンテナの高さを超えないようにする */
}

.booking-logo-container {
  height: 50px;
  width: 50px;
  flex-shrink: 0; /* ★ これを追加: 親要素のflex設定で縮まないようにする */
  background-color: white;
  border-radius: 10px;
  padding: 5px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  margin-bottom: 4px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #166987;
}

.booking span {
  margin-top: 8px; /* Bookingのロゴと文字の間のスペース */
}

</style>