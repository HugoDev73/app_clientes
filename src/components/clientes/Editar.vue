<template>

<h2 class="text-xl p-2 font-semibold">Actualizar cliente</h2>
  <form v-on:submit.prevent="actualizarCliente" class="p-5 grid gap-6 mb-6 md:grid-cols-2 bg-white rounded-lg shadow">
    <div>
      <label for="nombre" class="block mb-2 text-sm font-medium text-gray-900 uppercase">Nombre</label>
      <input v-model="cliente.nombre" type="text" id="nombre" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Hugo" required>
    </div>
    <div>
      <label for="apellido_paterno" class="block mb-2 text-sm font-medium text-gray-900 uppercase">Apellido Paterno</label>
      <input v-model="cliente.apellido_paterno" type="text" id="apellido_paterno" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="Hugo" required>
    </div>
   <div>
      <label for="apellido_materno" class="block mb-2 text-sm font-medium text-gray-900 uppercase">Apellido Materno</label>
      <input v-model="cliente.apellido_materno" type="text" id="apellido_materno" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="Hugo" required>
    </div>
    <div>
      <label for="rfc" class="block mb-2 text-sm font-medium text-gray-900 uppercase">RFC</label>
      <input v-model="cliente.rfc" type="text" id="rfc" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="MEGP010712U77" required>
    </div>
    <div>
      <label for="curp" class="block mb-2 text-sm font-medium text-gray-900 uppercase">CURP</label>
      <input v-model="cliente.curp" type="text" id="curp" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="MEGP010712HMNDRD07" required>
    </div>
   <div>
      <label for="fecha_alta" class="block mb-2 text-sm font-medium text-gray-900 uppercase">fecha de alta</label>
      <input disabled v-model="cliente.fecha_alta" type="text" id="fecha_alta" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="Hugo" required>
    </div>
    <div class="mb-5 p-2">
      <button type="submit" class="m-2 p-2 bg-green-600 text-white rounded">Actualizar</button>
      <router-link :to="{name: 'listar'}" class="m-2 p-2 border border-red-600 text-gray-900 rounded">Cancelar</router-link>
    </div>
  </form>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return {
      cliente: {}
    }
  },
  created:function(){
    this.obtenerCliente();
  },
  methods:{
    obtenerCliente() {
      const url = `http://localhost:3000/api/clientes/${this.$route.params.id}`;
        fetch(url)
        .then(respuesta => respuesta.json())
        .then((datosCliente) => {
          console.log(datosCliente);
          this.cliente = datosCliente;
        })
    },
    actualizarCliente(){
      const url = `http://localhost:3000/api/clientes/${this.$route.params.id}`;
      const datos = this.cliente
      let config = {
          headers: {
            "Content-Type": "application/json",
          },
        }
        axios.put(url, datos, config)
        .then((response) => {
          if(response.status==200){
            console.log(response)
            //window.location.href = 'http://127.0.0.1:5173/clientes'
            this.$router.push({path: '/clientes'})
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
}
</script>

<style>

</style>