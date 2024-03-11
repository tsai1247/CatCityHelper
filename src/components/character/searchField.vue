<template>
  <v-row>
    <!-- search text field -->
    <v-col cols="9" md="10">
      <v-row>
        <!-- character name -->
        <v-col cols="12" :md="isExpanded ? 6 : 12">
          <v-text-field
            label="角色名稱"
            v-model="nameKeyword"
            clearable
            prepend-inner-icon="mdi-magnify">
          </v-text-field>
        </v-col>

        <!-- character skill -->
        <v-col cols="12" md="6" v-if="isExpanded">
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
            :item-value="item => `「${item.name}」`"
            clearable
            :item-props="(item) => {return {'title': item.name, 'subtitle': item.description}}"

            @click:append-inner="changeSkillKeywordType"
          >
          </v-autocomplete>
        </v-col>
      </v-row>
    </v-col>

    <!-- expand button -->
    <v-col cols="3" md="2">
      <v-tooltip
        location="left"
      >
        <template v-slot:activator="{ props }">
          <div v-bind="props">
            <v-btn icon @click="changeExpand">
              <v-icon v-if="isExpanded">
                mdi-chevron-up
              </v-icon>
              <v-icon v-else>
                mdi-chevron-down
              </v-icon>
            </v-btn>
          </div>
        </template>
        <span v-if="isExpanded">收合搜尋欄</span>
        <span v-else>展開搜尋欄</span>
      </v-tooltip>
    </v-col>

    <v-col cols="12" v-if="isExpanded">
      <v-row>
        <!-- attribute(color) -->
        <v-col cols="12" md="auto" lg="auto">
          <v-btn-toggle
            v-model="attributeFilter"
            dark
            variant="outlined" divided
            multiple>
            <v-btn v-for="(item) in attributeEnum"
              @click="filter"
              :key="item.id"
              density="compact"
              :class="`text-${item.color}`"
            >
              <v-icon size="x-large"
                >
                <v-img
                  :src="item.icon"
                >
                </v-img>
              </v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-col>

        <!-- particle(shape) -->
        <v-col cols="12" md="auto" lg="auto">
          <v-btn-toggle
            v-model="particleFilter"
            dark
            variant="outlined" divided
            multiple>
            <v-btn v-for="(item) in particleEnum"
              @click="filter"
              :key="item.id"
              density="compact"
            >
              <v-icon size="x-large"
                >
                <v-img
                  :src="item.icon"
                >
                </v-img>
              </v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-col>

        <!-- rarity -->
        <v-col cols="12" md="auto" lg="auto">
          <v-btn-toggle
            v-model="rarityFilter"
            dark
            variant="outlined" divided
            multiple>
            <v-btn v-for="(item, index) in rarityEnum"
            @click="filter"
            :key="index"
            :class="`text-${item.color}`"
            >
              <v-img
                width="45px"
                height="30px"
                :src="item.icon"
              >
              </v-img>
            </v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
  import { onMounted, ref, watch } from 'vue';
  import commonEnum from '@/common/commonEnum'
  import nounDescription from '@/common/nounDescription';

  const emits = defineEmits(['filter'])

  const rarityEnum = commonEnum.rarity;
  const attributeEnum = commonEnum.attribute;
  const particleEnum = commonEnum.particle;
  const skillDescription = nounDescription.skillDescription;


  const attributeFilter = ref([]);
  const particleFilter = ref([]);
  const rarityFilter = ref([]);

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

  const isExpanded = ref(true);
  onMounted(() => {
    isExpanded.value = localStorage.searchFieldExpanded === 'true';
  })

  function changeExpand() {
    isExpanded.value = !isExpanded.value;
    localStorage.searchFieldExpanded = isExpanded.value;
  }

</script>

<style>

</style>
