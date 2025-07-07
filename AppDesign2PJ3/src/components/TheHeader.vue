<script setup>
import { ref } from 'vue';

// refを使って、メニューが開いているか閉じているかの状態を管理する変数を用意します
// falseが「閉じている」、trueが「開いている」状態です
const isMenuOpen = ref(false);

// メニューの状態を切り替える関数
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value; // 現在の状態を反転させる (false -> true, true -> false)
};

// メニューを閉じる関数（リンククリック時などに使用）
const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <header class="app-header">
    <div class="top-bar">
      <button class="menu-button" @click="toggleMenu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
      <img src="../image/VNHeader.png" alt="Vietnam Airlines Logo" class="header-logo">
      <span class="placeholder"></span> 
    </div>

    <div 
      class="menu-overlay" 
      v-if="isMenuOpen" 
      @click="closeMenu"
    ></div>

    <aside class="slide-out-menu" :class="{ 'is-open': isMenuOpen }">
      <nav>
        <ul>
          <li><router-link to="/" @click="closeMenu">Home</router-link></li>
          <li><router-link to="/my-trip" @click="closeMenu">My Trip</router-link></li>
          <li><router-link to="#" @click="closeMenu">Booking</router-link></li>
          <li><router-link to="/my-page" @click="closeMenu">My Page</router-link></li>
          <li class="divider"></li>
          <li><router-link to="#" @click="closeMenu">Boarding Pass</router-link></li>
          <li><router-link to="#" @click="closeMenu">Flight Status</router-link></li>
          <li><router-link to="#" @click="closeMenu">Check-in</router-link></li>
          <li class="divider"></li>
          <li><router-link to="#" @click="closeMenu">Miles Calculator</router-link></li>
          <li><router-link to="#" @click="closeMenu">Airport Map</router-link></li>
          <li><router-link to="#" @click="closeMenu">Route Map</router-link></li>
          <li class="divider"></li>
          <li><router-link to="#" @click="closeMenu">Tools</router-link></li>
          <li><router-link to="/settings" @click="closeMenu">Setting</router-link></li>
        </ul>
      </nav>
    </aside>
  </header>
</template>

<style scoped>
    /* ヘッダー本体のスタイル */
    .app-header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0; /* ← これでヘッダーの背景は横幅いっぱいになる */
        z-index: 1000;
        color: white;
        /* ここではmax-widthを指定しない */
    }

    /* ヘッダーの中身を配置するバー */
    .top-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 4.5rem; 
        padding: 0 1rem;
        background-color: #015878;
        
        /* 中身を中央の最大幅に収める */
        max-width: 480px;
        margin: 0 auto;
        padding-top: 1vh;
    }

    .menu-button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0;
    }
    .menu-button svg {
    width: 2.5rem; /* 24px */
    height: 2.5rem;
    }

    .header-logo {
    height: 2.5rem; 
    }
    .placeholder {
    width: 1.5rem; /* 24px, ボタンと同じ幅でバランスを取る */
    }

    /* ★★★ スライドメニューのスタイル（ここが最重要） ★★★ */
    .slide-out-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 280px; /* メニューの幅 */
    height: 100%;
    background-color: #fff;
    color: #333;
    box-shadow: 2px 0 5px rgba(0,0,0,0.2);
    
    /* ↓ これがメニューを画面外に隠すための指定 */
    transform: translateX(-100%); 
    
    /* ↓ これがスライドアニメーションの指定 */
    transition: transform 0.3s ease-in-out; 
    
    padding-top: 3.75rem; /* ヘッダーの高さ分、上を空ける */
    z-index: 1002; /* ヘッダー本体やオーバーレイより更に手前に */
    }

    /* 'is-open'クラスが付いた時に、メニューを画面内に表示する */
    .slide-out-menu.is-open {
    transform: translateX(0); 
    }

    /* メニュー内のリストとリンクのスタイル */
    .slide-out-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
    }
    .slide-out-menu li a {
    display: block;
    padding: 1rem 1.5rem;
    color: #333;
    text-decoration: none;
    border-bottom: 1px solid #eee;
    }
    .slide-out-menu li a:hover {
    background-color: #f4f4f4;
    }
    .divider {
    height: 1px;
    background-color: #ccc;
    margin: 0.5rem 0;
    }

    /* オーバーレイのスタイル */
    .menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 1001; /* メニューよりは後ろ、ヘッダーよりは手前 */
    }
</style>