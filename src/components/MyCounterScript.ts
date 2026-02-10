import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },
  setup(props) {
    const counter = ref(props.value);
    const square = computed(() => counter.value * counter.value);

    const add = () => counter.value++;
    const substract = () => counter.value--;
    return {
      counter,
      square,
      add,
      substract,
    };
  },
});
