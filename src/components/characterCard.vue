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
            :image="`${characterImages[character.subname]}`"
            theme="dark">

              <template v-slot:title>
                <span :class="character.name.length < 4 ? 'text-h5' : 'text-subtitle-1'">
                  {{ character.name }}
                </span>
                <span
                  class="float-right ma-1 text-subtitle-2 font-italic font-weight-black"
                  :class="`text-${character.rarity.textColor}`">
                  {{ character.rarity.name }}
                </span>
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

  const { characterImages } = images;

  defineProps({
    character: Object
  })

  const emit = defineEmits(['select'])

  function characterSelected(){
    emit('select');
  }
</script>

<style>

</style>
