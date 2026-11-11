<script setup>
import { useTasksStore } from '../stores/tasks'

const store = useTasksStore()
</script>

<template>
  <div class="tabs">
    <button :class="{ active: store.filtre === 'toutes' }" @click="store.filtre = 'toutes'">Toutes</button>
    <button :class="{ active: store.filtre === 'actives' }" @click="store.filtre = 'actives'">Actives</button>
    <button :class="{ active: store.filtre === 'terminees' }" @click="store.filtre = 'terminees'">Terminées</button>
  </div>
</template>
