<template>
  <div v-if="skills">
    <!-- Sp -->
    <v-row>
      <v-card width="100%">
        <v-row class="ma-1">
          <v-col cols="3">
            <v-tooltip
              location="left"
            >
              <template v-slot:activator="{ props }">
                <span v-show="skills"
                  class="font-weight-bold"
                  width="30px"
                  v-bind="props">
                  {{ skills?.Sp.name }}
                </span>
              </template>
              <span>Sp奧義技能</span>
            </v-tooltip>
          </v-col>
          <v-col cols="9">
            <span v-show="skills" width="30px"
              v-bind="props">
              {{ fillSkillSp }}
            </span>
          </v-col>
        </v-row>
      </v-card>
    </v-row>

    <!-- A -->
    <v-row>
      <v-card width="100%" @click="levelA = (levelA + 1)%3">
        <v-row class="ma-1">
          <v-col cols="3">
            <v-tooltip
              location="left"
            >
              <template v-slot:activator="{ props }">
                <div :class="skillAColor">
                  <span v-show="skills"
                    class="font-weight-bold"
                    width="30px"
                    v-bind="props">
                    {{ skills?.A.name }}
                  </span>
                </div>
              </template>
              <span>A技能</span>
            </v-tooltip>
          </v-col>
          <v-col cols="9">
            <span v-show="skills" width="30px"
              v-bind="props">
              {{ fillSkillA }}
            </span>
          </v-col>
        </v-row>
      </v-card>
    </v-row>

    <!-- B -->
    <v-row>
      <v-card width="100%" @click="levelB = (levelB + 1)%3">
        <v-row class="ma-1">
          <v-col cols="3">
            <v-tooltip
              location="left"
            >
            <template v-slot:activator="{ props }">
                <div :class="skillBColor">
                  <span v-show="skills"
                    class="font-weight-bold"
                    width="30px"
                    v-bind="props">
                    {{ skills?.B.name }}
                  </span>
                </div>
              </template>
              <span>B技能</span>
            </v-tooltip>
          </v-col>
          <v-col cols="9">
            <span v-show="skills" width="30px"
              v-bind="props">
              {{ fillSkillB }}
            </span>
          </v-col>
        </v-row>
      </v-card>
    </v-row>

    <!-- Passive -->
    <v-row>
      <v-card width="100%">
        <v-row class="ma-1">
          <v-col cols="3">
            <v-tooltip
              location="left"
            >
              <template v-slot:activator="{ props }">
                <span v-show="skills"
                  class="font-weight-bold"
                  width="30px"
                  v-bind="props">
                  {{ skills?.Passive.name }}
                </span>
              </template>
              <span>被動技能</span>
            </v-tooltip>
          </v-col>
          <v-col cols="9">
            <span v-show="skills" width="30px"
              v-bind="props">
              {{ fillSkillPassive }}
            </span>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import commonEnum from '@/common/scriptFile/commonEnum'

  const props = defineProps({
    skills: Object,
    starNum: Number,
  })

  const levelA = ref(0);
  const levelB = ref(0);

  const fillSkillA = computed(() => {
    let index = 0;
    return props.skills.A.description.replace(
    /{{}}/g, () => props.skills.A.arguments[levelA.value][index++]
    )
  })

  const fillSkillB = computed(() => {
      let index = 0;
      return props.skills.B.description.replace(
      /{{}}/g, () => props.skills.B.arguments[levelB.value][index++]
    )
  })

  const cardLevelEnum = commonEnum.cardLevel;
  const skillAColor = computed(() => {
    const key = Object.keys(cardLevelEnum)[levelA.value];
    const color = cardLevelEnum[key].color;
    return `text-${color}`
  })

  const skillBColor = computed(() => {
    const key = Object.keys(cardLevelEnum)[levelB.value];
    const color = cardLevelEnum[key].color;
    return `text-${color}`
  })


  const fillSkillSp = computed(() => {
    let index = 0;
    return props.skills.Sp.description.replace(
      /{{}}/g, () => props.skills.Sp.arguments[parseInt((props.starNum+1)/2)][index++]
    )
  })

  const fillSkillPassive = computed(() => {
    let index = 0;
    return props.skills.Passive.description.replace(
      /{{}}/g, () => props.skills.Passive.arguments[parseInt((props.starNum)/2)][index++]
    )
  })

</script>

<style>

</style>
