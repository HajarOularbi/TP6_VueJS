<script setup>
import { ref, computed } from 'vue'
import { store } from '../store'
import StudentCard from '../components/StudentCard.vue'

// Formulaire d'ajout
const nom = ref('')
const prenom = ref('')
const filiere = ref('')
const year = ref(1)
const email = ref('')

// Recherche et tri
const recherche = ref('')
const tri = ref('nom') // 'nom' ou 'filiere'

function ajouterEtudiant() {
  if (!nom.value.trim() || !prenom.value.trim()) return // validation
  const nextId = store.students.reduce((max, s) => Math.max(max, s.id), 0) + 1
  store.students.push({
    id: nextId,
    nom: nom.value.trim(),
    prenom: prenom.value.trim(),
    filiere: filiere.value.trim(),
    year: Number(year.value),
    email: email.value.trim(),
  })
  nom.value = ''
  prenom.value = ''
  filiere.value = ''
  email.value = ''
  year.value = 1
}

// Filtrer puis trier (sur une copie : on ne mute pas le store)
const etudiantsAffiches = computed(() => {
  const q = recherche.value.trim().toLowerCase()
  const filtres = store.students.filter((s) =>
    `${s.nom} ${s.prenom}`.toLowerCase().includes(q)
  )
  return [...filtres].sort((a, b) =>
    String(a[tri.value]).localeCompare(String(b[tri.value]))
  )
})
</script>

<template>
  <section>
    <form @submit.prevent="ajouterEtudiant">
      <input v-model="nom" placeholder="Nom" />
      <input v-model="prenom" placeholder="Prénom" />
      <input v-model="filiere" placeholder="Filière" />
      <input v-model.number="year" type="number" min="1" max="5" />
      <input v-model="email" type="email" placeholder="Email" />
      <button type="submit">Ajouter</button>
    </form>

    <div class="toolbar">
      <input v-model="recherche" placeholder="Rechercher par nom ou prénom" />
      <select v-model="tri">
        <option value="nom">Trier par nom</option>
        <option value="filiere">Trier par filière</option>
      </select>
    </div>

    <StudentCard v-for="s in etudiantsAffiches" :key="s.id" :student="s" />
    <p v-if="etudiantsAffiches.length === 0">Aucun étudiant trouvé.</p>
  </section>
</template>
