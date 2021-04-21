<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> PikDrive </v-list-item-title>
          <v-list-item-subtitle> Just pick a ride </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title> PikDrive </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Products", icon: "mdi-view-dashboard", to: "/" },
      { title: "Orders", icon: "mdi-cart", to: "/orders" },
      { title: "Top sales", icon: "mdi-sale", to: "/top-sales" },
      { title: "Suppliers", icon: "mdi-car", to: "/suppliers" },
      // { title: "Product suppliers", icon: "mdi-help-box" },
    ],
  }),
};
</script>

<stylescoped>
body {
  background: #e8f7f0;
  color: red
}
</style>