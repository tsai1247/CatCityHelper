<template>
  <v-card class="ma-2" elevation="2" tile @click="characterSelected"
    :style="{userSelect: 'none'}">
    <v-sheet>
      <v-row class="fill-height" align="center" justify="center">
        <v-col>
          <v-card
            class="ma-2"
            width="140px"
            height="180px"
            theme="dark">
              <template v-slot:image>
                <v-img
                  v-if="characterImages[character.subname] !== null"
                  cover
                  dark
                  :style="{opacity: 0.4}"
                  :src="characterImages[character.subname]"
                  :lazy-src="lazyCharacterImages[character.subname]">

                </v-img>
                <v-img
                  v-else
                  :src="unknownImage"
                  :lazy-src="lazyUnknownImage"
                >
                </v-img>
              </template>
              <template v-slot:title>
                <v-row>
                  <v-col cols="8">
                    <span :class="character.name.length < 4 ? 'text-h5' : 'text-h6'">
                      {{ character.name }}
                    </span>
                  </v-col>

                  <v-col cols="4">
                    <span
                      class="float-right mr-1 text-subtitle-2 font-italic font-weight-black"
                      :class="`text-${character.rarity.textColor}`">
                      {{ character.rarity.name }}
                    </span>
                  </v-col>
                </v-row>
              </template>

              <v-card-text>
                <span :class="character.name.length < 4 ? 'text-subtitle-1' : 'text-subtitle-2'">
                  {{ character.subname }}
                </span>
              </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>
  </v-card>
</template>

<script setup>
  import images from "@/common/images";

  const characterImages = images.characterImages.normal;
  const lazyCharacterImages = images.characterImages.lazy;
  const { unknown: unknownImage, lazyUnknown: lazyUnknownImage } = images;

  defineProps({
    character: Object
  })

  const emits = defineEmits(['select'])

  function characterSelected(){
    emits('select');
  }
</script>

<style>

</style>
