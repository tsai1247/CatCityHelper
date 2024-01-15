<template>
  <v-row>
    <v-col>
      <v-card v-if="character"
        class="ma-2 fixed-element"
        width="100%"
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


            <v-icon class="float-right"
              @click="closeDialog">
              mdi-close-circle
            </v-icon>
          </template>

          <v-card-text class="ma-1">
            <div v-if="character.skills">
              <!-- Sp -->
              <v-row>
                <v-card>
                  <v-row class="mb-2">
                    <v-col cols="4">
                      <v-tooltip
                        location="left"
                      >
                        <template v-slot:activator="{ props }">
                          <span v-show="character.skills"
                            class="font-weight-bold"
                            width="30px"
                            v-bind="props">
                            {{ character.skills?.Sp.name }}
                          </span>
                        </template>
                        <span>Sp奧義技能</span>
                      </v-tooltip>
                    </v-col>
                    <v-col cols="8">
                      <span v-show="character.skills" width="30px"
                        v-bind="props">
                        {{ character.skills?.Sp.description }}
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
                          <span v-show="character.skills"
                            class="font-weight-bold"
                            width="30px"
                            v-bind="props">
                            {{ character.skills?.A.name }}
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
                      <span v-show="character.skills" width="30px"
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
                          <span v-show="character.skills"
                            class="font-weight-bold"
                            width="30px"
                            v-bind="props">
                            {{ character.skills?.B.name }}
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
                      <span v-show="character.skills" width="30px"
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
                          <span v-show="character.skills"
                            class="font-weight-bold"
                            width="30px"
                            v-bind="props">
                            {{ character.skills?.Passive.name }}
                          </span>
                        </template>
                        <span>被動技能</span>
                      </v-tooltip>
                    </v-col>
                    <v-col cols="8">
                      <span v-show="character.skills" width="30px"
                        v-bind="props">
                        {{ character.skills?.Passive.description }}
                      </span>
                    </v-col>
                  </v-row>
                </v-card>
              </v-row>
            </div>
          </v-card-text>
        </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
  import { ref, computed } from 'vue';

  const props = defineProps({
    character: Object
  })

  const emit = defineEmits(['closeDialog'])

  function closeDialog(){
    emit('closeDialog');
  }

  const levelA = ref(0);
  const levelB = ref(0);

  const fillSkillA = computed(() => {
    return props.character.skills.A.description.replace(
      '{{}}', props.character.skills.A.arguments[levelA.value]
    )
  })

  const fillSkillB = computed(() => {
      return props.character.skills.B.description.replace(
      '{{}}', props.character.skills.B.arguments[levelB.value]
    )
  })

</script>

<style>

</style>
