<template>
  <div class="grid md:grid-cols-2 gap-4">
    <div class="w-full bg-white rounded-lg border border-gray-200 shadow-md">
      <a href="#">
        <img class="rounded-t-lg" src="../../assets/image.jpg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {{ cliente.nombre }} {{ cliente.apellido_paterno }}
            {{ cliente.apellido_materno }}
          </h5>
        </a>
      </div>
    </div>

  <div class="p-4 w-full bg-white rounded-lg border shadow-md sm:p-8">
    <div class="flex justify-between items-center mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 ">Detalles del cliente</h5>
        
   </div>
   <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 ">

            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate ">
                            Saldo actual
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                        ${{cliente.saldo_actual}}
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate ">
                            Nombre de la cuenta
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                        {{cliente.nombre_cuenta}}
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate ">
                            RFC
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                        {{cliente.rfc}}
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate ">
                            CURP
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                        {{cliente.curp}}
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate ">
                            Fecha de alta
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                        {{cliente.fecha_alta}}
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate ">
                            Fecha de contratacion
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                        {{cliente.fecha_contratacion}}
                    </div>
                </div>
            </li>
            <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate ">
                            Ultimo movimiento
                        </p>
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 ">
                        {{cliente.fecha_ultimo_movimiento}}
                    </div>
                </div>
            </li>
 
        </ul>
   </div>
</div>

  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cliente: {},
    };
  },
  created: function () {
    this.obtenerCliente();
  },
  methods: {
    obtenerCliente() {
      const url = `http://localhost:3000/api/clientes/detalle/${this.$route.params.id}`;
      fetch(url)
        .then((respuesta) => respuesta.json())
        .then((datosCliente) => {
          console.log(datosCliente);
          this.cliente = datosCliente;
        });
    },
  },
};
</script>

<style>
</style>