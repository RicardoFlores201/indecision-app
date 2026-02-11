<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <ChatHeader />

    <ChatMessages :messages="messages" />

    <MessageBox @send-message="onMessage" />
  </div>
</template>

<script setup lang="ts">
import ChatMessages from '@/chat/chatMessages.vue';
import MessageBox from '@/chat/messageBox.vue';
import ChatHeader from '@/chat/ChatHeader.vue';
import { useIndecisionView } from '../composables/useIndecisionView';

const { messages, addUserMessage } = useIndecisionView();

function onMessage(text: string) {
  addUserMessage(text);
}
</script>
