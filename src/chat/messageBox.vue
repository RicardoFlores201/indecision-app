<template>
  <div class="bg-white p-4 flex items-center">
    <input
      type="text"
      placeholder="Type your message..."
      class="flex-1 border rounded-full px-4 py-2 focus:outline-none"
      v-model="message"
      @keyup.enter="emitMessage"
    />

    <button
      class="bg-blue-500 text-white rounded-full p-2 ml-2 hover:bg-blue-600 focus:outline-none"
      @click="emitMessage"
    >
      <!-- tu SVG -->
      Enviar
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits<{
  (e: 'send-message', text: string): void;
}>();

const message = ref('');

function emitMessage() {
  const text = message.value.trim();
  if (!text) return;

  emit('send-message', text);
  message.value = '';
}
</script>
