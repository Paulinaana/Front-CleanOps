<template>
  <div class="q-pa-md bg-image">
    <q-page class="flex flex-center">
     <q-card class="my-card" style="width:fit-content; min-width:600px; max-width: 1200px;">
      <q-section>
        <div class="row justify-center q-pa-sm">
          <q-text class="text-h4">Modificar área de servicio</q-text>
        </div>
        <div class="row justify-center q-pa-md">
          <q-icon
            alt="area"
            name="home_work"
            size="200px"
          />
        </div>
      </q-section>
      <q-separator/>
      <q-card-section>
        <div class="row justify-left q-py-md">
          <div class="col-6s justify-center q-px-md">
            <q-input v-model="areaCodigo" label="Código"/>
          </div>
        </div>

        <div class="row justify-center q-py-md">
          <div  style="width: 95%; max-width: 1000px">
            <q-input
              v-model="areaDesc"
              label="Descripción"
              autogrow
              outlined
            />
          </div>
        </div>

        <div class="row justify-center q-py-md">
          <div  style="width: 95%; max-width: 1000px">
            <q-input
              v-model="areaSector"
              outlined
              autogrow
              label="Sector"
            />
          </div>
        </div>

      </q-card-section>

      <q-separator/>
      <q-card-section>
        <div class="row justify-end q-py-md">
          <div class="col-md-3">
            <q-btn class="btn-fixed-width q-px-md" color="secondary" label="Guardar" icon="save" to="/supervisor/areas"/>
          </div>
          <div class="col-md-3">
            <q-btn class="btn-fixed-width q-px-md" color="secondary" label="Volver" icon="cancel" to="/supervisor/areas"/>
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
  name: 'SupervisorUserProfile',
  data(){
    return{
      areaCodigo: '',
      areaDesc: '',
      areaSector: '',
    }

  }
})
</script>