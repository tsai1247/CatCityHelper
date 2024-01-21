<template>
  <div v-if="skills">
    <!-- Sp -->
    <character-skill-description
      :name="skills?.Sp.name"
      type="Sp奧義技能"
      :content="fillSkillSp">
    </character-skill-description>

    <!-- A -->
    <character-skill-description
      :name="skills?.A.name"
      type="A技能"
      :level="levelA"
      :content="fillSkillA"
      v-on:merge="levelA = (levelA + 1)%3">
    </character-skill-description>

    <!-- B -->
    <character-skill-description
      :name="skills?.B.name"
      type="B技能"
      :level="levelB"
      :content="fillSkillB"
      v-on:merge="levelB = (levelB + 1)%3">
    </character-skill-description>

    <!-- Passive -->
    <character-skill-description
      :name="skills?.Passive.name"
      type="被動技能"
      :content="fillSkillPassive">
    </character-skill-description>
  </div>
</template>

<script setup>
  import { ref, computed, watch } from 'vue';
  import characterSkillDescription from './characterSkillDescription.vue';

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
    levelA.value = 0;
    levelB.value = 0;
  })

</script>

<style>

</style>
