<template>
  <div class="parent">
    <div class="visitors">
      <p class="title">Liste de vos visiteurs :</p>
      <div class="visitors-flex">
        <div v-for="visitor in visitors" :key="visitor.id" class="visitor">
          <p>{{ visitor.name }}</p>
          <p>{{ visitor.surname }}</p>
          <p>{{ visitor.email }}</p>
          <p>{{ visitor.status }}</p>
          <div v-if="visitor.status === 'inscrit'" class="download" >téléchager</div>
        </div>
        <div class="add">+</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'connected',
  data: () => ({
    visitors: [
      {
        id: 1,
        name: "Nathan",
        surname: "Binet",
        email: "nathan.binet99@gmail.com",
        code: "14000",
        activities: [2],
        status: "inscrit",
      },
      {
        id: 2,
        name: "Marcel",
        surname: "Dupont",
        email: "marcel.dupont@gmail.com",
        code: "14700",
        activities: [1, 3],
        status: "non inscrit",
      },
    ],
    activities: [
      {
        id: 1,
        name: "activité 1",
        price: 0,
      },
      {
        id: 1,
        name: "activité 2",
        price: 0,
      },
      {
        id: 1,
        name: "activité 3",
        price: 10,
      }
    ]
  }),
}
</script>

<style scoped>
.parent {
  height: 100%;
  padding: 20px 50px;
  display: flex;
  gap: 20px;
}
.visitors-flex {
  display: flex;
  gap: 20px;
}
.visitor {
  border: solid #5C33AE;
  border-radius: 10px;
  padding: 10px 20px;
}
.add {
  height: auto;
  width: 200px;
  border: dashed #5C33AE;
  border-radius: 10px;
  color: #5C33AE;
  text-align: center;
  font-size: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 50%;
}
.add:hover {
  opacity: 100;
  cursor: pointer;
}
.download {
  color: #5C33AE;
  text-align: end;
}
.download:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
