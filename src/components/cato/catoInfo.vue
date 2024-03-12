<template>
  <v-card v-if="cato" class="ma-2" :style="{ userSelect: 'none', position: 'fixed' }" height="100%">

    <template v-slot:title>
      <!-- name -->
      <span class="font-weight-bold text-h5 mr-1">{{ cato.name }}</span>

      <!-- type -->
      <span class="ml-1">
        <v-tooltip class="ma-2" location="top">
          <template v-slot:activator="{ props }">
            <span v-if="cato.type">
              <v-icon size="x-small" v-bind="props">
                <v-img :src="cato.type.icon">
                </v-img>
              </v-icon>
            </span>
            <span v-else>
              <v-icon size="x-small" v-bind="props" :color="grey - lighten - 2">
                mdi-help
              </v-icon>
            </span>
          </template>
          <span v-if="cato.type">
            {{ cato.type?.name }}
          </span>
          <span v-else>
            類型未知
          </span>
        </v-tooltip>
      </span>

      <!-- close button -->
      <v-icon class="float-right" @click="closeDialog">
        mdi-close-circle
      </v-icon>


      <!-- rarity -->
      <span class="float-right" :style="{ position: 'sticky', top: '0px', right: '0px' }">
        <v-img width="50px" :src="cato.rarity.icon">
        </v-img>
      </span>

      <!-- Stars -->
      <v-tooltip location="left">
        <template v-slot:activator="{ props }">
          <div class="ma-4" v-bind="props">
            <span v-for="i in 6" :key="i">
              <v-icon v-if="i > starNum" color="black" size="x-large" @click="setStar(i)">
                mdi-star-four-points-outline
              </v-icon>
              <v-icon v-else color="blue" size="x-large" @click="setStar(i)">
                mdi-star-four-points
              </v-icon>
            </span>
          </div>
        </template>
        <span>升星</span>
      </v-tooltip>
    </template>

    <v-card-text class="ma-1">
      <v-virtual-scroll v-if="cato.statValue || cato.skills" :height="innerHeight * 0.75" :items="[1]">
        <template v-slot:default>
          <div>
            <!-- basic values -->

            <div v-if="cato.statValue.key">
              <v-card @click=changeStar>
                <v-row class="ma-1 text-subtitle-1">

                  <v-col cols="3" class="font-weight-bold">
                    <v-tooltip location="left">
                      <template v-slot:activator="{ props }">
                        <div v-bind="props">{{ cato.statValue.name }}</div>
                      </template>
                      <span>{{ descriptions[cato.statValue.key]?.['description'] }}</span>
                    </v-tooltip>
                  </v-col>

                  <v-col cols="3">{{ cato.statValue.arguments[starNum] }} </v-col>

                </v-row>
              </v-card>

            </div>
            <div v-else-if="!cato.statValue">
              <h2 :style="{ textAlign: 'center' }" class="ma-5">數值未知</h2>
            </div>

            <!-- skill view -->
            <cato-skill-view v-if="cato.skill" :skill="cato.skill" :catoType="cato.type" :starNum="starNum" @click=changeStar>
            </cato-skill-view>
            <div v-else>
              <h2 :style="{ textAlign: 'center' }" class="ma-5">技能未知</h2>
            </div>
          </div>
        </template>
      </v-virtual-scroll>

    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import catoSkillView from './catoSkillView.vue';
import commonEnum from "@/common/commonEnum"

const descriptions = commonEnum.basicValueDescription;

const props = defineProps({
  cato: Object,
});

const emit = defineEmits(['closeDialog']);

function closeDialog() {
  emit('closeDialog');
}

const starNum = ref(0);

function changeStar() {
  starNum.value = (starNum.value + 1) % 7;
}

function setStar(num) {
  if (starNum.value === num) {
    starNum.value = 0;
  }
  else {
    starNum.value = num;
  }

  if (!localStorage.stars) {
    localStorage.stars = "{}";
  }
  const info = JSON.parse(localStorage.stars);
  info[props.cato.name] = starNum.value;
  localStorage.stars = JSON.stringify(info);
}

watch(() => props.cato, () => {
  if (!localStorage.stars) {
    localStorage.stars = "{}";
  }
  const info = JSON.parse(localStorage.stars);
  starNum.value = info[props.cato?.name] ?? 0;
}, { immediate: true })

const innerHeight = computed(() => window.innerHeight);

</script>

<style></style>
