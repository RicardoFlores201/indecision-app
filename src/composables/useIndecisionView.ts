import type { ChatMessage } from '@/interfaces/chat-message-interface';
import type { YesNoResponse } from '@/interfaces/yes-no-response';
import { ref } from 'vue';

export function useIndecisionView() {
  const messages = ref<ChatMessage[]>([]);

  const getResponse = async () => {
    const resp = await fetch('https://yes-no-wtf.vercel.app/api');
    const data = (await resp.json()) as YesNoResponse;
    return data;
  };

  async function addUserMessage(text: string) {
    if (text.length === 0) return;

    messages.value.push({
      id: Date.now(),
      itsMine: true,
      message: text,
    });

    if (!text.endsWith('?')) return;

    const { answer, image } = await getResponse();
    messages.value.push({
      id: new Date().getTime(),
      itsMine: false,
      message: answer,
      image: image,
    });
  }

  return {
    messages,
    addUserMessage,
  };
}
