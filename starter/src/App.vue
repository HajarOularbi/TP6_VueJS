<script setup>
import { onMounted } from 'vue'
import { useTasksStore } from './stores/tasks'
import TaskForm from './components/TaskForm.vue'
import TaskFilters from './components/TaskFilters.vue'
import TaskItem from './components/TaskItem.vue'

const store = useTasksStore()

onMounted(() => store.charger())
</script>

<template>
  <h1>Gestionnaire de tâches</h1>
  <p class="loading" v-show="store.loading">Chargement...</p>

  <TaskForm />
  <TaskFilters />

  <p>{{ store.nombreRestantes }} tâche(s) restante(s)</p>

  <TaskItem v-for="task in store.tachesTriees" :key="task.id" :task="task" />
</template>
