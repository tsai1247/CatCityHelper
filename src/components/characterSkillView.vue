<template>
  <div v-if="skills">
    <!-- Sp -->
    <v-row>
      <v-card>
        <v-row class="mb-2">
          <v-col cols="4">
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
          <v-col cols="8">
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
      <v-card @click="levelA = (levelA + 1)%3">
        <v-row class="mb-2">
          <v-col cols="4">
            <v-tooltip
              location="left"
            >
              <template v-slot:activator="{ props }">
                <span v-show="skills"
                  class="font-weight-bold"
                  width="30px"
                  v-bind="props">
                  {{ skills?.A.name }}
                  <div>
                    <span v-for="i in levelA" :key="i">
                      ◆
                    </span>
                  </div>
                </span>
              </template>
              <span>A技能</span>
            </v-tooltip>
          </v-col>
          <v-col cols="8">
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
      <v-card @click="levelB = (levelB + 1)%3">
        <v-row class="mb-2">
          <v-col cols="4">
            <v-tooltip
              location="left"
            >
              <template v-slot:activator="{ props }">
                <span v-show="skills"
                  class="font-weight-bold"
                  width="30px"
                  v-bind="props">
                  {{ skills?.B.name }}
                  <div>
                    <span v-for="i in levelB" :key="i">
                      ◆
                    </span>
                  </div>
                </span>
              </template>
              <span>B技能</span>
            </v-tooltip>
          </v-col>
          <v-col cols="8">
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
      <v-card>
        <v-row class="mb-2">
          <v-col cols="4">
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
          <v-col cols="8">
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
  import { ref, computed, watch } from 'vue';

  const props = defineProps({
    skills: Object,
    starNum: Number,
  })

  watch(() => props.starNum, () => {
    console.log('star num', props.starNum);
    console.log('skills', props.skills);
  })

  const levelA = ref(0);
  const levelB = ref(0);

  const fillSkillA = computed(() => {
    return props.skills.A.description.replace(
      '{{}}', props.skills.A.arguments[levelA.value]
    )
  })

  const fillSkillB = computed(() => {
      return props.skills.B.description.replace(
      '{{}}', props.skills.B.arguments[levelB.value]
    )
  })


  const fillSkillSp = computed(() => {
      return props.skills.Sp.description.replace(
      '{{}}', props.skills.Sp.arguments[parseInt((props.starNum+1)/2)]
    )
  })

  const fillSkillPassive = computed(() => {
      return props.skills.Passive.description.replace(
      '{{}}', props.skills.Passive.arguments[parseInt(props.starNum/2)]
    )
  })

</script>

<style>

</style>
