<template>
  <v-expansion-panels
    v-model="panel"
  >
    <v-expansion-panel>
      <v-expansion-panel-title>
        <div>
          <span class="mr-2">基礎數值</span>
          <span v-if="panel === 0">
            <v-icon v-if="isTableView" @click.stop="changeAlignStyle">mdi-table-large</v-icon>
            <v-icon v-else @click.stop="changeAlignStyle">mdi-table-column</v-icon>
          </span>
        </div>
      </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-row>
            <v-col :cols="isTableView ? 4 : 12" v-for="(key, index) in Object.keys(data)" :key="index">
              <v-tooltip
                location="left"
              >
                <template v-slot:activator="{ props }">
                  <div v-bind="props">
                      {{ descriptions[key]['name'] }} : {{data[key]}}
                  </div>
                </template>
                <span>{{ descriptions[key]['description'] }}</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup>
import { ref } from "vue"
import commonEnum from "@/common/commonEnum"

defineProps({
  data: Object
})

const descriptions = commonEnum.basicValueDescription;

const isTableView = ref(true);
const panel = ref(null);
function changeAlignStyle () {
  if (panel.value === 0) {
    isTableView.value = !isTableView.value;
  }
}

</script>

<style>

</style>
