<template>
  <div>
    <v-row>
      <v-col
        v-for="(banner, index) in versionbanner"
        :key="index"
        cols="12"
        md="4"
      >
        <v-img
          :lazy-src="banner"
          :src="banner"
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import images from "@/common/images";

const versionbanner = Object.values(images.versionBanners);

</script>

<style scoped>

</style>
