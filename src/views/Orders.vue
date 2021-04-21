<template>
  <div>
    <h1>Orders</h1>
    <div v-for="order in allOrders" :key="order.id">
      <p>{{ order.orderNumber }}</p>
    </div>
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
</style>