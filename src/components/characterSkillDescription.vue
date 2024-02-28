<template>
  <!-- Sp -->
  <v-card width="100%" @click="merge">
    <v-icon
      v-if="reinforceable"
      @click.stop="reinforce"
      class="float-right ma-2"
    >
      mdi-swap-horizontal-circle
    </v-icon>
    <v-row class="ma-1 text-subtitle-1">

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
                v-if="item?.htmlDescription"
              >
                <template v-slot:activator="{ props }">
                  <span
                      v-bind="props">
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
import { ref, computed, watch } from 'vue';
import commonEnum from '@/common/commonEnum'
import nounDescription from '@/common/nounDescription';

  const props = defineProps({
    name: String,
    type: String,
    rarity: {
      type: Number,
      default: 0
    },
    content: String,
    reinforceable: Boolean,
  })

  const emits = defineEmits([
    'merge',
    'reinforce',
  ])

  function merge() {
    emits('merge');
  }

  function reinforce() {
    emits('reinforce');
  }

  const skillDescription = nounDescription.skillDescription;
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

  const rarityEnum = commonEnum.rarity;
  const skillColor = computed(() => {
    const key = Object.keys(rarityEnum)[props.rarity];
    const color = rarityEnum[key].color;
    return `text-${color}`
  })

</script>

<style>

</style>
