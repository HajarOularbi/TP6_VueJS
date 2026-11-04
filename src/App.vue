<template>
  <main class="app">
    <h1>Mini-annuaire d'étudiants</h1>
    <router-view />
  </main>
</template>

<style>
body { font-family: system-ui, sans-serif; background: #f4f5f7; margin: 0; }
.app { max-width: 720px; margin: 0 auto; padding: 24px 16px; }
input, select, button { padding: 8px; margin: 4px 4px 4px 0; font: inherit; }
</style>
