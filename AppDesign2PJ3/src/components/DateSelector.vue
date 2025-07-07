<script setup>
defineProps({
  label: String,
  // ★★★ disabledというプロパティ(props)を受け取れるようにする ★★★
  disabled: {
    type: Boolean, // 型はBoolean (true/false)
    default: false // 指定がなければデフォルトはfalse (活性状態)
  }
});
</script>

<template>
  <button class="selector-box" :disabled="disabled">
    <svg xmlns="http://www.w3.org/2000/svg" height="60%" viewBox="0 -960 960 960" width="60%" fill="#888"><path d="M186.67-633.33h586.66v-113.34H186.67v113.34Zm0 0v-113.34 113.34Zm0 553.33q-27 0-46.84-19.83Q120-119.67 120-146.67v-600q0-27 19.83-46.83 19.84-19.83 46.84-19.83h56.66V-880h70v66.67h333.34V-880h70v66.67h56.66q27 0 46.84 19.83Q840-773.67 840-746.67v280.34q-15.78-7.86-32.39-13.1-16.61-5.24-34.28-8.24v-79H186.67v420h296.66q6.34 18.67 14.84 35 8.5 16.34 20.16 31.67H186.67Zm540.66 40q-79.95 0-136.31-56.35-56.35-56.36-56.35-136.32 0-79.95 56.35-136.31 56.36-56.35 136.31-56.35 79.96 0 136.32 56.35Q920-312.62 920-232.67q0 79.96-56.35 136.32Q807.29-40 727.33-40Zm61.17-93.67 27.83-28-75-75v-112H702V-222l86.5 88.33Z"/></svg>
    <div class="text-content">
      <span class="label">{{ label }}</span>
    </div>
  </button>
</template>

<style scoped>
    .selector-box {
        
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

    /* ★★★ 非活性状態のスタイルを追加 ★★★ */
    .selector-box:disabled {
    background-color: #f5f5f5; /* 背景をグレーに */
    cursor: not-allowed; /* カーソルを変更 */
    }

    /* 非活性の時は、中の文字やアイコンの色も薄くする */
    .selector-box:disabled .icon,
    .selector-box:disabled .label,
    .selector-box:disabled .value {
    color: #bbb;
    }
</style>