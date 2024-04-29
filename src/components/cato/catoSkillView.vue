<template>
  <v-card
    width="100%"
    @click="merge"
  >
    <v-row class="ma-1 text-subtitle-1">

      <!-- 技能名稱 -->
      <v-col cols="3">
        <v-tooltip location="left">
          <template v-slot:activator="{ props }">
            <span
              class="font-weight-bold"
              width="30px"
              v-bind="props"
            >
              {{ skill.name }}
            </span>
          </template>
          <span>{{ catoType.name }}</span>
        </v-tooltip>
      </v-col>

      <!-- 技能描述 -->
      <v-col cols="9">
        <span
          width="30px"
          style="white-space: pre-wrap;"
        >
          <!-- 將 content 依照上下引號位置，切割成 A + (B1 + C1) + (B2 + C2) + ... -->
          <!-- A -->
          <span>{{ header }}</span>

          <!-- B + C -->
          <span
            v-for="(item, index) in contentArray"
            :key="index"
          >
            <!-- B 部分 -->
            <span v-if="index % 2 === 0">
              「
              <v-tooltip
                location="left"
                v-if="item?.htmlDescription"
              >
                <template v-slot:activator="{ props }">
                  <span v-bind="props">
                    {{ item?.name }}
                  </span>
                </template>
                <span v-html="item?.htmlDescription"></span>
              </v-tooltip>
              <span v-else>{{ item?.name }}</span>
              」
            </span>
            <!-- C 部分 -->
            <span v-else>
              {{ item }}
            </span>
          </span>
        </span>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { ref, watch } from 'vue';
import nounDescription from '@/common/nounDescription';

const props = defineProps({
  skill: Object,
  catoType: Object,
  starNum: Number,
});

const emits = defineEmits([
  'merge'
]);

function merge() {
  emits('merge');
}


function getNormalSkill(skillinfo, rarity) {
  let index = 0;
  return skillinfo.description.replace(
    /{{}}/g, () => skillinfo.arguments[rarity][index++] || ''
  );
}

const skillDescription = nounDescription.catoEffect;
function getSkillDescription(name) {
  return skillDescription.find((item) => item.name === name) ?? { name, htmlDescription: "未知技能" }
}

const header = ref('');
const contentArray = ref([]);

watch(() => [props.skill, props.starNum], () => {
  const skillinfo = getNormalSkill(props.skill, props.starNum);
  const effectArray = skillinfo.split(/「|」/);

  header.value = effectArray.shift();
  contentArray.value = effectArray;
  for (let i = 0; i < contentArray.value.length; i += 2) {
    contentArray.value[i] = getSkillDescription(contentArray.value[i]);
  }

}, { immediate: true })



</script>

<style></style>
