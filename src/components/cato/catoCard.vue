<template>
  <v-card class="ma-2" elevation="2" tile @click="catoSelected" :style="{ userSelect: 'none' }">
    <v-sheet>
      <v-row class="fill-height" align="center" justify="center">
        <v-col>
          <v-card class="ma-2" width="140px" height="140px" theme="dark">
            <template v-slot:image>
              <v-img cover dark :style="{ opacity: 0.4 }" :src="catoImages[cato.rarity.name][cato.name]">
              </v-img>
            </template>
            <template v-slot:title>
              <v-row>
                <v-col cols="8">
                  <span :class="cato.name.length < 4 ? 'text-h5' : 'text-h6'">
                    {{ cato.name }}
                  </span>
                </v-col>

                <v-col cols="4">
                  <span class="float-right mr-1 text-subtitle-2 font-italic font-weight-black" :class="`text-${cato.rarity.textColor}`">
                    {{ cato.rarity.name }}
                  </span>
                </v-col>
              </v-row>
            </template>
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>
  </v-card>
</template>

<script setup>
import images from "@/common/images";

const { catoImages } = images;

defineProps({
  cato: Object
});


const emits = defineEmits(['select']);

function catoSelected() {
  emits('select');
}
</script>

<style></style>
