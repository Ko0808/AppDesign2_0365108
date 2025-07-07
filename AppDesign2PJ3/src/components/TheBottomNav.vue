<script setup>
// このコンポーネント自体に特別なロジックは不要なので、<script>タグはこれだけでOKです。
</script>

<template>
    <nav class="bottom-nav">
        <router-link to="/" class="nav-item">
            <svg class = "nav-icon" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="currentColor"><path d="M226.67-186.67h140v-246.66h226.66v246.66h140v-380L480-756.67l-253.33 190v380ZM160-120v-480l320-240 320 240v480H526.67v-246.67h-93.34V-120H160Zm320-352Z"/></svg>
            <span>Home</span>
        </router-link>

        <router-link to="/my-trip" class="nav-item">
            <svg class = "nav-icon" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="currentColor"><path d="M186.67-80q-27 0-46.84-19.83Q120-119.67 120-146.67v-600q0-27 19.83-46.83 19.84-19.83 46.84-19.83h56.66V-880h70v66.67h333.34V-880h70v66.67h56.66q27 0 46.84 19.83Q840-773.67 840-746.67v600q0 27-19.83 46.84Q800.33-80 773.33-80H186.67Zm0-66.67h586.66v-420H186.67v420Zm0-486.66h586.66v-113.34H186.67v113.34Zm0 0v-113.34 113.34Zm93.33 220V-480h400v66.67H280ZM280-240v-66.67h279.33V-240H280Z"/></svg>
            <span>My Trip</span>
        </router-link>

        <router-link to="/booking" class="nav-item booking">
            <div class="booking-logo-container"> 
            <img src="../image/VNIcon.png" alt="Booking" class="booking-logo">
            </div>
            <span>Booking</span>
        </router-link>

        <router-link to="#" class="nav-item">
            <svg class = "nav-icon" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="currentColor"><path d="M226-262q59-42.33 121.33-65.5 62.34-23.17 132.67-23.17 70.33 0 133 23.17T734.67-262q41-49.67 59.83-103.67T813.33-480q0-141-96.16-237.17Q621-813.33 480-813.33t-237.17 96.16Q146.67-621 146.67-480q0 60.33 19.16 114.33Q185-311.67 226-262Zm253.88-184.67q-58.21 0-98.05-39.95Q342-526.58 342-584.79t39.96-98.04q39.95-39.84 98.16-39.84 58.21 0 98.05 39.96Q618-642.75 618-584.54t-39.96 98.04q-39.95 39.83-98.16 39.83ZM480.31-80q-82.64 0-155.64-31.5-73-31.5-127.34-85.83Q143-251.67 111.5-324.51T80-480.18q0-82.82 31.5-155.49 31.5-72.66 85.83-127Q251.67-817 324.51-848.5T480.18-880q82.82 0 155.49 31.5 72.66 31.5 127 85.83Q817-708.33 848.5-635.65 880-562.96 880-480.31q0 82.64-31.5 155.64-31.5 73-85.83 127.34Q708.33-143 635.65-111.5 562.96-80 480.31-80Zm-.31-66.67q54.33 0 105-15.83t97.67-52.17q-47-33.66-98-51.5Q533.67-284 480-284t-104.67 17.83q-51 17.84-98 51.5 47 36.34 97.67 52.17 50.67 15.83 105 15.83Zm0-366.66q31.33 0 51.33-20t20-51.34q0-31.33-20-51.33T480-656q-31.33 0-51.33 20t-20 51.33q0 31.34 20 51.34 20 20 51.33 20Zm0-71.34Zm0 369.34Z"/></svg>
            <span>My Page</span>
        </router-link>

        <router-link to="#" class="nav-item">
            <svg class = "nav-icon" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="currentColor"><path d="M295.33-726v-47.33q0-27 19.84-46.84Q335-840 362-840h234.67q27 0 46.83 19.83 19.83 19.84 19.83 46.84V-726h52q20 0 36.84 10.83Q769-704.33 776-687.33l96.67 226.66q3.66 8 5.5 18.23Q880-432.22 880-422v195.33q0 27-19.83 46.84Q840.33-160 813.33-160H146.67q-27 0-46.84-19.83Q80-199.67 80-226.67V-422q0-10.22 1.83-20.44 1.84-10.23 5.5-18.23l95.34-226.66q7-17 23.83-27.84Q223.33-726 243.33-726h52Zm66.67 0h234.67v-47.33H362V-726Zm-79.33 253.33v-44h66.66v44h261.34v-44h66.66v44H794l-78-186.66H244l-78 186.66h116.67Zm0 66.67h-136v179.33h666.66V-406h-136v44h-66.66v-44H349.33v44h-66.66v-44ZM480-439.33Zm0-33.34Zm0 66.67Z"/></svg>
            <span>Tools</span>
        </router-link>
    </nav>
</template>

<style scoped>
    /* ボトムナビゲーション */
    .bottom-nav {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 999;
        
        /* 中央揃えのためのコンテナ */
        max-width: 480px;
        margin: auto;
        
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #F7F3E7;
        box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
        height: 4.375rem; /* 70px -> 4.375rem */
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
        width: 2rem; /* 32px -> 2rem */
        height: 2rem;
        margin-bottom: 0.25rem; /* 4px -> 0.25rem */
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