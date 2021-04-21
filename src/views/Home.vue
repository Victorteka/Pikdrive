<template>
  <div class="container">
    <h3>Products available</h3>
    <div class="products">
      <Card class="card" v-for="product in allProducts" :key="product.id">
        <v-card-title class="text-h5">Name: {{ product.name }} </v-card-title>

        <v-card-subtitle
          >Description: {{ product.description }}</v-card-subtitle
        >

        <v-card-actions>
          <v-btn class="ml-2 mt-5" outlined rounded small>
            Quantity: {{ product.quantity }}</v-btn
          >
        </v-card-actions>
      </Card>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Card from "../components/Card";

export default {
  name: "Home",
  components: {
    name: "Home",
    components: {
      Card,
    },
  },
  methods: {
    ...mapActions(["fetchProducts"]),
  },
  computed: mapGetters(["allProducts"]),
  created() {
    this.fetchProducts();
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
}
.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.card {
  background: #41b883;
  border-radius: 8px;
}
h3 {
  text-align: center;
  padding: 12px 0;
}
@media (max-width: 500px) {
  .products {
    grid-template-columns: 1fr;
  }
}
</style>
