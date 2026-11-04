<script setup>
defineProps({ student: { type: Object, required: true } })
</script>

<template>
  <router-link :to="`/etudiant/${student.id}`" class="card">
    <strong>{{ student.prenom }} {{ student.nom }}</strong>
    <span>{{ student.filiere }} · année {{ student.year }}</span>
  </router-link>
</template>

<style scoped>
.card {
  display: flex; justify-content: space-between;
  background: #fff; padding: 12px 16px; margin: 8px 0;
  border-radius: 8px; text-decoration: none; color: inherit;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
.card:hover { box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); }
</style>
