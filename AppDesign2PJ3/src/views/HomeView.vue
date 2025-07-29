<script setup>
import { ref } from 'vue';
import BottomSheet from '../components/BottomSheet.vue';
import BoardingPass from '../components/BoardingPass.vue';


const isTicketModalOpen = ref(false);

const specialOffers = ref([
  { id: 1, city: 'Kuala Lumpur', price: 'RM1000', image: '/src/image/KualaLumur.jpg' },
  { id: 2, city: 'Hanoi', price: 'RM1000', image: '/src/image/Hanoi.jpeg' },
  { id: 3, city: 'Ho Chi Minh', price: 'RM1000', image: '/src/image/HoChiMinh.png' },
]);
</script>

<template>
  <div class="home-view-container">
    <section class="ticket-section">
      <h2>Flight Ticket</h2>
      <div class="ticket-card" @click="isTicketModalOpen = true">
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
      <BottomSheet :is-open="isTicketModalOpen" @close="isTicketModalOpen = false">
          <BoardingPass />
        </BottomSheet>
    </section>

      <section class="action-buttons">
       
      <router-link to="/flight-status" class="action-btn"> 
          <svg width="85" height="85" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          <span>Flight Status</span>
      </router-link>
      <router-link to="/check-in" class="action-btn">
      <svg width="85" height="85" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
      <span>Check-in</span>
      </router-link>
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
  </div>
</template>

<style scoped>
.home-view-container {
  width: 100%;
}
.header-logo {
  height: 24px;
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
}
.offer-image {
  width: 100%;
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



</style>