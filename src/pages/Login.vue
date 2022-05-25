<template>
  <q-layout>
    <q-page class="home row items-center justify-center">
      <q-card style="width: 300px; border-radius: 30px" class="shadow-3 qcard">
        <q-card-section>
          <q-avatar size="100px" class="absolute-center shadow-2">
            <img class="responsive" src="~assets/assetsv0.2/Logo.svg" />
          </q-avatar>
        </q-card-section>
        <q-card-section>
          <q-form @submit="onSubmit" class="q-gutterd-nd">
            <div class="q-pt-lg q-pb-sm" align="center">
              <img
                style="height: 70px; width: 300px"
                class="responsive"
                src="~assets/assetsv0.2/Text.svg"
              />
            </div>
            <q-input
              style="padding-bottom: 30px"
              rounded
              standout="bg-secondary text-white"
              v-model="lname"
              mask="#########"
              label="Nro de cedula"
              :rules="[
                (val) =>
                  (val !== null && val !== '') ||
                  'Porfavor ingrese una cedula valida.',

                (val) =>
                  (val.length >= 7 && val.length <= 9) ||
                  'La cedula tiene que ser de 7 a 9 digitos',
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
            </q-input>
            <q-input
              rounded
              standout="bg-secondary text-white"
              mask="NNNNNNNNN"
              :type="type_pwd"
              v-model="password"
              label="Contraseña"
              :rules="[
                (val) =>
                  (val !== null && val !== '') ||
                  'Porfavor ingrese una  contraseña valida.',
                (val) =>
                  (val.length >= 4 && val.length <= 9) ||
                  'La contraseña tiene que ser maximo de 4 a 8 caracteres',
              ]"
              ><template v-slot:prepend>
                <q-icon
                  :name="type_icon"
                  class="cursor-pointer icon"
                  @click="changeType"
                />
              </template>
            </q-input>
            <div class="row q-pa-md q-gutter-y-md justify-center">
              <q-btn
                label="acceder"
                style="width: 100px"
                push
                color="secondary"
                type="submit"
              />
            </div>
            <div class="text-center">
              <a href="/#">¿Olvidaste tu contraseña?</a>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-page>
  </q-layout>
</template>
<style lang="scss">
.qcard{
  background: linear-gradient(white, $grey-2);
}
.home {
  background: linear-gradient($MyBg2, $MyBg1);

}
.q-field--standout.q-field--highlighted .q-field__control {
  background: #ecebeb;
}
a {
  color: $secondary;
}
</style>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login-register",
  data() {
    return {
      lname: null,
      password: null,
      type_pwd: "password",
      type_icon: "visibility_off",
    };
  },
  methods: {
    onSubmit() {
      // const router = useRouter()
      if (this.lname === "11260200" && this.password === "V11260200") {
        window.open("/#/OperationCheif");
      } else {
        console.log("Fall");
      }
    },
    changeType() {
      this.type_pwd = this.type_pwd === "password" ? "text" : "password";
      this.type_icon =
        this.type_icon === "visibility_off" ? "visibility" : "visibility_off";
    },
  },
});
</script>
