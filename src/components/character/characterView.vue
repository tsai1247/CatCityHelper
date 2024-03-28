<template>
  <div>
    <div class="ma-5">
      <v-row>
        <v-col :cols="selectedCharacter && !isMobile ? 7 : 12">
          <!-- search field -->
          <search-field
            v-on:filter="filter"></search-field>

          <!-- cards -->
          <v-row>
            <v-col v-for="(item, index) in characterList" :key="index" cols="auto">
              <character-card :character="item" v-on:select="characterSelected(item)"></character-card>
            </v-col>
          </v-row>

        </v-col>

        <!-- character info -->
        <v-col cols="5" v-if="!isMobile">
          <character-info :character="selectedCharacter" v-on:close-dialog="characterSelected(null)"></character-info>
        </v-col>
      </v-row>

      <!-- character info for mobile -->
      <v-dialog v-if="isMobile" v-model="characterInfoDialog"
        width="100%" height="100%"
        scrollable
      >
        <template v-slot:default>
          <character-info :character="selectedCharacter" v-on:close-dialog="characterSelected(null)"></character-info>
        </template>
      </v-dialog>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import character from '@/common/character';
  import characterInfo from "./characterInfo.vue"
  import searchField from './searchField.vue';
  import characterCard from "./characterCard.vue"

  const characterList = ref(character);
  function filter(nameKeyword, skillKeyword, rarityFilter, attributeFilter, particleFilter) {
    characterList.value = character.filter(
      (item) => {
        const results = [
          item.rarity === null || rarityFilter.length === 0 || rarityFilter.find(rarity => item.rarity?.id === rarity) !== undefined,
          item.attribute === null || attributeFilter.length === 0 || attributeFilter.find((attribute) => item.attribute?.id === attribute)  !== undefined,
          item.particle === null || particleFilter.length === 0 || particleFilter.find((particle) => item.particle?.id === particle)  !== undefined,
        ];

        return results.reduce(
          (result, cur) => result && cur, true
        );
      }
    );

    if(nameKeyword) {
      characterList.value = characterList.value.filter(
        (item) => {
          return item.name.indexOf(nameKeyword) !== -1
            || item.subname.indexOf(nameKeyword) !== -1;
        }
      );
    }

    if(skillKeyword) {
      characterList.value = characterList.value.filter(
        (item) => {
          return JSON.stringify(item.skills).indexOf(skillKeyword) !== -1
        }
      );
    }

  }

  const selectedCharacter = ref(null);
  const characterInfoDialog = ref(false);
  function characterSelected(item) {
    selectedCharacter.value = item;
    characterInfoDialog.value = item !== null;
  }

  const isMobile = computed(() => {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
      return true;
    } else {
      return false;
    }
  })
</script>

<style>

</style>
