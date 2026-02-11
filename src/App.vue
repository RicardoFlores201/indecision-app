<template>
  <h1
    class="bg-linear-to-l from-blue-500 to-blue-950 py-5 text-white font-bold text-3xl font-mono tracking-tighter"
  >
    MI PRIMERA APP
  </h1>
  <hr />
  <MyCounter :value="8" />
  <hr />
  <MyCounter :value="9" />
  <hr />
  <MyCounterScript :value="7" />
</template>

<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
</script>
