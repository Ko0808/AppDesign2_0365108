<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import DraggableFab from '../components/DraggableFab.vue';
import ChatWindow from '../components/ChatWindow.vue';
import BottomSheet from '../components/BottomSheet.vue';
import AirportSearch from '../components/AirportSearch.vue';

const router = useRouter();

// 空港選択モーダルの表示状態
const isAirportModalOpen = ref(false);

const isChatExpanded = ref(false);

const onChatIconTap = () => {
  isChatExpanded.value = true;
};

// 空港が選択された時の処理
const onAirportSelect = (airport) => {
  isAirportModalOpen.value = false;
  router.push('/airport-map'); 
};

</script>

<template>
  <div class="tools-page">
    <div class="page-title-chip">Help & Tools</div>

    <section class="tools-grid">
      <router-link to="/miles-calculator" class="tool-button">
        <svg xmlns="http://www.w3.org/2000/svg" height="55px" viewBox="0 -960 960 960" width="55px" fill="#ffffff"><path d="M316-232h53.33v-85.33h85.34v-53.34h-85.34V-456H316v85.33h-85.33v53.34H316V-232Zm210-33.33h200.67V-318H526v52.67ZM526-370h200.67v-53.33H526V-370Zm39.33-159.33 59.34-59.34L684-529.33l38-38-59.33-60L722-686.67l-38-38-59.33 59.34-59.34-59.34-38 38 59.34 59.34-59.34 60 38 38ZM244-600.67h197.33V-654H244v53.33ZM186.67-120q-27 0-46.84-19.83Q120-159.67 120-186.67v-586.66q0-27 19.83-46.84Q159.67-840 186.67-840h586.66q27 0 46.84 19.83Q840-800.33 840-773.33v586.66q0 27-19.83 46.84Q800.33-120 773.33-120H186.67Zm0-66.67h586.66v-586.66H186.67v586.66Zm0-586.66v586.66-586.66Z"/></svg>
        <span>Miles Calculator</span>
      </router-link>
      
      <button class="tool-button" @click="isAirportModalOpen = true">
        <svg xmlns="http://www.w3.org/2000/svg" height="55px" viewBox="0 -960 960 960" width="55px" fill="#ffffff"><path d="m608-120-255.33-90-181.34 71.33q-18 8.67-34.66-2.16Q120-151.67 120-172v-558.67q0-13 7.5-23t19.83-15L352.67-840 608-750.67 788.67-822q18-8 34.66 2.5Q840-809 840-788.67v563.34q0 11.66-7.5 20.33-7.5 8.67-19.17 13L608-120Zm-36-82.67v-492.66L388-758v492.67l184 62.66Zm66.67 0 134.66-44.66v-499.34l-134.66 51.34v492.66Zm-452-11.33 134.66-51.33V-758l-134.66 44.67V-214Zm452-481.33v492.66-492.66ZM321.33-758v492.67V-758Z"/></svg>
        <span>Airport Map</span>
      </button>
      
      <button class="tool-button">
        <svg xmlns="http://www.w3.org/2000/svg" height="55px" viewBox="0 -960 960 960" width="55px" fill="#1f1f1f"><path d="M320.33-288 480-360.33 639.67-288l8.33-8.33-168-406.34-168 406.34 8.33 8.33ZM480-80q-82.33 0-155.33-31.5-73-31.5-127.34-85.83Q143-251.67 111.5-324.67T80-480q0-83 31.5-156t85.83-127q54.34-54 127.34-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82.33-31.5 155.33-31.5 73-85.5 127.34Q709-143 636-111.5T480-80Zm0-66.67q139.33 0 236.33-97.33t97-236q0-139.33-97-236.33t-236.33-97q-138.67 0-236 97-97.33 97-97.33 236.33 0 138.67 97.33 236 97.33 97.33 236 97.33ZM480-480Z"/></svg>
        <span>Route Map</span>
      </button>
    </section>

    <section class="links-section">
      <DraggableFab 
        :is-expanded="isChatExpanded"
        @close="isChatExpanded = false"
      >
        <div class="chat-icon" @click="onChatIconTap">
          <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#fff"><path d="M440-120v-66.67h333.33V-484q0-121.46-85.38-206.06-85.38-84.61-207.95-84.61t-207.95 84.61q-85.38 84.6-85.38 206.06v244H160q-33 0-56.5-23.5T80-320v-80q0-21 10.5-39.5T120-469l3-53q8-68 39.5-126t79-101q47.5-43 109-67T480-840q68 0 129 24t109 66.5Q766-707 797-649t40 126l3 52q19 9 29.5 27t10.5 38v92q0 20-10.5 38T840-249v62.33q0 27.5-19.58 47.09Q800.83-120 773.33-120H440Zm-80.12-286.67q-14.21 0-23.71-9.61-9.5-9.62-9.5-23.84 0-14.21 9.61-23.71 9.62-9.5 23.84-9.5 14.21 0 23.71 9.61 9.5 9.62 9.5 23.84 0 14.21-9.61 23.71-9.62 9.5-23.84 9.5Zm240 0q-14.21 0-23.71-9.61-9.5-9.62-9.5-23.84 0-14.21 9.61-23.71 9.62-9.5 23.84-9.5 14.21 0 23.71 9.61 9.5 9.62 9.5 23.84 0 14.21-9.61 23.71-9.62 9.5-23.84 9.5ZM241-462q-7-106 64-182t177-76q87.67 0 152.83 57.17Q700-605.67 714-519q-89.67-1-164.17-49.67-74.5-48.66-115.02-129.33Q419-618 367.5-555.5T241-462Z"/></svg>
        </div>
        <ChatWindow @close="isChatExpanded = false" />
      </DraggableFab>
      <a href="#" class="info-link">FAQ</a>
      <a href="#" class="info-link">Contact</a>
    </section>
    
    <BottomSheet :is-open="isAirportModalOpen" @close="isAirportModalOpen = false">
      <AirportSearch @select="onAirportSelect" />
    </BottomSheet>
  </div>
</template>

<style scoped>
.page-title-chip {
  display: inline-block;
  background-color: #e0e0e0;
  padding: 0.25rem 1rem;
  border-radius: 1rem;
  font-weight: 500;
}
.tools-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.3rem;
  grid-template-rows: 1.5fr 1fr;
  margin-top: 10%
}

/* スマートフォンなどの狭い画面向けの調整 */
@media (max-width: 420px) {
  .tools-grid {
    grid-template-columns: 1fr; /* 1列にする */
    grid-template-rows: auto; /* 行の高さを自動に */
  }
}
.tool-button {
  display: flex; 
  align-items: center; 
  gap: 1rem; 
  
  padding: 1rem; 
  border-radius: 0.75rem;
  border: none;
  background-color: var(--primary-color, #005d6a);
  color: white;
  font-size: 1.1rem; 
  font-weight: 500;
  cursor: pointer;
  
}

.tool-button.large {
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
}

.tool-button svg {
  background-color: #ECE7C9; 
  color: #015878; 
  border-radius: 50%; 
  padding: 0.3rem; 
  
  fill: #015878;
}

.links-section {
  margin-top: 3rem;
  text-align: center;
}
.chat-icon {
  width: 60px;
  height: 60px;
  background-color: var(--primary-color, #005d6a);
  color: white;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}
.info-link {
  display: block;
  padding: 1rem;
  font-size: 1.1rem;
  color: #333;
  text-decoration: none;
  border-bottom: 1px solid #eee;
}
.info-link:first-of-type {
  border-top: 1px solid #eee;
}
</style>