<template>
      <v-row>
        <!-- search text field -->
        <v-col cols="12">
          <v-row>
            <!-- character name -->
            <v-col cols="12" md="5">
              <v-text-field
                label="角色名稱"
                v-model="nameKeyword"
                clearable
                prepend-inner-icon="mdi-magnify">
              </v-text-field>
            </v-col>

            <!-- character skill -->
            <v-col cols="12" md="5">
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
        <v-col cols="12" md="auto" lg="auto">
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
        <v-col cols="12" md="auto" lg="auto">
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

</template>

<script setup>
  import { ref, watch } from 'vue';
  import enumRelated from '@/common/scriptFile/enumRelated'
  import commonEnum from '@/common/scriptFile/commonEnum'

  const emits = defineEmits(['filter'])

  const rarityEnum = commonEnum.rarity;
  const attributeEnum = commonEnum.attribute;
  const particleEnum = commonEnum.particle;
  const getObjKeys = enumRelated.getObjKeys;
  const skillDescription = commonEnum.skillDescription;


  const rarityFilter = ref([0, 1, 2]);
  const attributeFilter = ref([0, 1, 2, 3, 4]);
  const particleFilter = ref([0, 1, 2, 3]);

  const nameKeyword = ref("");
  const skillKeyword = ref("");

  function filter() {
    emits(
      'filter',
      nameKeyword.value,
      skillKeyword.value,
      rarityFilter.value,
      attributeFilter.value,
      particleFilter.value
    );
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
