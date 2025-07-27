<template>
  <div class="chat-window" @click.stop>
    <div class="chat-header">
      <span>Chat</span>
      <button @click="$emit('close')" class="close-btn">&times;</button>
    </div>
    <div class="chat-body">
      <div class="message-bubble received">Do you need help?</div>
    </div>
    <div class="chat-footer">
      <input type="text" placeholder="Type a message...">
      <button class="send-btn">
        <svg height="24px" width="24px"><path d="M120-160v-640l760 320-760 320Z"/></svg>
      </button>
    </div>
  </div>
</template>

<script setup>
defineEmits(['close']);
</script>

<style scoped>
.chat-window {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #333;
  background-color: #fff;
}
.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #eee;
  font-weight: bold;
}
.close-btn { background: none; border: none; font-size: 1.5rem; cursor: pointer; }
.chat-body {
  flex-grow: 1;
  padding: 1rem;
  overflow-y: auto;
}
.message-bubble {
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  max-width: 80%;
  background-color: #f0f0f0;
}
.chat-footer {
  display: flex;
  padding: 0.5rem;
  border-top: 1px solid #eee;
}
.chat-footer input {
  flex-grow: 1;
  border: 1px solid #ccc;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
}
.send-btn {
  background-color: var(--primary-color, #005d6a);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-left: 0.5rem;
  cursor: pointer;
}
</style>