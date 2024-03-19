<template>
  <div>
    <v-row>
      <v-col
        v-for="(_, i) in 5"
        :key="i"
        cols="12"
        md="4"
      >
        <v-img
          :lazy-src="lazyVersionbanner[i]"
          :src="versionbanner[i]"
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import v1_1 from "@/assets/versionbanner/1.1.png"
import v1_2 from "@/assets/versionbanner/1.2.png"
import v1_3 from "@/assets/versionbanner/1.3.png"
import v1_4 from "@/assets/versionbanner/1.4.png"
import v1_5 from "@/assets/versionbanner/1.5.png"

import zv1_1 from "@/assets/versionbanner/lazy_1.1.png"
import zv1_2 from "@/assets/versionbanner/lazy_1.2.png"
import zv1_3 from "@/assets/versionbanner/lazy_1.3.png"
import zv1_4 from "@/assets/versionbanner/lazy_1.4.png"
import zv1_5 from "@/assets/versionbanner/lazy_1.5.png"

const versionbanner = [v1_1, v1_2, v1_3, v1_4, v1_5];
const lazyVersionbanner = [zv1_1, zv1_2, zv1_3, zv1_4, zv1_5];
</script>

<style scoped>

</style>
