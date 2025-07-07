<script setup>
// 親コンポーネントから受け取るデータを定義
const props = defineProps({
  label: String, // "Adults" や "Children" といったラベル
  modelValue: Number, // v-modelで渡される現在の数値
  min: {          // 最小値
    type: Number,
    default: 0
  }
});

// 親コンポーネントにデータの更新を通知するための設定
const emit = defineEmits(['update:modelValue']);

// 数値を増やす関数
const increment = () => {
  emit('update:modelValue', props.modelValue + 1);
};

// 数値を減らす関数
const decrement = () => {
  // 最小値より小さくならないようにする
  if (props.modelValue > props.min) {
    emit('update:modelValue', props.modelValue - 1);
  }
};
</script>

<template>
  <div class="stepper-container">
    <span class="label">{{ label }}</span>
    <div class="controls">
      <button class="control-btn" @click="decrement" :disabled="modelValue <= min">-</button>
      <span class="value">{{ modelValue }}</span>
      <button class="control-btn" @click="increment">+</button>
    </div>
  </div>
</template>

<style scoped>
    .stepper-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0;
    }
    .label {
        font-size: 1.1rem;
        font-weight: 500;
    }
    .controls {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    .value {
        font-size: 1.2rem;
        font-weight: bold;
        width: 2rem; /* 数字の表示エリアの幅を確保 */
        text-align: center;
    }
    .control-btn {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%; /* 円形にする */
        border: 1px solid var(--primary-color, #005d6a);
        background-color: white;
        color: var(--primary-color, #005d6a);
        font-size: 1.5rem;
        font-weight: bold;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 1;
    }
    .control-btn:disabled {
        border-color: #ccc;
        color: #ccc;
        cursor: not-allowed;
    }
</style>