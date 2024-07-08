<template>
  <v-app>
    <v-main>
      <v-row class="parent" no-gutters>
        <v-col md="6" class="d-none d-md-flex overflow-hidden">
          <img :src="require(`/assets/images/bg.png`)" />
        </v-col>
        <v-col cols="12" md="6" class="loginParent">
          <Nuxt />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style scoped>
.parent {
  height: 100vh;
  overflow: hidden;
}
.loginParent {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
