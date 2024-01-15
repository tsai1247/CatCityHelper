<template>
  <v-card class="ma-2" elevation="2" tile @click="characterSelected">
    <v-sheet>
      <v-row class="fill-height" align="center" justify="center">
        <v-col>
          <v-card
            class="ma-2"
            width="145px"
            height="180px"
            :image="`${characterImages[character.subname]}`"
            theme="dark">

              <template v-slot:title>
                <span>
                  {{ character.name }}
                </span>
                <span class="float-right mr-1 text-subtitle-2 font-italic">
                  {{ getObjKeys(levelEnum, character.level) }}
                </span>
              </template>

              <v-card-text>
                {{ character.subname }}
              </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>
  </v-card>
</template>

<script setup>
  import images from "@/common/images";

  import enumRelated from '@/common/scriptFile/enumRelated'
  import commonEnum from '@/common/scriptFile/commonEnum'

  const { characterImages } = images;
  const getObjKeys = enumRelated.getObjKeys;
  const levelEnum = commonEnum.level;

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
