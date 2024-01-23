<template>
  <div v-if="skills">
    <!-- Sp -->
    <character-skill-description
      v-if="skills.Sp.name"
      :name="skills.Sp.name"
      type="Sp奧義技能"
      :content="fillSkillSp"
      v-on:merge="setStar( ((parseInt((starNum + 1) / 2) + 1)*2-1) % 7 )">
    </character-skill-description>

    <!-- A -->
    <character-skill-description
      v-if="skills.A.name"
      :name="skills.A.name"
      type="A技能"
      :rarity="rarityA"
      :content="fillSkillA"
      v-on:merge="rarityA = (rarityA + 1)%3">
    </character-skill-description>

    <!-- B -->
    <character-skill-description
      v-if="skills.B.name"
      :name="skills.B.name"
      type="B技能"
      :rarity="rarityB"
      :content="fillSkillB"
      v-on:merge="rarityB = (rarityB + 1)%3">
    </character-skill-description>

    <!-- Passive -->
    <character-skill-description
      v-if="skills.Passive.name"
      :name="skills.Passive.name"
      type="被動技能"
      :content="fillSkillPassive"
      v-on:merge="setStar((parseInt(starNum / 2) + 1)*2 % 8 )">
    </character-skill-description>

    <!-- Rising Star -->
    <v-card width="100%" v-for="(item, index) in skills.risingStar" :key="index" @click="setStar(index + 1)">
      <v-row class="ma-1 text-subtitle-1">
        <v-col v-if="item">

          <v-tooltip
            location="left"
          >
            <template v-slot:activator="{ props }">
              <div
                  v-bind="props">
                    <span
                      :class="starNum <= index ? '' : 'font-weight-bold'"
                      :style="{color: starNum <= index ? 'gray' : 'blue'}">
                      {{ item }}
                    </span>
              </div>
            </template>
            <span>{{ `${index+1}星解鎖` }}</span>
          </v-tooltip>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script setup>
  import { ref, computed, watch } from 'vue';
  import characterSkillDescription from './characterSkillDescription.vue';

  const props = defineProps({
    skills: Object,
    starNum: Number,
  })

  const emits = defineEmits(['setStar'])
  function setStar(starNum) {
    emits("setStar", starNum);
  }

  const rarityA = ref(0);
  const rarityB = ref(0);

  const fillSkillA = computed(() => {
    let index = 0;
    return props.skills.A.description.replace(
    /{{}}/g, () => props.skills.A.arguments[rarityA.value][index++]
    )
  })

  const fillSkillB = computed(() => {
      let index = 0;
      return props.skills.B.description.replace(
      /{{}}/g, () => props.skills.B.arguments[rarityB.value][index++]
    )
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

  watch(() => props.skills, () => {
    rarityA.value = 0;
    rarityB.value = 0;
  })

</script>

<style>

</style>
