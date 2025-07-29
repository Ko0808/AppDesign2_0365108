<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import GearLoading from '../components/GearLoading.vue';

const router = useRouter();
const isLoading = ref(false);

const confirmSeat = () => {
  isLoading.value = true; // ★ ローディング開始
  setTimeout(() => {
    isLoading.value = false; // 3秒後にローディング終了
    router.push('/check-in-success');
  }, 3000);
};

// 座席選択の状態を管理
const selectedSeatId = ref(null);

// v-htmlで使用するSVGのパスデータ（アイコンの形）
const seatPath = '<path d="M154.67-688q0-46.67 32.66-79.33Q220-800 266.67-800h426.66q46.67 0 79.34 32.67 32.66 32.66 32.66 79.33v82Q854-609.33 887-580.33T920-502v230q0 46.67-32.67 79.33Q854.67-160 808-160H152q-46.67 0-79.33-32.67Q40-225.33 40-272v-230q0-49.33 33.33-78.33 33.34-29 81.34-25.67v-82Zm66.66 0v112q15.34 15 24.34 31.33 9 16.34 9 42.67v109.33h450.66V-502q0-26.33 9-42.67 9-16.33 24.34-31.33v-112q0-19.67-12.84-32.5-12.83-12.83-32.5-12.83H266.67q-19.67 0-32.5 12.83-12.84 12.83-12.84 32.5ZM772-326H188v-176q0-9.33-2.67-16.83-2.66-7.5-8.16-13t-13-8.17q-7.5-2.67-16.57-2.67-19.27 0-30.1 10.84Q106.67-521 106.67-502v230.11q0 19.56 12.83 32.39 12.83 12.83 32.5 12.83h656q19.67 0 32.5-12.83 12.83-12.83 12.83-32.39V-502q0-19-10.83-29.83-10.83-10.84-30.1-10.84-9.07 0-16.57 2.67t-12.78 8.17q-5.28 5.5-8.17 13Q772-511.33 772-502v176Zm-292 0Zm0 99.33Zm0-166Z"/>';

// 12行 x 7列（3席 + 通路 + 3席）の座席データを生成
const seats = ref([]);
const setupSeats = () => {
  const rows = 12;
  const cols = 7;
  const newSeats = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const seatNumber = i + 1;
      const seatLetter = String.fromCharCode(65 + (j < 3 ? j : j - 1));
      
      if (j === 3) {
        // 3列目は通路
        newSeats.push({ id: `aisle_${i}`, status: 'aisle' });
      } else {
        // ダミーの座席ステータスをランダムに割り当て
        const random = Math.random();
        let status = 'available'; // 緑
        if (random > 0.8) status = 'booked'; // 赤
        else if (random > 0.6) status = 'reserved'; // 黄
        
        newSeats.push({ id: `${seatNumber}${seatLetter}`, status });
      }
    }
  }
  seats.value = newSeats;
};
// コンポーネントがマウントされた時に座席を生成
import { onMounted } from 'vue';
onMounted(setupSeats);

// 座席選択のロジック
const selectSeat = (seat, event) => {
  if (seat && seat.status === 'available') {
    selectedSeatId.value = selectedSeatId.value === seat.id ? null : seat.id;
    
    // ★ 波紋エフェクトのロジック
    const seatEl = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = seatEl.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('ripple');
    
    seatEl.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }
};
</script>

<template>
  <div class="seat-selection-page">
    <div class="route-header">
      </div>
    <div class="legend">
        <div class="legend-item"><span class="seat-icon-legend booked"></span> Booked (6)</div>
        <div class="legend-item"><span class="seat-icon-legend reserved"></span> Reserved (13)</div>
        <div class="legend-item"><span class="seat-icon-legend available"></span> Available (77)</div>
        <div class="legend-item"><span class="seat-icon-legend selected"></span> Selected</div>
    </div>
    
    <div class="seat-map-container">
      <div class="seat-map">
        <div 
          v-for="seat in seats" 
          :key="seat.id" 
          class="seat"
          :class="[seat.status, { selected: seat.id === selectedSeatId }]"
          @click="selectSeat(seat, $event)"
        >
          <div v-if="seat.status !== 'aisle'" class="seat-icon" v-html="`<svg viewBox='0 -960 960 960'>${seatPath}</svg>`"></div>
          <span v-else class="aisle-label">{{ seat.id.split('_')[1] + 1 }}</span>
        </div>
      </div>
    </div>
    
    <div class="confirm-button-wrapper">
        <button class="confirm-button" :disabled="!selectedSeatId" @click="confirmSeat">Confirm</button>
    </div>

    <GearLoading v-if="isLoading" />
  </div>
</template>

<style scoped>
.legend {
  display: grid; /* FlexboxからGridに変更 */
  grid-template-columns: 1fr 1fr; /* 2列のグリッドを作成 */
  gap: 0.5rem 1rem; /* 縦と横の隙間 */
  padding: 1rem;
  background-color: #4a4a4a; /* 背景をダークグレーに */
  color: #f0f0f0; /* 文字色を明るいグレーに */
  font-size: 0.9rem;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.seat-icon-legend {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.25rem;
}
.seat-selection-page {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 3.75rem); /* ヘッダーの高さを引いた画面の高さ */
  background-color: #fff;
}
.seat-icon-legend.booked {
  background-color: #ffd54f; /* 黄色 */
}
.seat-icon-legend.reserved {
  background-color: #e57373; /* 赤色 */
}
.seat-icon-legend.available {
  background-color: #81c784; /* 緑色 */
}
.seat.selected .seat-icon {
  /* 選択時のスタイルはSVGのfillで制御するため、ここでは枠線のみ */
  outline: 2px solid var(--primary-color, #005d6a);
  border-radius: 0.25rem; /* 枠線も少し丸める */
}
.seat-icon-legend.selected {
  background-color: #e57373; /* 凡例の選択色は赤 */
}

.route-header, .legend {
  flex-shrink: 0; /* これらの要素が縮まないようにする */
}
/* ... (ヘッダーと凡例のスタイルは省略) ... */

.seat-map-container {
  flex-grow: 1; /* 残りのスペースを全て埋める */
  overflow-y: auto; /* 縦方向にはみ出たらスクロール */
  padding: 1rem;
  background-color: #fff;
  z-index: 1;
}

.seat-map {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
}
.seat {
  aspect-ratio: 1 / 1; /* 座席を正方形に */
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* ★ 波紋の基準点 */
}
.seat.aisle {
  cursor: default;
}
.seat.booked, .seat.reserved {
  cursor: not-allowed;
}

.seat-icon {
  width: 100%;
  height: 100%;
}
.seat-icon :deep(svg) {
  width: 100%;
  height: 100%;
  transition: fill 0.2s;
}

/* 色の指定 */
.seat.available .seat-icon :deep(svg) { fill: #81c784; }
.seat.available:hover .seat-icon :deep(svg) { fill: #66bb6a; }
.seat.reserved .seat-icon :deep(svg) { fill: #ffd54f; }
.seat.booked .seat-icon :deep(svg) { fill: #e57373; }
/* ★ 選択された座席の色（最優先） */
.seat.available.selected .seat-icon :deep(svg) { fill: #e57373; }

.confirm-button-wrapper {
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
  flex-shrink: 0;
}
.confirm-button {
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  color: white;
  background-color: var(--primary-color, #005d6a);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
}
.confirm-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

/* ★ 波紋のスタイルを修正 */
.seat :deep(.ripple) {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2); /* ★ 色を見やすく変更 */
  transform: scale(0);
  animation: ripple-effect 0.6s linear;
}
@keyframes ripple-effect {
  to {
    transform: scale(6); /* ★ サイズを大きく変更 */
    opacity: 0;
  }
}
</style>