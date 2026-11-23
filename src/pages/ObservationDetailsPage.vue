<template>
  <q-page padding>
  <q-page class="q-pa-md">
    <h1 class="text-h5">Detalji opažanja</h1>
    <p>Ovdje će biti prikaz pojedinog opažanja.</p>
    <p>Detalji zapažanja 1.</p>
    <p>ID opažanja: {{ route.params.id }}</p>
  </q-page>

  </q-page>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>
