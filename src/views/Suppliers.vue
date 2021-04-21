<template>
  <div>
    <h1>Suppliers</h1>
    <div v-for="supplier in allSuppliers" :key="supplier.id">
      <p>{{ supplier.name }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Suppliers",
  methods: {
    ...mapActions(["fetchSuppliers"]),
  },
  computed: mapGetters(["allSuppliers"]),
  created() {
    this.fetchSuppliers();
  },
};
</script>

<style>
</style>