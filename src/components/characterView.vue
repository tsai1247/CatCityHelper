<template>
  <div>

    <div class="ma-5">
      <v-row>
        <v-col :cols="selectedCharacter ? 8 : 12">
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="keyword"
                clearable
                prepend-inner-icon="mdi-magnify">

              </v-text-field>
            </v-col>
            <v-col cols="12" :md="selectedCharacter ? 12 : 'auto'" lg="auto">
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
            <v-col cols="12" md="auto" lg="auto">
              <v-btn-toggle
                v-model="particleFilter"
                dark
                multiple>
                <v-btn v-for="(item) in particleEnum"
                  @click="filter"
                  :key="item.id"
                  density="compact"
                >
                  <v-icon>{{ item.icon }}</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-col>
            <v-col cols="12" :md="selectedCharacter ? 6 : 'auto'" :lg="selectedCharacter ? 3 : 'auto'">
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
              <character-card :character="item" v-on:select="characterSelected(item)"></character-card>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="4">
          <character-info :character="selectedCharacter" v-on:close-dialog="characterSelected(null)"></character-info>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
  import { ref, watch } from 'vue';
  import character from '@/common/character';
  import enumRelated from '@/common/scriptFile/enumRelated'
  import commonEnum from '@/common/scriptFile/commonEnum'
  import characterInfo from "./characterInfo.vue"
  import characterCard from "./characterCard.vue"

  const levelEnum = commonEnum.level;
  const attributeEnum = commonEnum.attribute;
  const particleEnum = commonEnum.particle;
  const getObjKeys = enumRelated.getObjKeys;

  const characterList = ref(character);
  const levelFilter = ref([0, 1, 2]);
  const attributeFilter = ref([0, 1, 2, 3, 4]);
  const particleFilter = ref([0, 1, 2, 3]);
  const keyword = ref("");

  function filter() {
    characterList.value = character.filter(
      (item) => {
        const results = [
          item.level === null || levelFilter.value.find(level => item.level === level) !== undefined,
          item.attribute === null || attributeFilter.value.find((attribute) => item.attribute?.id === attribute)  !== undefined,
          item.particle === null || particleFilter.value.find((particle) => item.particle?.id === particle)  !== undefined
        ];


        return results.reduce(
          (result, cur) => result && cur, true
        );
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

  const selectedCharacter = ref(null);
  function characterSelected(item) {
    selectedCharacter.value = item;
  }


  watch(() => keyword.value, () => {
      filter()
    }, {deep: true})
</script>

<style>

</style>
