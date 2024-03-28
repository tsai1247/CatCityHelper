<template>
  <v-app id="app">
    <v-app-bar
        color="primary"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click.stop="expandSideBar"></v-app-bar-nav-icon>
        <v-toolbar-title>貓之城圖鑑</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar>

    <v-navigation-drawer
        v-model="isexpanded" permanents>
      <v-list-item prepend-icon="mdi-home" class="mt-2" title="首頁" link to="/Home"></v-list-item>
      <v-list-item prepend-icon="mdi-account" class="mt-2" title="角色圖鑑" link to="/Character"></v-list-item>
      <v-list-item prepend-icon="mdi-cat" class="mt-2" title="貓球圖鑑" link to="/Cato"></v-list-item>
      <v-list-item prepend-icon="mdi-home-group" class="mt-2" title="社團特訓" link to="/Club"></v-list-item>
      <v-list-item prepend-icon="mdi-history" class="mt-2" title="版本詳細資訊" link to="/VersionInfo"></v-list-item>
      <template v-slot:append>
        <div class="pa-2">
          <div>貓之城版本：{{ latestCatCityVersion }}</div>
          <div>圖鑑版本：{{ latestBookVersion }}</div>
        </div>
      </template>
    </v-navigation-drawer>
    <v-main>
      <new-version-dialog
        :latestBookVersion="bookVersionList[0]"
      >
      </new-version-dialog>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed } from 'vue';
import version from '@/common/versions'
import newVersionDialog from '@/components/newVersionDialog.vue'

const bookVersionList = version.bookVersionList;
const catCityVersionList = version.catCityVersionList;
const latestBookVersion = computed(() => bookVersionList[0].version);
const latestCatCityVersion = computed(() => catCityVersionList[0].version);

const isexpanded = ref(localStorage.sidebarExpanded && localStorage.sidebarExpanded === 'true');
function expandSideBar() {
  isexpanded.value = !isexpanded.value;
  localStorage.sidebarExpanded = isexpanded.value;
}

</script>
<style scoped>
</style>
