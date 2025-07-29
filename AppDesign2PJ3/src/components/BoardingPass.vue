<template>
  <div class="boarding-pass">
    <div class="header"></div>
    <div class="content">
      <div class="barcode">
        <img src="../image/barcord.png" alt="Barcode">
      </div>
      <div class="flight-info main">
        <span>VN000</span>
        <span>Mr. Kou Obata</span>
      </div>
      <div class="route-info">
        <div class="location">
          <span class="airport-code">KUL</span>
          <span>01JUN2024</span>
          <span>00:00</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M283.33-80v-88.67L406-254v-162.67L80-285.33v-108L406-622v-184q0-30.33 21.83-52.17Q449.67-880 480-880q30.33 0 52.17 21.83Q554-836.33 554-806v184l326 228.67v108L554-416.67V-254l122 85.33V-80l-196-59.33L283.33-80Z" transform="rotate(90, 480, -480)"/></svg>
        <div class="location">
          <span class="airport-code">KUL</span>
          <span>01JUN2024</span>
          <span>00:00</span>
        </div>
      </div>
      <div class="details-info">
        <div class="detail-item">
          <span class="label">Seat</span>
          <span class="value">00A</span>
        </div>
        <div class="detail-item">
          <span class="label">Gate</span>
          <span class="value">00</span>
        </div>
      </div>
      <div class="footer">
        <img class="footer-item" src="../image/vietnam-airlines-logo.png" alt="Vietnam Airlines Logo">
        <svg class="footer-item" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#1f1f1f"><path d="M480-315.33 284.67-510.67l47.33-48L446.67-444v-356h66.66v356L628-558.67l47.33 48L480-315.33ZM226.67-160q-27 0-46.84-19.83Q160-199.67 160-226.67V-362h66.67v135.33h506.66V-362H800v135.33q0 27-19.83 46.84Q760.33-160 733.33-160H226.67Z"/></svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.boarding-pass { border-radius: 1rem; overflow: hidden; }
.header { height: 2rem; background-color: var(--primary-color, #005d6a); }
.content { padding: 1.5rem; background-color: #fff; }
.barcode { text-align: center; border-bottom: 1px dashed #ccc; padding-bottom: 1rem; }
.barcode img { width: 80%; }
.barcode span { font-size: 0.8rem; color: #888; }
.flight-info, .route-info, .details-info, .footer { display: flex; justify-content: space-between; align-items: center; padding: 1rem 0; }
.airport-code { font-size: 2rem; font-weight: bold; }
.location, .detail-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.detail-item .label { font-size: 0.9rem; color: #888; }
.detail-item .value { font-size: 1.5rem; font-weight: bold; }
.footer-item { height: 35px; }
</style>