<template>
  <v-footer>
    <div class="mr-3">
      <span>貓之城圖鑑版本：</span>

      <v-tooltip
        location="top"
      >
        <template v-slot:activator="{ props }">
          <span v-bind="props">
            <v-chip @click="showVersionDialogWith('貓之城圖鑑版本', bookVersionList)">
              {{bookVersionList[0].version}}
            </v-chip>
          </span>
        </template>
        <span>{{bookVersionList[0].description}}</span>
      </v-tooltip>
    </div>
    <div class="mr-3">
      <span>貓之城當前版本：</span>
      <v-tooltip
        location="top"
      >
        <template v-slot:activator="{ props }">
          <span v-bind="props">
            <v-chip @click="showVersionDialogWith('貓之城當前版本', catCityVersionList)">
              {{catCityVersionList[0].version}}
            </v-chip>
          </span>
        </template>
        <span>{{catCityVersionList[0].description}}</span>
      </v-tooltip>
    </div>
  </v-footer>
  <version-dialog
    :show-dialog="showVersionDialog"
    :title="versionTitle"
    :list="versionList"
    v-on:close-dialog="showVersionDialog = !showVersionDialog">
  </version-dialog>
</template>

<script setup>
import { ref } from 'vue';
import version from '@/common/versions'
import versionDialog from './versionDialog.vue';

const bookVersionList = version.bookVersionList;
const catCityVersionList = version.catCityVersionList;

const showVersionDialog = ref(false);
const versionList = ref([]);
const versionTitle = ref("");
function showVersionDialogWith(title, list) {
  versionTitle.value = title
  versionList.value = list;
  showVersionDialog.value = !showVersionDialog.value;
}

</script>

<style>

</style>
