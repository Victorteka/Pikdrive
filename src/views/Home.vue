<template>
  <div class="container">
    <h3>Products available</h3>
    <!-- loading progressbar  -->
    <div class="progress-bar" v-if="loading">
      <v-progress-circular
        :width="3"
        color="green"
        indeterminate
      ></v-progress-circular>
      <h5>Loading ...</h5>
    </div>
    <!-- product card  -->
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
    <!-- fab  -->
    <v-btn
      color="pink"
      fab
      dark
      medium
      absolute
      bottom
      fixed
      right
      class="mb-12 mr-8"
      @click="showProductForm"
      ><v-icon>mdi-plus</v-icon></v-btn
    >
    <!-- product modal form  -->
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Create new product</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="name"
                :counter="45"
                :rules="nameRules"
                label="Name"
                required
              ></v-text-field>
              <v-text-field
                v-model="description"
                :counter="45"
                :rules="descriptionRules"
                label="Description"
                required
              ></v-text-field>
              <v-text-field
                v-model="quantity"
                :counter="4"
                :rules="quantityRules"
                label="Quantity"
                type="number"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="submitProduct(name, description, quantity)"
            >
              Create order
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {},

  data() {
    return {
      loading: false,
      dialog: false,
      valid: true,
      name: "",
      description: "",
      quantity: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 45) || "Name must be less than 10 characters",
      ],
      descriptionRules: [
        (v) => !!v || "Description is required",
        (v) => (v && v.length <= 45) || "Name must be less than 10 characters",
      ],
      quantityRules: [
        (v) => !!v || "Quantity is required",
        (v) => (v && v.length <= 45) || "Name must be less than 10 characters",
      ],
    };
  },

  methods: {
    ...mapActions(["fetchProducts", "postProducts"]),
    showProductForm() {
      this.dialog = true;
    },
    submitProduct(name, description, quantity) {
      console.log({ name, description, quantity });
      this.postProducts({ name, description, quantity });
      this.dialog = false;
    },
  },

  beforeCreate() {
    this.loading = true;
  },

  computed: { ...mapGetters(["allProducts"]) },

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
