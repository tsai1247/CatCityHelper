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
  import { ref, watch } from "vue"
  import commonEnum from "@/common/commonEnum"

  const props = defineProps({
    data: Object
  })

  const descriptions = commonEnum.basicValueDescription;

  // 條列方式
  const isTableView = ref(true);

  // 是否展開
  const panel = ref(null);
  function changeAlignStyle () {
    if (panel.value === 0) {
      isTableView.value = !isTableView.value;
    }
  }

  watch(() => [isTableView.value , panel.value], () => {
    localStorage.basicValue_isTableView = isTableView.value;
    localStorage.basicValue_panel = panel.value ?? -1;
  })

  watch(() => props.data, () => {
    if(!localStorage.basicValue_isTableView) {
      localStorage.basicValue_isTableView = 'true';
    }
    if(!localStorage.basicValue_panel) {
      localStorage.basicValue_panel = '-1';
    }

    if (props.data != null) {
      // 條列方式
      isTableView.value = localStorage.basicValue_isTableView === 'true';

      // 是否展開(第0個)panel
      panel.value = parseInt(localStorage.basicValue_panel);
    }
  }, {immediate: true})


</script>

<style>

</style>
