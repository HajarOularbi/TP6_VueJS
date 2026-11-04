<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { store } from '../store'

const route = useRoute()

// route.params.id est une chaîne, les id du store sont des nombres
const student = computed(() =>
  store.students.find((s) => s.id === Number(route.params.id))
)
</script>

<template>
  <section v-if="student">
    <h2>{{ student.prenom }} {{ student.nom }}</h2>

    <div><label>Filière : <input v-model="student.filiere" /></label></div>
    <div><label>Année : <input v-model.number="student.year" type="number" min="1" max="5" /></label></div>
    <div><label>Email : <input v-model="student.email" type="email" /></label></div>

    <router-link to="/">← Retour à la liste</router-link>
  </section>

  <section v-else>
    <p>Étudiant introuvable.</p>
    <router-link to="/">← Retour à la liste</router-link>
  </section>
</template>
