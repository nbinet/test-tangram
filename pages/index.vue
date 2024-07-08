<template>
  <div class="form">
    <img :src="require(`/assets/images/tangram.png`)" />
    <NuxtLink to="/login" class="mt-4" width="100%"><v-btn width="100%">Connexion</v-btn></NuxtLink>
  </div>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}
</style>
