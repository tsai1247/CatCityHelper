<template>
  <v-footer absolute>
    <div class="mr-3">
      <span>貓之城圖鑑版本：</span>

      <v-tooltip
        location="top"
      >
        <template v-slot:activator="{ props }">
          <span v-bind="props">
            <v-chip @click="null">
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
            <v-chip @click="null">
              {{catCityVersionList[0].version}}
            </v-chip>
          </span>
        </template>
        <span>{{catCityVersionList[0].description}}</span>
      </v-tooltip>
    </div>
  </v-footer>
</template>

<script setup>
import version from '@/common/versions'

const bookVersionList = version.bookVersionList;
const catCityVersionList = version.catCityVersionList;

</script>

<style>

</style>
