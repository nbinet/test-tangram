<template>
  <div class="form">
    <img :src="require(`/assets/images/tangram.png`)" />
    <v-text-field label="Email" outlined />
    <v-text-field label="Mot de passe" outlined />
    <v-text-field label="Vérification du mot de passe" outlined />
    <NuxtLink to="/login" class="link">Retour login</NuxtLink>
    <v-btn class="mt-4">Changer le mot de passe</v-btn>
  </div>
</template>

<script>
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}
.link {
  text-decoration: none;
}
.link:hover {
  text-decoration: underline;
}
</style>
