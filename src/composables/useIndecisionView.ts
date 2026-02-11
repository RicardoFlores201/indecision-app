import type { ChatMessage } from '@/interfaces/chat-message-interface';
import { ref } from 'vue';

export function useIndecisionView() {
  const messages = ref<ChatMessage[]>([
    {
      id: Date.now(),
      message: 'PRIMER POSICIÓN ARREGLO',
      itsMine: true,
    },
    {
      id: Date.now() + 1,
      message: 'SEGUNDA POSICIÓN ARREGLO',
      itsMine: false,
      image: 'https://yesno.wtf/assets/yes/4-c53643ecec77153eefb461e053fb4947.gif',
    },
  ]);

  // aquí luego agregas acciones
  // const sendMessage = (text: string) => {...}

  return {
    messages,
    // sendMessage
  };
}
