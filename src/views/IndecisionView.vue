<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <ChatMessages :messages="messages" />

    <MessageBox />
  </div>
</template>

<script setup lang="ts">
import ChatMessages from '@/chat/chatMessages.vue';
import MessageBox from '@/chat/messageBox.vue';
import { useIndecisionView } from '../composables/useIndecisionView';

const { messages } = useIndecisionView();
</script>
