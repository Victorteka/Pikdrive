<template>
  <div class="container">
    <h3>Products available</h3>
    <div class="progress-bar" v-if="loading">
      <v-progress-circular
        :width="3"
        color="green"
        indeterminate
      ></v-progress-circular>
      <h5>Loading ...</h5>
    </div>
    <div class="products">
      <v-card
        elevation="2"
        color="#41b883"
        outlined
        class="card"
        v-for="product in allProducts"
        :key="product.id"
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
    components: {},
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    ...mapActions(["fetchProducts"]),
  },
  beforeCreate() {
    this.loading = true;
  },
  computed: mapGetters(["allProducts"]),
  created() {
    this.fetchProducts();
    this.loading = false;
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

.progress-bar {
  text-align: center;
  padding-top: 150px;
  color: #41b883;
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
