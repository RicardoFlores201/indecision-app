<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ square }}</h3>
    <div>
      <button v-on:click="add">+1</button>
      <button v-on:click="substract">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

//Variable reactiva
const counter = ref(6);

//Computed
const square = computed(() => counter.value * counter.value);

const add = () => {
  counter.value++;
};

const substract = () => {
  counter.value--;
};
</script>
