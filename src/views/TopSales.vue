<template>
  <div>
    <h1>Top Sales</h1>
    <div v-for="sale in allSales" :key="sale.id">
      <p>{{ sale.orderNumber }}</p>
    </div>
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

<style>
</style>