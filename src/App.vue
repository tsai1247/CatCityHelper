<template>
  <v-app id="app">
    <v-app-bar
        color="primary"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="isexpended = !isexpended"></v-app-bar-nav-icon>
        <v-toolbar-title>貓之城圖鑑</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar>

    <v-navigation-drawer :rail="isexpended" permanent>
      <v-list-item prepend-icon="mdi-home" class="mt-2" title="首頁" link to="/CatCityHelper/Home"></v-list-item>
      <v-list-item prepend-icon="mdi-account" class="mt-2" title="角色圖鑑" link to="/CatCityHelper/Character"></v-list-item>
      <v-list-item prepend-icon="mdi-cat" class="mt-2" title="貓球圖鑑" link to="/CatCityHelper/Cato"></v-list-item>
      <v-list-item prepend-icon="mdi-history" class="mt-2" title="版本詳細資訊" link to="/CatCityHelper/VersionInfo"></v-list-item>
      <template v-slot:append>
        <div class="pa-2">
          <div v-if="isexpended" class="text-center">
            {{ latestCatCityVersion }}
          </div>
          <div v-else>
            <div>貓之城版本：{{ latestCatCityVersion }}</div>
            <div>圖鑑版本：{{ latestBookVersion }}</div>
          </div>
        </div>
      </template>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import version from '@/common/versions'

const bookVersionList = version.bookVersionList;
const catCityVersionList = version.catCityVersionList;
const latestBookVersion = computed(() => bookVersionList[0].version);
const latestCatCityVersion = computed(() => catCityVersionList[0].version);

const isexpended = ref(false);
watch(() => isexpended, () => {
  console.log(isexpended.value);
});

</script>
<style scoped>
</style>
