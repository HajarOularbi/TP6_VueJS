import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', {
  // ancien data() (sauf newTask : brouillon du formulaire, reste local à TaskForm)
  state: () => ({
    tasks: [],
    loading: true,
    filtre: 'toutes'
  }),

  // anciennes computed
  getters: {
    tachesFiltrees(state) {
      if (state.filtre === 'actives') return state.tasks.filter(t => !t.done)
      if (state.filtre === 'terminees') return state.tasks.filter(t => t.done)
      return state.tasks
    },
    // fonction classique (pas fléchée) pour pouvoir utiliser `this`
    tachesTriees() {
      const ordre = { haute: 0, moyenne: 1, basse: 2 }
      // copie avant tri : on ne mute jamais le tableau reçu
      return [...this.tachesFiltrees].sort((a, b) => ordre[a.priority] - ordre[b.priority])
    },
    nombreRestantes: (state) => state.tasks.filter(t => !t.done).length
  },

  // anciennes methods + ancien mounted (chargement initial)
  actions: {
    ajouterTache(title, priority) {
      const id = Math.max(0, ...this.tasks.map(t => t.id)) + 1
      this.tasks.push({ id, title: title.trim(), priority, done: false })
    },
    basculerTache(task) {
      task.done = !task.done
    },
    supprimerTache(task) {
      this.tasks = this.tasks.filter(t => t.id !== task.id)
    },
    setFiltre(filtre) {
      this.filtre = filtre
    },
    charger() {
      this.loading = true
      setTimeout(() => {
        this.tasks = [
          { id: 1, title: 'Préparer le TD réseaux', priority: 'haute', done: false },
          { id: 2, title: 'Relire le rapport de stage', priority: 'moyenne', done: false },
          { id: 3, title: 'Ranger le bureau', priority: 'basse', done: true }
        ]
        this.loading = false
      }, 500)
    }
  }
})
