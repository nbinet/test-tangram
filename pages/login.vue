<template>
  <div class="form">
    <img :src="require(`/assets/images/tangram.png`)" />
    <v-select v-model="input.language_id" :items="languages" item-value="id" item-text="value" class="select"/>
    <v-text-field label="Email" outlined />
    <v-text-field label="Mot de passe" outlined />
    <img :src="require(`/assets/images/hcaptcha.png`)" class="captcha" />
    <NuxtLink class="my-4 link" to="/change-password">Mot de passe oublié ?</NuxtLink>
    <NuxtLink to="/home" width="100%"><v-btn width="100%">Connexion</v-btn></NuxtLink>
     <v-divider class="my-4"></v-divider>
    <v-btn class="deep-purple white--text">Connexion avec un compte Microsoft</v-btn>
  </div>
</template>

<script>
  export default {
    data: () => ({
      input: {
        language_id: 1,
      },
      languages: [
        {
          id: 1,
          value: "Fr",
        },
        {
          id: 2,
          value: "En",
        },
      ]
    }),
  }
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}
.select {
  width: min-content;
  align-self: center;
}
.captcha {
  height: 60px;
  width: fit-content;
}
.link {
  text-decoration: none;
}
.link:hover {
  text-decoration: underline;
}
</style>
