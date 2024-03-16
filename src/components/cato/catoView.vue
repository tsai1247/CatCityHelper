<template>
  <div>
    <div class="ma-5">
      <v-row>
        <v-col :cols="selectedCato && !isMobile ? 7 : 12">
          <!-- search field -->
          <cato-search-field v-on:filter="filter"></cato-search-field>

          <!-- cards -->
          <v-row>
            <v-col v-for="(item, index) in catoList" :key="index" cols="auto">
              <cato-card :cato="item" v-on:select="catoSelected(item)"></cato-card>
            </v-col>
          </v-row>

        </v-col>

        <!-- cato info -->
        <v-col cols="5" v-if="!isMobile">
          <cato-info :cato="selectedCato" v-on:close-dialog="catoSelected(null)"></cato-info>
        </v-col>
      </v-row>

      <!-- cato info for mobile -->
      <v-dialog v-if="isMobile" v-model="catoInfoDialog" width="100%" height="100%" scrollable>
        <template v-slot:default>
          <cato-info :cato="selectedCato" v-on:close-dialog="catoSelected(null)"></cato-info>
        </template>
      </v-dialog>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import cato from '@/common/cato';
import catoInfo from "./catoInfo.vue"
import catoCard from "./catoCard.vue"
import catoSearchField from './catoSearchField.vue';

const catoList = ref(cato);
function filter(nameKeyword, skillKeyword, catoTypeFilter, rarityFilter) {
  catoList.value = cato.filter((item) => {

    const checkResultExist = (itemFilter, key) => {
      return (
        item[key] === null ||
        itemFilter.length === 0 ||
        itemFilter.find((itemId) => item[key]?.id === itemId) !== undefined
      );
    }

    const results = [
      checkResultExist(rarityFilter, "rarity"),
      checkResultExist(catoTypeFilter, "type"),
    ];

    return results.reduce((result, cur) => result && cur, true);
  });

  if (nameKeyword) {
    catoList.value = catoList.value.filter((item) => {
      return item.name.match(nameKeyword);
    });
  }

  if (skillKeyword) {
    catoList.value = catoList.value.filter((item) => {
      return JSON.stringify(item.skill).match(skillKeyword);
    });
  }

}

const selectedCato = ref(null);
const catoInfoDialog = ref(false);
function catoSelected(item) {
  selectedCato.value = item;
  catoInfoDialog.value = item !== null;
}


const isMobile = computed(() => {
  if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    return true;
  } else {
    return false;
  }
})

</script>

<style></style>
