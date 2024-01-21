<template>
  <!-- Sp -->
  <v-row>
    <v-card width="100%" @click="merge">
      <v-row class="ma-1">

        <!-- 技能名稱 -->
        <v-col cols="3">
          <v-tooltip
            location="left"
          >
            <template v-slot:activator="{ props }">
              <span
                :class="skillColor"
                class="font-weight-bold"
                width="30px"
                v-bind="props">
                {{ name }}
              </span>
            </template>
            <span>{{ type }}</span>
          </v-tooltip>
        </v-col>

        <!-- 技能描述 -->
        <v-col cols="9">
          <span width="30px">
            <!-- 將 content 依照上下引號位置，切割成 A + (B1 + C1) + (B2 + C2) + ... -->
            <!-- A -->
            <span>{{header}}</span>

            <!-- B + C -->
            <span v-for="(item, index) in contentArray" :key="index">
              <!-- B 部分 -->
              <span v-if="index % 2 === 0">
                「
                <v-tooltip
                  location="left"
                >
                  <template v-slot:activator="{ props }">
                    <span
                        v-bind="props">
                      {{ item?.name }}
                    </span>
                  </template>
                  <span>{{ item?.description }}</span>
                </v-tooltip>
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
  </v-row>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import commonEnum from '@/common/scriptFile/commonEnum'

  const props = defineProps({
    name: String,
    type: String,
    level: {
      type: Number,
      default: 0
    },
    content: String,
  })

  const emits = defineEmits([
    'merge'
  ])

  function merge() {
    emits('merge');
  }

  const skillDescription = commonEnum.skillDescription;
  function getSkillDescription(name) {
    return skillDescription.find( (item) => item.name === name ) ?? {name, description: "未知技能"}
  }

  const header = ref('');
  const contentArray = ref([]);

  watch(() => props.content, () => {
    const array = props.content.split(/「|」/);
    header.value = array[0];
    array.splice(0, 1);
    contentArray.value = array;
    for(let i=0; i < contentArray.value.length; i+=2) {
      contentArray.value[i] = getSkillDescription(contentArray.value[i]);
    }
  }, {immediate: true})

  const cardLevelEnum = commonEnum.cardLevel;
  const skillColor = computed(() => {
    const key = Object.keys(cardLevelEnum)[props.level];
    const color = cardLevelEnum[key].color;
    return `text-${color}`
  })

</script>

<style>

</style>
