<template>
  <!-- Sp -->
  <v-card
    width="100%"
    @click="merge"
  >
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
        <v-tooltip location="left">
          <template v-slot:activator="{ props }">
            <span
              :class="skillColor"
              class="font-weight-bold"
              width="30px"
              v-bind="props"
            >
              {{ name }}
            </span>
          </template>
          <span>{{ type }}</span>
        </v-tooltip>
      </v-col>

      <!-- 技能描述 -->
      <v-col cols="9">
        <span width="30px">
          <characterSkillTooltips
            v-if="content"
            :content="content"
            :rarity="rarity"
            :risingStar="risingStar"
          >
          </characterSkillTooltips>
        </span>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { computed } from 'vue';
import commonEnum from '@/common/commonEnum'
import characterSkillTooltips from './characterSkillTooltips.vue';

const props = defineProps({
  name: String,
  type: String,
  content: String,
  reinforceable: Boolean,
  rarity: {
    type: Number,
    default: 0
  },
  risingStar: Number,
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

const rarityEnum = commonEnum.rarity;
const skillColor = computed(() => {
  const key = Object.keys(rarityEnum)[props.rarity];
  const color = rarityEnum[key].color;
  return `text-${color}`
})

</script>

<style></style>
