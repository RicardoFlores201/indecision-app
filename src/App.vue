<template>
  <h1>MI PRIMERA APP</h1>
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
