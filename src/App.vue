<template>
<div class="container p-10">
  <h1 class="text-2xl font-bold text-gray-900 p-2 mb-6">
    Administracion de clientes
  </h1>
  <nav class="mb-6">
    <router-link class="p-2 bg-green-200 mr-5 rounded" to="/clientes"
      >Lista de clientes</router-link
    >
    <router-link class="p-2 bg-green-200 mr-5 rounded" to="/clientes/crear"
      >Crear nuevo cliente</router-link
    >
  </nav>
  <router-view />
</div>

</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
padding: 10px;
}
</style>
