<template>
  <div class="pa-6">
    <h1>Orders</h1>
    <v-card
      elevation="2"
      outlined
      v-for="order in allOrders"
      :key="order.id"
      class="mt-2 card pa-4"
    >
      <div class="title-section">
        <h4>Order no: {{ order.orderNumber }}</h4>
        <v-chip class="ma-2" calendar color="green" outlined>
          <v-icon left> mdi-calendar-check </v-icon>
          {{ order.created_at }}
        </v-chip>
      </div>

      <v-card-actions>
        <!-- <v-btn class="ml-2 mt-5" outlined rounded small>
          Quantity: {{ product.quantity }}</v-btn
        > -->
        <p>Total ordered: {{ order.count }}</p>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Orders",
  components: {},
  methods: {
    ...mapActions(["fetchOrders"]),
  },
  computed: mapGetters(["allOrders"]),
  created() {
    this.fetchOrders();
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
.title-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: center;
}
</style>