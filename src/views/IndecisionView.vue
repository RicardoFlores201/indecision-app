<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <ChatHeader />

    <ChatMessages :messages="messages" />

    <MessageBox />
  </div>
</template>

<script setup lang="ts">
import ChatMessages from '@/chat/chatMessages.vue';
import MessageBox from '@/chat/messageBox.vue';
import { useIndecisionView } from '../composables/useIndecisionView';
import ChatHeader from '@/chat/ChatHeader.vue';

const { messages } = useIndecisionView();
</script>
