<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const agreeProhibited = ref(false);
const agreeTerms = ref(false);
const router = useRouter();

const goToNextStep = () => {
  router.push('/personal-info');
};
// 両方のチェックボックスがオンになったらNextボタンを有効にする
const isNextButtonDisabled = computed(() => {
  return !agreeProhibited.value || !agreeTerms.value;
});
const prohibitedItems = ref([
  { id: 1, name: 'Explosive', svg: '<path d="M346-48q-125 0-212.5-88.5T46-350q0-125 86.83-211.5Q219.67-648 344.67-648H357l31.67-55.67q10-18.66 30-23.83 20-5.17 38.66 5.17L502-696.67l5-8Q530-745 575.33-757q45.34-12 86.34 11l29 16.67-33.34 57.66-29-16.66q-16.66-10-35.83-4.84-19.17 5.17-28.5 21.84l-4.33 8 54 31q17.66 10.66 23.16 30.33 5.5 19.67-5.16 37.33L600-508q23 36 34.5 76.5T646-348q0 125-87.5 212.5T346-48Zm0-66.67q96.33 0 164.83-68.5 68.5-68.5 68.5-164.83 0-32.33-9.16-64.33-9.17-32-27.5-61L521.33-507 566-583.67 438.67-657l-44 76h-45.34q-98 0-167.83 67-69.83 67-69.83 164 0 98 68.5 166.67 68.5 68.66 165.83 68.66Zm467.33-500v-66.66H920v66.66H813.33ZM586.67-841.33V-948h66.66v106.67h-66.66Zm195 78.33L735-809.67l75.67-75.66 46.66 46.66L781.67-763ZM346-348Z"/>' },
  { id: 2, name: 'Toxic', svg: '<path d="M181.33-120q-44.85 0-63.76-41.17-18.9-41.16 11.1-75.5L368-513.33v-260h-48q-14.17 0-23.75-9.62t-9.58-23.83q0-14.22 9.58-23.72 9.58-9.5 23.75-9.5h320q14.17 0 23.75 9.62 9.58 9.61 9.58 23.83 0 14.22-9.58 23.72-9.58 9.5-23.75 9.5h-48v260l239.33 276.66q30 34.34 11.1 75.5Q823.52-120 778.67-120H181.33Zm73.34-100h450.66l-152-176.67H406.67L254.67-220Zm-81.34 33.33h613.34L525.33-489.33v-284h-90.66v284L173.33-186.67ZM480-480Z"/>' },
  { id: 3, name: 'Compressed Gas', svg: '<path d="M320-80q-66 0-113-47t-47-113v-320q0-57 34-99t86-56v-98.33q0-27.5 19.58-47.09Q319.17-880 346.67-880h266.66q27.5 0 47.09 19.58Q680-840.83 680-813.33V-715q52 14 86 56t34 99v320q0 66-47 113T640-80H320Zm-93.33-346.67h506.66V-560q0-39-27.16-66.17Q679-653.33 640-653.33H320q-39 0-66.17 27.16Q226.67-599 226.67-560v133.33Zm93.33 280h320q39 0 66.17-27.16Q733.33-201 733.33-240v-120H226.67v120q0 39 27.16 66.17Q281-146.67 320-146.67Zm160-280Zm0 66.67Zm0-33.33ZM520-720h93.33v-93.33H346.67V-720H440q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720Z"/>' },
  { id: 4, name: 'Bladed', svg: '<path d="m774.67-116-294-294-109.34 109.33q10 16.34 12.67 32.67 2.67 16.33 2.67 34.67 0 64.66-44.34 109Q298-80 233.33-80q-64.66 0-109-44.33Q80-168.67 80-233.33q0-64.67 44.33-109 44.34-44.34 109-44.34 17.67 0 35 4.34 17.34 4.33 35 13.66L412-477.33l-110-110q-16.33 8-33.67 11-17.33 3-35 3-64.66 0-109-44.34Q80-662 80-726.67q0-64.66 44.33-109 44.34-44.33 109-44.33 64.67 0 109 44.33 44.34 44.34 44.34 109 0 18.34-2.67 35.34-2.67 17-10.67 32L880.67-152v36h-106ZM599.33-524.67l-70.66-70.66 246-246h106V-806L599.33-524.67ZM233.33-640q36.34 0 61.5-25.17Q320-690.33 320-726.67q0-36.33-25.17-61.5-25.16-25.16-61.5-25.16-36.33 0-61.5 25.16-25.16 25.17-25.16 61.5 0 36.34 25.16 61.5Q197-640 233.33-640ZM482-458q8 0 13.67-5.67 5.66-5.66 5.66-13.66T495.67-491q-5.67-5.67-13.67-5.67T468.33-491q-5.66 5.67-5.66 13.67t5.66 13.66Q474-458 482-458ZM233.33-146.67q36.34 0 61.5-25.16Q320-197 320-233.33q0-36.34-25.17-61.5Q269.67-320 233.33-320q-36.33 0-61.5 25.17-25.16 25.16-25.16 61.5 0 36.33 25.16 61.5 25.17 25.16 61.5 25.16Z"/>' },
  { id: 5, name: 'Firearms', svg: '<path d="M226.67-400q0 59.33 26 111.83t73 88.84q-3-9.67-4.34-19.34Q320-228.33 320-238q0-32 12-60t35-51l113-111 113 111q23 23 35 51t12 60q0 9.67-1.33 19.33-1.34 9.67-4.34 19.34 47-36.34 73-88.84t26-111.83q0-52.67-21.5-101.83-21.5-49.17-61.83-89.5-20.67 14.33-43.33 22.16-22.67 7.84-45.67 7.84-61.33 0-103.17-41.34Q416-644 413.67-706v-13.33q-43.67 33-78.34 71.5-34.66 38.5-58.83 79.66-24.17 41.17-37 84.17-12.83 43-12.83 84ZM480-366.67l-66.33 65.34q-13 13-20 29t-7 34.33q0 38 27.16 64.67Q441-146.67 480-146.67t66.17-26.66Q573.33-200 573.33-238q0-18.67-7-34.5-7-15.83-20-28.83L480-366.67ZM480-840v132q0 34 23.5 57t57.5 23q18 0 33.5-7.5T622-658l18-22q74 42 117 117t43 163q0 134-93 227T480-80q-134 0-227-93t-93-227q0-128.33 86.17-246Q332.33-763.67 480-840Z"/>' },
  { id: 6, name: 'Liquid', svg: '<path d="m241.67-388 26.49 241.33H692l28.67-260H697q-37.5 0-68.58-5.5-31.09-5.5-85.09-20.83-24.33-7-49-10.33-24.66-3.34-50.33-3.34-54.33 0-105.83 15T241.67-388ZM233-460q47.67-25.67 102.17-39.5 54.5-13.83 109.16-13.83 30 0 59.5 4t57.17 12q50.75 14 77.65 19 26.9 5 57.35 5h31.67l37.66-340H194.67L233-460Zm34.67 380Q242-80 222.94-96.62q-19.06-16.62-21.61-42.38L120-880h720l-81.33 741q-2.54 25.76-21.61 42.38Q718-80 692.33-80H267.67Zm.33-66.67H692 268Z"/>' },
  { id: 7, name: 'Fresh Foods', svg: '<path d="M283.33-80v-367.33q-51.66-12-87.5-53.67Q160-542.67 160-600v-280h66.67v280h56.66v-280H350v280h56.67v-280h66.66v280q0 57.33-35.83 99T350-447.33V-80h-66.67Zm410 0v-320H576.67v-296.67q0-80.33 51.5-131.83Q679.67-880 760-880v800h-66.67Z"/>' },
]);
</script>

<template>
  <div class="prohibited-items-page">
    <div class="page-title-chip">Check-in</div>
    
    <div class="content-card">
    <h2 class="section-title">Prohibited Items</h2>
      
        <div class="items-grid">
            <div v-for="item in prohibitedItems" :key="item.id" class="item">
                <div class="icon-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" v-html="item.svg"></svg>
                </div>
                <span>{{ item.name }}</span>
            </div>
        </div>

      <div class="agreement-section">
        <label class="checkbox-label">
          <input type="checkbox" v-model="agreeProhibited">
          I agree with prohibited items above
        </label>
        <label class="checkbox-label">
          <input type="checkbox" v-model="agreeTerms">
          I agree with Terms & Conditions
        </label>
      </div>

      <div class="navigation-buttons">
        <router-link to="/check-in" class="nav-button back">Back</router-link>
         <button class="nav-button next" :disabled="isNextButtonDisabled" @click="goToNextStep">Next</button>   
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-title-chip {
  display: inline-block;
  background-color: #e0e0e0;
  padding: 0.25rem 1rem;
  border-radius: 1rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
}
.content-card {
  padding: 1.5rem;
}
.section-title {
  text-align: center;
  font-size: 1.2rem;
  font-weight: 500;
  color: #333;
  margin: 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
}
.items-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-top: 1px solid #000;
}
.item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.icon {
  font-size: 1.5rem;
}
.agreement-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}
.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.navigation-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}
.nav-button {
  flex: 1;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 0.5rem;
  cursor: pointer;
}
.back {
  background-color: #e0e0e0;
  color: #333;
  border: none;
}
.next {
  background-color: var(--primary-color, #005d6a);
  color: white;
  border: none;
}
.next:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
.icon-wrapper {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #C21C1C; /* 赤系の背景色 */
  border-radius: 50%;
}
.icon-wrapper svg {
  width: 24px;
  height: 24px;
  fill: #ffffff; /* SVGの色 */
}
</style>