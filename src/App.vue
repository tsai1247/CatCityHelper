<template>
  <v-app id="app">
    <v-app-bar
        color="primary"
        prominent
      >
        <v-app-bar-nav-icon variant="text" link to="/CatCityHelper">
          <v-icon>mdi-cat</v-icon>
        </v-app-bar-nav-icon>
        <v-toolbar-title>貓之城圖鑑</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar>

      <v-navigation-drawer expand-on-hover rail permanent>
        <v-list-item prepend-icon="mdi-account" class="mt-2" title="角色圖鑑" link to="/Character"></v-list-item>
        <v-list-item prepend-icon="mdi-cat" class="mt-2" title="貓球圖鑑" link to="/Cato"></v-list-item>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
</script>
<style scoped>
</style>
