<template>
  <div>

    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="keyword"
            clearable
            prepend-inner-icon="mdi-magnify">

          </v-text-field>
        </v-col>
        <v-col cols="12" sm="7" md="4">
          <v-btn-toggle
            v-model="attributeFilter"
            dark
            multiple>
            <v-btn v-for="(item) in attributeEnum"
              @click="filter"
              :key="item.id"
              density="compact"
            >
              <v-icon :color="item.color">mdi-circle-slice-8</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-col>
        <v-col cols="12" sm="5" md="4">
          <v-btn-toggle
            v-model="levelFilter"
            dark
            multiple>
            <v-btn v-for="(item, index) in levelEnum"
            @click="filter"
            :key="index"
            >
            {{ getObjKeys(levelEnum, item) }}
            </v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="(item) in characterList" :key="item.id" cols="auto">
          <v-card class="ma-2" elevation="2" tile>
            <v-sheet>
              <v-row class="fill-height" align="center" justify="center">
                <v-col>
                  <v-card
                    class="ma-2"
                    width="145px"
                    height="180px"
                    :image="item.image"

                    theme="dark"      >

                      <template v-slot:title>
                        <span>
                          {{ item.name }}
                        </span>
                        <span class="float-right mr-1 text-subtitle-2 font-italic">
                          {{ getObjKeys(levelEnum, item.level) }}
                        </span>
                      </template>

                      <v-card-text>
                        {{ item.subname }}
                      </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-sheet>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
  import { ref, watch } from 'vue';
  import character from '@/common/character';
  import enumRelated from '@/common/scriptFile/enumRelated'
  import commonEnum from '@/common/scriptFile/commonEnum'

  const levelEnum = commonEnum.level;
  const attributeEnum = commonEnum.attribute;
  const getObjKeys = enumRelated.getObjKeys;

  const characterList = ref(character);
  const levelFilter = ref([0, 1, 2]);
  const attributeFilter = ref([0, 1, 2, 3, 4]);
  const keyword = ref("");

  function filter() {
    characterList.value = character.filter(
      (item) => {
        const levelResult = levelFilter.value.find(level => item.level === level);
        const attributeResult = attributeFilter.value.find((attribute) => item.attribute?.id === attribute);
        return levelResult !== undefined && attributeResult !== undefined || item.attribute === undefined;
      }
    );

    if(keyword.value) {
      characterList.value = characterList.value.filter(
        (item) => {
          return item.name.indexOf(keyword.value) !== -1
            || item.subname.indexOf(keyword.value) !== -1;
        }
      );
    }

  }


  watch(() => keyword.value, () => {
      filter()
    }, {deep: true})
</script>

<style>

</style>
