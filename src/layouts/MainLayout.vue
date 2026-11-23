<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-grey-9 text-white">
      <q-toolbar>
        <q-btn flat dense round icon="menu" @click="drawer = !drawer" />
        <q-toolbar-title>FieldLog</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer" show-if-above bordered>
      <q-list>
        <q-item v-for="item in menu" :key="item.to"
                clickable :to="item.to" exact>
          <q-item-section>{{ item.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(false);

const menu = [
  { label: 'Početna', to: '/' },
  { label: 'Prijava', to: '/prijava' },
  { label: 'Registracija', to: '/registracija' },
  { label: 'Senzori', to: '/senzori' },
  { label: 'Novo opažanje', to: '/novo-opazanje' },
  { label: 'Moja opažanja', to: '/opazanja' },
  { label: 'Detalji opažanja', to: '/opazanje/1' },
  { label: 'Profil', to: '/profil' }
];
</script>
