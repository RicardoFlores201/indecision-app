import type { ChatMessage } from '@/interfaces/chat-message-interface';
import { ref } from 'vue';

export function useIndecisionView() {
  const messages = ref<ChatMessage[]>([]);

  function addUserMessage(text: string) {
    messages.value.push({
      id: Date.now(),
      itsMine: true,
      message: text,
    });
  }

  return {
    messages,
    addUserMessage,
  };
}
