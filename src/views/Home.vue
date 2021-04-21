<template>
  <div class="container">
    <h3>Products available</h3>
    <div class="products">
      <v-card
        color="#41b883"
        v-for="product in allProducts"
        :key="product.id"
        elevation="2"
        outlined
      >
        <v-card-title class="text-h5">Name: {{ product.name }} </v-card-title>

        <v-card-subtitle
          >Description: {{ product.description }}</v-card-subtitle
        >

        <v-card-actions>
          <v-btn class="ml-2 mt-5" outlined rounded small>
            Quantity: {{ product.quantity }}</v-btn
          >
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    name: "Home",
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
