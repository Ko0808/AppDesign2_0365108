<script setup>
defineProps({
  label: String // "Departure City" や "Arrival City" といったラベルを受け取る
});
</script>

<template>
  <button class="selector-box">
    <svg xmlns="http://www.w3.org/2000/svg" height="60%" viewBox="0 -960 960 960" width="60%" fill="#888" stroke-width="0.8">
        <path d="M480.06-486.67q30.27 0 51.77-21.56 21.5-21.55 21.5-51.83 0-30.27-21.56-51.77-21.55-21.5-51.83-21.5-30.27 0-51.77 21.56-21.5 21.55-21.5 51.83 0 30.27 21.56 51.77 21.55 21.5 51.83 21.5ZM480-168q129.33-118 191.33-214.17 62-96.16 62-169.83 0-114.86-73.36-188.1-73.36-73.23-179.97-73.23T300.03-740.1q-73.36 73.24-73.36 188.1 0 73.67 63 169.83Q352.67-286 480-168Zm0 88Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>
    </svg>
    <div class="text-content">
      <span class="label">{{ label }}</span>
    </div>
  </button>
</template>

<style scoped>
    .selector-box {
        /* width: 100%; を削除します */
        
        /* ★★★ 正方形にするための指定を追加 ★★★ */
        width: 8rem;  /* 例: 128px。好きなサイズに調整してください */
        height: 8rem; /* widthと同じ値を指定して正方形にします */
        
        /* ★★★ 中身を中央揃えにするための指定を追加 ★★★ */
        display: flex;
        flex-direction: column;  /* 中身を縦に並べる */
        justify-content: center; /* 垂直方向の中央揃え */
        align-items: center;    /* 水平方向の中央揃え */
        gap: 0.5rem;             /* アイコンとテキストの間の余白 */
        
        /* --- 以下のスタイルは既存のものを維持 --- */
        padding: 1rem;
        background-color: #fff;
        border: 1px solid #ccc;
        border-radius: 0.75rem;
        text-align: left;
        cursor: pointer;
    }
    .icon {
    color: #888;
    margin-right: 0.75rem;
    }
    .text-content {
    display: flex;
    flex-direction: column;
    }
    .label {
    font-size: 1rem;
    color: #888;
    }
    .value {
    font-size: 1.1rem;
    font-weight: 500;
    color: #333;
    }
</style>