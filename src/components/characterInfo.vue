<template>
  <v-card v-if="character"
    class="ma-2"
    :style="{userSelect: 'none', position: 'fixed'}"
    height="100%">

      <template v-slot:title>
        <!-- name -->
        <span class="font-weight-bold text-h5 mr-1">{{character.name}}</span>

        <!-- attribute -->
        <v-tooltip
          location="top"
        >
          <template v-slot:activator="{ props }">
            <span v-show="character.attribute">
              <v-icon size="x-small"
                v-bind="props"
                :color="character.attribute?.color">
                mdi-circle
              </v-icon>
            </span>
          </template>
          <span>{{ character.attribute?.name }}</span>
        </v-tooltip>

        <!-- particle -->
        <v-tooltip
          location="top"
        >
          <template v-slot:activator="{ props }">
            <span v-show="character.particle">
              <v-icon size="x-small"
                v-bind="props">
                {{ character.particle?.icon }}
              </v-icon>
            </span>
          </template>
          <span>{{ character.particle?.name }}</span>
        </v-tooltip>

        <!-- supporters -->
        <span v-if="character.supporters && character.supporters.length" class="ml-4">
          <v-tooltip
            location="bottom"
          >
            <template v-slot:activator="{ props }">
              <v-icon v-bind="props">
                mdi-link-variant
              </v-icon>
            </template>
            <span>助戰位</span>
          </v-tooltip>

          <v-tooltip
            location="bottom" v-for="(supporter, index) in character.supporters" :key="index"
          >
            <template v-slot:activator="{ props }">
              <v-icon v-bind="props">
                mdi-circle
              </v-icon>
            </template>
            <span>{{ supporter }}</span>
          </v-tooltip>
        </span>

        <!-- close button -->
        <v-icon class="float-right"
          @click="closeDialog">
          mdi-close-circle
        </v-icon>


        <!-- rarity -->
        <span
          class="float-right mr-4 text-h5 font-italic font-weight-black"
          :class="`text-${character.rarity.textColor}`"
        >
          {{ character.rarity.name }}
        </span>

        <!-- Stars -->
        <v-tooltip
          location="left"
        >
          <template v-slot:activator="{ props }">
            <div class="ma-4" v-bind="props">
              <span v-for="i in 6" :key="i">
                <v-icon v-if="i > starNum"
                  color="black" size="x-large" @click="setStar(i)"
                >
                  mdi-star-four-points-outline
                </v-icon>
                <v-icon v-else
                  color="blue" size="x-large" @click="setStar(i)"
                >
                  mdi-star-four-points
                </v-icon>
              </span>
            </div>
          </template>
          <span>升星</span>
        </v-tooltip>
      </template>

      <v-card-text class="ma-1">
        <v-virtual-scroll
          :height="innerHeight * 0.75"
          :items="[1]"
        >
          <template v-slot:default>
            <div v-if="character.skills">
              <character-skill-view
                :skills="character.skills"
                :starNum="starNum"
                v-on:set-star="setStar">
              </character-skill-view>
            </div>
          </template>
          </v-virtual-scroll>
      </v-card-text>
    </v-card>
</template>

<script setup>
  import { ref, computed, watch } from 'vue';
  import characterSkillView from './characterSkillView.vue';

  const props = defineProps({
    character: Object,
  })

  const emit = defineEmits(['closeDialog'])

  function closeDialog(){
    emit('closeDialog');
  }

  const starNum = ref(0);

  function setStar(num) {
    if (starNum.value === num) {
      starNum.value = 0;
    }
    else {
      starNum.value = num;
    }

    if(!localStorage.stars) {
      localStorage.stars = "{}";
    }
    const info = JSON.parse(localStorage.stars);
    info[props.character.subname] = starNum.value;
    localStorage.stars = JSON.stringify(info);
  }

  watch(() => props.character, () => {
    if(!localStorage.stars) {
      localStorage.stars = "{}";
    }
    const info = JSON.parse(localStorage.stars);
    starNum.value = info[props.character?.subname] ?? 0;
  })

  const innerHeight = computed(() => window.innerHeight)

</script>

<style>
</style>
