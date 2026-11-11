<script setup>
import { ref, computed } from 'vue'
import { useTasksStore } from '../stores/tasks'

const store = useTasksStore()

// brouillon du formulaire : état purement local, inutile dans le store
const newTask = ref({ title: '', priority: 'moyenne' })

const formulaireValide = computed(() => newTask.value.title.trim() !== '')

function soumettre() {
  store.ajouterTache(newTask.value.title, newTask.value.priority)
  newTask.value = { title: '', priority: 'moyenne' }
}
</script>

<template>
  <form @submit.prevent="soumettre">
    <input v-model="newTask.title" placeholder="Nouvelle tâche" />
    <select v-model="newTask.priority">
      <option value="basse">Basse</option>
      <option value="moyenne">Moyenne</option>
      <option value="haute">Haute</option>
    </select>
    <button type="submit" :disabled="!formulaireValide">Ajouter</button>
  </form>
</template>
