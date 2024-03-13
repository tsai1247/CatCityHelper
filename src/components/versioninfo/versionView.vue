<template>
  <div>
    <v-tabs
      v-model="tabIndex"
      align-tabs="center"
    >
      <v-tab :value="0">圖鑑版本資訊</v-tab>
      <v-tab :value="1">貓之城版本資訊</v-tab>
    </v-tabs>
    <v-window v-model="tabIndex">
      <v-window-item
        :value="0"
      >
        <v-container fluid>
          <book-version-view></book-version-view>
        </v-container>
      </v-window-item>

      <v-window-item
        :value="1"
      >
        <v-container fluid>
          <cat-city-version-view></cat-city-version-view>
        </v-container>
      </v-window-item>
    </v-window>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import bookVersionView from './bookVersionView.vue';
import catCityVersionView from './catCityVersionView.vue';

const tabIndex = ref(1);

</script>

<style>

</style>
