# Vuetify2-toast

## Usage

``` js
import Vue from "vue"
import Toast2 from "vuetify2-toast"

Vue.use(Toast2)
```

App.vue
``` vue
<template>
   <v-app>
      <vue-toast-group name="default">
   </v-app>
</template>
```

** name: this is your optional name to install an element that allows you to use $toast. Yes you can get more by specifying different names **
** View more prop in https://vuetifyjs.com/en/api/v-snackbar **

``` js
export default {
   methods: {
      showToast() {
         this.$toast.success("default", "Hello success toast")
         /// or
         this.$toast.success("default", {
            $text: "Hello success toast",
            /// option for component view in: https://vuetifyjs.com/en/api/v-snackbar
            /// the option here overrides the options at <vue-toast-group />
         })
      }
   }
}
```