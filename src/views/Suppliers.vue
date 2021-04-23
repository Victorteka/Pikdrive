<template>
  <div>
    <v-card max-width="600" class="mx-auto">
      <h1>Our Suppliers</h1>
      <div>
        <v-row justify="center">
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <div class="add-supplier float-right">
                <v-btn
                  class="absolute"
                  color="success mt-3 mb-3"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  Add supplier
                </v-btn>
              </div>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">Add Supplier</span>
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
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                  Close
                </v-btn>
                <v-btn color="blue darken-1" text @click="submit(name)">
                  Add supplier
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </div>
      <v-list v-for="supplier in allSuppliers" :key="supplier.id" two-line>
        <template>
          <h5 class="ml-4 mb-3">Supplier name: {{ supplier.name }}</h5>
          <span class="ml-4">Joined:</span>
          <v-chip class="ma-2" calendar color="green" outlined>
            <v-icon left> mdi-calendar-check </v-icon>
            {{ supplier.created_at | formatDate }}
          </v-chip>
        </template>
        <v-divider></v-divider>
      </v-list>
    </v-card>

    <div class="text-center">
      <v-snackbar color="success" v-model="snackbar" :timeout="timeout">
        {{ text }}

        <template v-slot:action="{ attrs }">
          <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Suppliers",
  data: () => ({
    dialog: false,
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 45) || "Name must be less than 10 characters",
    ],
    snackbar: false,
    text: "Supplier added",
    timeout: 2000,
  }),
  methods: {
    ...mapActions(["fetchSuppliers", "addSupplier"]),
    submit(name) {
      console.log(name);
      this.addSupplier({ name });
      this.dialog = false;
      this.snackbar = true;
    },
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
.add-supplier {
  display: flex;
  justify-content: right;
}
</style>