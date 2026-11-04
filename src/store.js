import { reactive } from 'vue'

export const store = reactive({
  students: [
    { id: 1, nom: 'Alaoui', prenom: 'Sara', filiere: 'IDIA', year: 2, email: 'sara.alaoui@example.com' },
    { id: 2, nom: 'Benani', prenom: 'Youssef', filiere: 'GIL', year: 3, email: 'youssef.benani@example.com' },
    { id: 3, nom: 'Idrissi', prenom: 'Hajar', filiere: 'GINF', year: 2, email: 'hajar.idrissi@example.com' },
    { id: 4, nom: 'Tazi', prenom: 'Omar', filiere: 'GSTR', year: 1, email: 'omar.tazi@example.com' },
  ],
})
