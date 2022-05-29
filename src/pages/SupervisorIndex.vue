<template>
  <div class="q-pa-md bg-image">
    <q-page class="flex flex-center">
     <q-card class="my-card"
     style="width: 300px; height: 500px">
      <q-card-section>
        <div class="q-pa-md center">
          <q-img
            alt="profilepicture"
            src="~assets/assets_profilepicture.png"
            style="align:center; height: 150px "
          />
        </div>
      </q-card-section>
      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="mode_edit"
          class="absolute"
          to="/supervisor/profile"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap justify-center">
          <div class="text-h6 ellipsis">
             Fulano Detal
          </div>
        </div>

        
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-body2 text-center">
          CleanOps es una herramienta en línea para la gestión de mantenimiento.
        </div>
        <div class="text-body2 text-center">
          Actualmente te encuentras<br>en el portal del supervisor.
        </div>
        <div class="text-body2 text-center">
          Pulsa la tecla menú, o selecciona una opción para comenzar.
        </div>
      </q-card-section>

      <q-card-section>
        <div class="row justify-center">
          <q-btn-dropdown color="primary" label="Acceso rápido">
            <q-list>

              <q-item clickable v-close-popup @click="onItemClick" to="/supervisor/users">
                <q-item-section 
                avatar>
                  <q-icon name="engineering" />
                  <q-item-label>Gestionar usuarios</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick" to="/supervisor/areas">
                <q-item-section 
                avatar>
                  <q-icon name="add_home" />
                  <q-item-label>Gestionar Areas</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </q-card-section>  
    </q-card>
    </q-page>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SupervisorIndex'
})
</script>

