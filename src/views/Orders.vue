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
          {{ order.created_at | formatDate }}
        </v-chip>
      </div>

      <div>
        <p class="pt-2">Total ordered: {{ order.count }}</p>
        <v-chip
          class="mt-2"
          close-icon="mdi-delete"
          color="red"
          text-color="white"
          @click="onDelete(order.id)"
        >
          Delete order
          <v-icon right> mdi-delete </v-icon>
        </v-chip>
      </div>
    </v-card>

    <div class="text-center">
      <v-snackbar color="red" v-model="snackbar" :timeout="timeout">
        {{ text }}

        <template v-slot:action="{ attrs }">
          <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
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
      @click="showAddQualityForm"
      ><v-icon>mdi-plus</v-icon></v-btn
    >
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Create new order</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="name"
                :counter="45"
                :rules="nameRules"
                label="Item name"
                required
              ></v-text-field>
              <v-text-field
                v-model="description"
                :counter="45"
                :rules="descriptionRules"
                label="Item ID"
                type="number"
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
              @click="submit(name, description, quantity)"
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
  name: "Orders",
  components: {},
  data() {
    return {
      dialog: false,
      snackbar: false,
      text: "Order Deleted",
      timeout: 2000,
      valid: true,
      name: "",
      description: "",
      quantity: "",
      nameRules: [
        (v) => !!v || "Name is required",
        // (v) => (v && v.length <= 45) || "Name must be less than 10 characters",
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
    ...mapActions(["fetchOrders", "deleteOrder", "postOrder"]),
    onDelete(id) {
      if (confirm("Are you sure?")) {
        console.log("" + id);
        this.deleteOrder(id);
      }
      this.snackbar = true;
      this.dialog = true;
    },
    confirmDelete(id) {
      if (confirm()) {
        console.log("" + id);
      }
    },
    showAddQualityForm() {
      this.dialog = true;
    },
    submit(name, descriptionInput, quantityInput) {
      const quantity = parseInt(quantityInput);
      const description = parseInt(descriptionInput);
      const order = {
        items: name,
        "items.*.id": description,
        "items.*.quantity": quantity,
      };
      console.log(order);
      this.postOrder(order);
    },
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