<template>
  <!-- 將 content 依照上下引號位置，切割成 A + (B1 + C1) + (B2 + C2) + ... -->
  <!-- A -->
  <span v-html="contentArray.header"></span>

  <!-- B + C -->
  <span
    v-for="(contentItem, contentIndex) in contentArray.content"
    :key="contentIndex"
  >
    <!-- B 部分 -->
    <span v-if="contentIndex % 2 === 0">
      「
      <v-tooltip
        location="left"
        v-if="contentItem?.htmlDescription || contentItem?.description"
      >
        <template v-slot:activator="{ props }">
          <span v-bind="props">
            {{ contentItem?.name }}
          </span>
        </template>
        <span v-html="contentItem?.htmlDescription || contentItem?.description"></span>
      </v-tooltip>
      <span v-else>{{ contentItem?.name }}</span>
      」
    </span>
    <!-- C 部分 -->
    <span v-else>
      {{ contentItem }}
    </span>
  </span>
</template>

<script setup>

import { ref, watch } from 'vue';
import nounDescription from '@/common/nounDescription';

const props = defineProps({
  content: String,
  rarity: {
    type: Number,
    default: 0
  },
  risingStar: Number,
});

const skillDescription = nounDescription.skillDescription;
function getSkillDescription(name) {
  const description = JSON.parse(JSON.stringify(skillDescription.find((item) => item.name === name) ?? { name, description: "未知技能" }));
  if (description.argument) {
    const status = { risingStar: props.risingStar, rarity: props.rarity };

    const argument = description.argument.filter((item) => {
      return (item.condition.risingStar === undefined || item.condition.risingStar.includes(status.risingStar))
        && (item.condition.rarity === undefined || item.condition.rarity.includes(status.rarity))
    }).map(item => item.value)
      .reduce((sum, cur) => {
        const result = [];
        cur.forEach((item, index) => {
          result.push(sum[index] || cur[index]);
        });
        return result;
      });


    let index = 0;
    description.description = description.description.replace(
      /{{}}/g, () => argument[index++] || ''
    );
  }

  return description;
}

const contentArray = ref({
  header: "",
  content: []
});

watch(() => [props.content, props.rarity, props.risingStar], () => {

  const array = props.content.split(/「|」/);
  contentArray.value.header = array.shift();

  contentArray.value.content = array;
  for (let i = 0; i < contentArray.value.content.length; i += 2) {
    contentArray.value.content[i] = getSkillDescription(contentArray.value.content[i]);
  }

}, { immediate: true })

</script>
