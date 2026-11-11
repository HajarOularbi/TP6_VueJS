<script setup>
import { useTasksStore } from '../stores/tasks'

// seule donnée qui varie d'une instance à l'autre : la tâche -> props
defineProps({
  task: { type: Object, required: true }
})

// les actions, elles, viennent directement du store : pas de $emit
const store = useTasksStore()
</script>

<template>
  <div class="task" :class="{ done: task.done }">
    <input type="checkbox" :checked="task.done" @change="store.basculerTache(task)" />
    <span class="task-title">{{ task.title }}</span>
    <span class="priority" :class="'priority-' + task.priority">{{ task.priority }}</span>
    <button class="btn-delete" @click="store.supprimerTache(task)">Supprimer</button>
  </div>
</template>
