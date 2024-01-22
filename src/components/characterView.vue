<template>
  <div>

    <div class="ma-5">
      <v-row>
        <v-col :cols="selectedCharacter ? 7 : 12">
          <v-row>
            <!-- search text field -->
            <v-col cols="12">
              <v-row>
                <!-- character name -->
                <v-col cols="6" md="5" lg="4">
                  <v-text-field
                    label="角色名稱"
                    v-model="nameKeyword"
                    clearable
                    prepend-inner-icon="mdi-magnify">
                  </v-text-field>
                </v-col>

                <!-- character skill -->
                <v-col cols="6" md="5" lg="4">
                  <v-text-field
                    v-if="isSelfDefinedSkill"
                    label="技能敘述-其他"
                    v-model="skillKeyword"
                    clearable
                    prepend-inner-icon="mdi-magnify"
                    append-inner-icon="mdi-dots-horizontal"
                    @click:append-inner="changeSkillKeywordType">
                  </v-text-field>
                  <v-autocomplete
                    v-else
                    label="技能敘述"
                    v-model="skillKeyword"
                    prepend-inner-icon="mdi-magnify"
                    append-inner-icon="mdi-dots-horizontal"
                    :items="skillDescription"
                    item-value="name"
                    clearable
                    :item-props="(item) => {return {'title': item.name, 'subtitle': item.description}}"

                    @click:append-inner="changeSkillKeywordType"
                  >

                  </v-autocomplete>
                </v-col>
              </v-row>
            </v-col>

            <!-- attribute(color) -->
            <v-col cols="12" :md="selectedCharacter ? 12 : 'auto'" lg="auto">
              <v-btn-toggle
                v-model="attributeFilter"
                dark
                multiple>
                <v-btn v-for="(item) in attributeEnum"
                  @click="filter"
                  :key="item.id"
                  density="compact"
                  :class="`text-${item.color}`"
                >
                  <v-icon>mdi-circle-slice-8</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-col>

            <!-- particle(shape) -->
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

            <!-- rarity -->
            <v-col cols="12" :md="selectedCharacter ? 6 : 'auto'" :lg="selectedCharacter ? 3 : 'auto'">
              <v-btn-toggle
                v-model="rarityFilter"
                dark
                multiple>
                <v-btn v-for="(item, index) in rarityEnum"
                @click="filter"
                :key="index"
                :class="`text-${item.color}`"
                >
                {{ getObjKeys(rarityEnum, item) }}
                </v-btn>
              </v-btn-toggle>
            </v-col>
          </v-row>

          <!-- cards -->
          <v-row>
            <v-col v-for="(item, index) in characterList" :key="index" cols="auto">
              <character-card :character="item" v-on:select="characterSelected(item)"></character-card>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="5">
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

  const rarityEnum = commonEnum.rarity;
  const attributeEnum = commonEnum.attribute;
  const particleEnum = commonEnum.particle;
  const getObjKeys = enumRelated.getObjKeys;
  const skillDescription = commonEnum.skillDescription;

  const characterList = ref(character);
  const rarityFilter = ref([0, 1, 2]);
  const attributeFilter = ref([0, 1, 2, 3, 4]);
  const particleFilter = ref([0, 1, 2, 3]);
  const nameKeyword = ref("");
  const skillKeyword = ref("");

  function filter() {
    characterList.value = character.filter(
      (item) => {
        const results = [
          item.rarity === null || rarityFilter.value.find(rarity => item.rarity?.id === rarity) !== undefined,
          item.attribute === null || attributeFilter.value.find((attribute) => item.attribute?.id === attribute)  !== undefined,
          item.particle === null || particleFilter.value.find((particle) => item.particle?.id === particle)  !== undefined,
        ];

        return results.reduce(
          (result, cur) => result && cur, true
        );
      }
    );

    if(nameKeyword.value) {
      characterList.value = characterList.value.filter(
        (item) => {
          return item.name.indexOf(nameKeyword.value) !== -1
            || item.subname.indexOf(nameKeyword.value) !== -1;
        }
      );
    }

    if(skillKeyword.value) {
      characterList.value = characterList.value.filter(
        (item) => {
          return JSON.stringify(item.skills).indexOf(skillKeyword.value) !== -1
        }
      );
    }

  }

  const selectedCharacter = ref(null);
  function characterSelected(item) {
    selectedCharacter.value = item;
  }

  const isSelfDefinedSkill = ref(false);
  function changeSkillKeywordType() {
    skillKeyword.value = "";
    isSelfDefinedSkill.value = !isSelfDefinedSkill.value;
  }

  watch(() => [nameKeyword.value, skillKeyword.value], () => {
      filter()
    }, {deep: true})
</script>

<style>

</style>
