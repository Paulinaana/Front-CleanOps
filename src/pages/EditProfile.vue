<template>
  <div class="q-pa-md bg-image">
    <q-page class="flex flex-center">
     <q-card class="my-card" style="width:fit-content; min-width:600px; max-width: 1200px;">
      <q-section>
        <div class="row justify-center q-pa-sm">
          <q-text class="text-h4">Modificar perfil</q-text>
        </div>
        <div class="row justify-center q-pa-md">
          <q-img
            alt="profilepicture"
            src="~assets/assets_profilepicture.png"
            style="width: 200px; height: 200px "
          />
        </div>
      </q-section>
      <q-separator/>
      <q-card-section>
        <div class="row justify-center q-py-md">
          <div class="col.4">
            <q-input v-model="userCedula" label="Cedula"/>
          </div>
        </div>

        <div class="row justify-center q-py-md">
          <div class="col justify-center q-px-md">
            <q-input v-model="userNombre" label="Nombre" />
          </div>
          <div class="col justify-center q-px-md">
            <q-input v-model="userApellido" label="Apellido" />
          </div>
        </div>

        <div class="row justify-center q-py-md">
          <div class="col justify-center q-px-md">
            <q-input v-model="userCorreo" label="Correo" />
          </div>
          <div class="col justify-center q-px-md">
            <q-input v-model="userTelefono" label="Telefono" />
          </div>
        </div>

        <div class="row justify-center q-py-md">
          <div class="col justify-center q-px-md">
            <q-input v-model="userDireccion" label="Dirección" />
          </div>
        </div>

        <div class="row justify-center q-py-md">
          <div class="col.4">
            <div class="q-pa-md">
              <q-input v-model="userFnac" mask="date" :rules="['date']">
                <template v-slot:before>
                  <q-label class="text-subtitle1 q-px-sm">Fecha de nacimiento</q-label>
                </template>
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                      <q-date v-model="userFnac">
                        <div class="row items-center justify-end">
                          <q-btn v-close-popup label="Close" color="primary" flat />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
          </div>
        </div>

      </q-card-section>

      <q-separator/>
      <q-card-section>
        <div class="row justify-end q-py-md">
          <div class="col-md-3">
            <q-btn class="btn-fixed-width q-px-md" color="secondary" label="Guardar" icon="save" to="/supervisor"/>
          </div>
          <div class="col-md-3">
            <q-btn class="btn-fixed-width q-px-md" color="secondary" label="Volver" icon="cancel" to="/supervisor"/>
          </div>
        </div>
      </q-card-section>
     </q-card>
    </q-page>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import {ref} from 'vue'

export default defineComponent({
  name: 'EditProfile',
  data(){
    return{
      userCedula: '',
      userNombre: '',
      userApellido: '',
      userCorreo: '',
      userTelefono: '',
      userDireccion: '',
      userFnac: ref('2000/01/01')
    }

  }
})
</script>