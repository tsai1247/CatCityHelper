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

const versionbanner = Object.values(images.versionBanners).sort((a, b) => {
  const aVer = a.split("/").pop().split(".");
  const bVer = b.split("/").pop().split(".");

  for (const i in aVer) {
    if (aVer[i] != bVer[i]) return aVer[i] - bVer[i];
  }

});

</script>

<style scoped></style>
