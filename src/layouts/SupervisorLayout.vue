<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-btn
          flat
          dense
          round
          aria-label="Menu"
          to="/supervisor"
        >
          <template v-slot:default>
            <q-img
              alt="logo"
              src="~assets/logo.png"
              style="width: 64px; height: 64px">
            </q-img>
          </template>
        </q-btn>

      <q-toolbar-title>
          CleanOps - Módulo del Supervisor
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      behavior="mobile"
      elevated
    >
      <q-img
              alt="logo"
              src="~assets/broom_text.png"
              style="top: 16px; width: 100%; height: 100px">
      </q-img>
      <q-list>
        <div class="row justify-center">
          <q-item-label
            header
          >
            Navegador de acciones
          </q-item-label>
        </div>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Página principal',
    caption: 'Volver a la página de inicio',
    icon: 'home',
    link: '/supervisor'
  },
  {
    title: 'Configurar perfil',
    caption: 'Modificar datos del perfil',
    icon: 'account_circle',
    link: '/supervisor/profile'
  },
  {
    title: 'Gestionar usuarios',
    caption: 'Administrar los usuarios del sistema',
    icon: 'engineering',
    link: '/supervisor/users'
  },
  {
    title: 'Gestionar Areas',
    caption: 'Administrar las areas del sistema',
    icon: 'add_home',
    link: '/supervisor/areas'
  }
]

export default defineComponent({
  name: 'SupervisorLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
