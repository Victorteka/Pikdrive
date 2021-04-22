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

      <div>
        <!-- <v-btn class="ml-2 mt-5" outlined rounded small>
          Quantity: {{ product.quantity }}</v-btn
        > -->
        <p class="pt-2">Total ordered: {{ order.count }}</p>
        <v-chip
          class="mt-2"
          close-icon="mdi-delete"
          color="red"
          text-color="white"
        >
          Delete order
          <v-icon right> mdi-delete </v-icon>
        </v-chip>
      </div>
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
.order-bottom {
  display: flex;
}
.title-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: center;
}
</style>