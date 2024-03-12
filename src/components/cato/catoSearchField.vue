<template>
  <v-row>
    <!-- search text field -->
    <v-col cols="10" md="11">
      <v-row>
        <!-- cato name -->
        <v-col cols="12" :md="isExpanded ? 6 : 12">
          <v-text-field label="貓球名稱" v-model="nameKeyword" clearable prepend-inner-icon="mdi-magnify">
          </v-text-field>
        </v-col>

        <!-- cato skill -->
        <v-col cols="12" md="6" v-if="isExpanded">
          <v-text-field v-if="isSelfDefinedSkill" label="技能敘述-其他" v-model="skillKeyword" clearable prepend-inner-icon="mdi-magnify" append-inner-icon="mdi-dots-horizontal" @click:append-inner="changeSkillKeywordType">
          </v-text-field>
          <v-autocomplete v-else label="技能敘述" v-model="skillKeyword" prepend-inner-icon="mdi-magnify" append-inner-icon="mdi-dots-horizontal" :items="skillDescription" :item-value="item => `「${item.name}」`" clearable :item-props="(item) => { return { 'title': item.name, 'subtitle': item.description } }" @click:append-inner="changeSkillKeywordType">
          </v-autocomplete>
        </v-col>
      </v-row>
    </v-col>

    <!-- expand button -->
    <v-col cols="2" md="1">
      <v-tooltip location="left">
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
        <!-- cato type -->
        <v-col cols="12" md="auto" lg="auto">
          <v-btn-toggle v-model="catoTypeFilter" dark variant="outlined" divided multiple>
            <template v-for="(item) in catoTypeEnum">
              <v-btn v-for="(catoType) in item" @click="filter" :key="catoType.id" density="compact">
                <v-icon size="x-large">
                  <v-img :src="catoType.icon">
                  </v-img>
                </v-icon>
              </v-btn>
            </template>
          </v-btn-toggle>
        </v-col>


        <!-- rarity -->
        <v-col cols="12" md="auto" lg="auto">
          <v-btn-toggle v-model="rarityFilter" dark variant="outlined" divided multiple>
            <v-btn v-for="(item, index) in rarityEnum" @click="filter" :key="index" :class="`text-${item.color}`">
              <v-img width="45px" height="30px" :src="item.icon">
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

const catoTypeEnum = commonEnum.catoType;
const rarityEnum = commonEnum.rarity;
const skillDescription = nounDescription.catoEffect;


const catoTypeFilter = ref([]);
const rarityFilter = ref([]);

const nameKeyword = ref("");
const skillKeyword = ref("");

function filter() {
  emits(
    'filter',
    nameKeyword.value,
    skillKeyword.value,
    catoTypeFilter.value,
    rarityFilter.value,
  );
}

const isSelfDefinedSkill = ref(false);
function changeSkillKeywordType() {
  skillKeyword.value = "";
  isSelfDefinedSkill.value = !isSelfDefinedSkill.value;
}

watch(() => [nameKeyword.value, skillKeyword.value], () => {
  filter()
}, { deep: true })

const isExpanded = ref(true);
onMounted(() => {
  isExpanded.value = localStorage.searchFieldExpanded === 'true';
})

function changeExpand() {
  isExpanded.value = !isExpanded.value;
  localStorage.searchFieldExpanded = isExpanded.value;
}

</script>

<style></style>
