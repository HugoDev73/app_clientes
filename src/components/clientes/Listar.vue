<template>
  <div class="tabla">
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-800 uppercase bg-green-300">
          <tr>
            <th scope="col" class="py-3 px-6">Nombre</th>
            <th scope="col" class="py-3 px-6">Apellido Paterno</th>
            <th scope="col" class="py-3 px-6">Apellido Materno</th>
            <th scope="col" class="py-3 px-6">RFC</th>
            <th scope="col" class="py-3 px-6">CURP</th>
            <th scope="col" class="py-3 px-6">Fecha de Alta</th>
            <th scope="col" class="py-3 px-6">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="cliente in clientes"
            :key="cliente.id_cliente"
            class="bg-white border-b hover:bg-gray-50"
          >
            <td class="py-4 px-6">{{ cliente.nombre }}</td>
            <td class="py-4 px-6">{{ cliente.apellido_paterno }}</td>
            <td class="py-4 px-6">{{ cliente.apellido_materno }}</td>
            <td class="py-4 px-6">{{ cliente.rfc }}</td>
            <td class="py-4 px-6">{{ cliente.curp }}</td>
            <td class="py-4 px-6">{{ cliente.fecha_alta }}</td>
            <td class="py-4 px-6">
              <router-link
                :to="{
                  name: 'detalle_cliente',
                  params: { id: cliente.id_cliente },
                }"
                class="p-2 m-2 bg-green-600 text-white rounded"
                >Ver</router-link
              >
              <router-link
                :to="{
                  name: 'actualizar_cliente',
                  params: { id: cliente.id_cliente },
                }"
                class="p-2 m-2 bg-blue-600 text-white rounded"
                >Editar</router-link
              >
              <button
                v-on:click="eliminarCliente(cliente.id_cliente)"
                class="p-2 m-2 bg-red-600 text-white rounded"
              >
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      clientes: [],
      mensaje: "",
    };
  },
  created: function () {
    this.obtenerEmpleados();
  },
  methods: {
    obtenerEmpleados() {
      fetch("http://localhost:3000/api/clientes")
        .then((respuesta) => respuesta.json())
        .then((datosRespuesta) => {
          console.log(datosRespuesta);
          this.clientes = [];
          if (typeof datosRespuesta[0].succes === "undefined") {
            this.clientes = datosRespuesta;
          }
        })
        .catch(console.log);
    },
    eliminarCliente(id) {
      console.log(id);
      const url = `http://localhost:3000/api/clientes/${id}`;
      if (id) {
        axios
          .delete(url)
          .then((response) => {
            console.log(response.data.message);
            this.obtenerEmpleados();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
</style>