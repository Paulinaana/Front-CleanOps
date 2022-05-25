<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn icon="menu"  rounded flat @click="toggleLeftDrawer"/>
        <q-space />
        <q-btn icon="logout"  rounded flat />
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" show-if-above rounded class="shadow-3 qdrawer">
      <div>
        <q-img src="~assets/assetsv0.2/Logo.svg" style="height: 150px"> </q-img>
      </div>
      <div class="q-pa-md" style="max-width: 300px">
        <q-list bordered padding class="rounded-borders text-primary bg-white">
          <q-item>
            <div class="row">
              <div class="hearditem"><img class="imgheard" src="~assets/Wilder.jpg"  style="height:50px; width:50px"/></div>
              <div><q-item-label> Jefe de operaciones </q-item-label>
              <q-item-label caption>Wilder Pérez</q-item-label></div>
            </div>
          </q-item>
          <q-item clickable class="menu">
            <q-item-section avatar>
              <q-icon name="person" />
            </q-item-section>
            <q-item-section>Perfil</q-item-section>
          </q-item>
          <q-item clickable class="menu">
            <q-item-section avatar>
              <q-icon name="add_circle" />
            </q-item-section>
            <q-item-section>Crear orden</q-item-section>
          </q-item>
          <q-item clickable class="menu">
            <q-item-section avatar>
              <q-icon name="history" />
            </q-item-section>
            <q-item-section>Buscar ordenes</q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<style lang="scss">
.menu:hover {
  color: white;
  background: $secondary;
}
.qdrawer {
  background: linear-gradient($grey-9, $grey-10);
}
.hearditem{
  padding-right: 10px;
}
.imgheard{
  border-radius:5px;
  border-width: 3px;
  border-style: solid;
  border-color: $secondary;
}
</style>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "OperationCheif",

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
