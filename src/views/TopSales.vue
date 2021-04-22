<template>
  <div class="pa-2">
    <h1>
      Top Sales <v-icon color="red"> mdi-fire </v-icon>
      <v-icon color="red"> mdi-fire </v-icon>
    </h1>
    <v-card class="pa-3 card">
      <div v-for="sale in allSales" :key="sale.id">
        <p class="pt-3">Order NO: {{ sale.orderNumber }}</p>
        <v-chip class="ma-2" color="success" outlined>
          <v-icon left> mdi-fire </v-icon>
          Order count: {{ sale.count }}
        </v-chip>
        <v-divider class="mt-3"></v-divider>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TopOrders",
  computed: mapGetters(["allSales"]),
  methods: {
    ...mapActions(["fetchSales"]),
  },
  created() {
    this.fetchSales();
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
.card {
  max-width: 600px;
  margin: auto;
}
</style>