<template>
  <div>
    <v-card max-width="600" class="mx-auto">
      <h1>Our Suppliers</h1>
      <v-list v-for="supplier in allSuppliers" :key="supplier.id" two-line>
        <template>
          <h5 class="ml-4 mb-3">Supplier name: {{ supplier.name }}</h5>
          <span class="ml-4">Joined:</span>
          <v-chip class="ma-2" calendar color="green" outlined>
            <v-icon left> mdi-calendar-check </v-icon>
            {{ supplier.created_at }}
          </v-chip>
        </template>
        <v-divider></v-divider>
      </v-list>
    </v-card>
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

<style scoped>
h1 {
  text-align: center;
}
</style>