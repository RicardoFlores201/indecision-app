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

<script lang="ts" src="./MyCounterScript.ts"></script>
