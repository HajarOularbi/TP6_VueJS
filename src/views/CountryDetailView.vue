<template>
  <p class="loading" v-show="loading">Chargement...</p>
  <p class="error" v-if="error">{{ error }}</p>

  <div v-if="country">
    <img :src="country.flags.svg" :alt="`Drapeau ${country.name.common}`" style="width: 200px;" />
    <h1>{{ country.name.common }}</h1>
    <p>Nom officiel : {{ country.name.official }}</p>
    <p>Capitale : {{ country.capital ? country.capital[0] : '—' }}</p>
    <p>Région : {{ country.region }}</p>
    <p>Population : {{ country.population.toLocaleString() }}</p>
  </div>

  <button @click="$router.back()">Retour</button>
</template>

<script>
export default {
  name: 'CountryDetailView',
  data() {
    return {
      country: null,
      loading: true,
      error: null
    }
  },
  methods: {
    async chargerPays() {
      this.loading = true
      this.error = null
      try {
        const code = this.$route.params.code
        const url = `https://restcountries.com/v3.1/alpha/${code}?fields=name,flags,capital,region,subregion,population,languages,currencies,borders,cca3`
        const reponse = await fetch(url)
        if (!reponse.ok) throw new Error(`Erreur ${reponse.status}`)
        const data = await reponse.json()
        // objet unique ou tableau d'un seul élément : on gère les deux cas
        this.country = Array.isArray(data) ? data[0] : data
      } catch (e) {
        this.error = 'Impossible de charger ce pays.'
      } finally {
        this.loading = false
      }
    }
  },
  mounted() {
    this.chargerPays()
  }
}
</script>
