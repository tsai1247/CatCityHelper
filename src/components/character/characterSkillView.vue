<template>
  <div v-if="skills">
    <!-- Sp -->
    <character-skill-description
      v-if="skills.Sp.name"
      :style="{'background-color': reinforceSp ? '#E6ED02': '#FFFFFF'}"
      :name="skills.Sp.name"
      type="Sp奧義技能"
      :risingStar="starNum"
      :content="fillSkillSp"
      v-on:merge="setStar( ((parseInt((starNum + 1) / 2) + 1)*2-1) % 7 )"
      :reinforceable="!!skills.Sp.reinforce"
      v-on:reinforce="reinforceSp = !reinforceSp">
    </character-skill-description>

    <!-- A -->
    <character-skill-description
      v-if="skills.A.name"
      :style="{'background-color': reinforceA ? '#E6ED02': '#FFFFFF'}"
      :name="skills.A.name"
      type="A技能"
      :rarity="rarityA"
      :risingStar="starNum"
      :content="fillSkillA"
      v-on:merge="rarityA = (rarityA + 1)%3"
      :reinforceable="!!skills.A.reinforce"
      v-on:reinforce="reinforceA = !reinforceA">
    </character-skill-description>

    <!-- B -->
    <character-skill-description
      v-if="skills.B.name"
      :style="{'background-color': reinforceB ? '#E6ED02': '#FFFFFF'}"
      :name="skills.B.name"
      type="B技能"
      :rarity="rarityB"
      :risingStar="starNum"
      :content="fillSkillB"
      v-on:merge="rarityB = (rarityB + 1)%3"
      :reinforceable="!!skills.B.reinforce"
      v-on:reinforce="reinforceB = !reinforceB">
    </character-skill-description>

    <!-- Passive -->
    <character-skill-description
      v-if="skills.Passive.name"
      :style="{'background-color': reinforcePassive ? '#E6ED02': '#FFFFFF'}"
      :name="skills.Passive.name"
      type="被動技能"
      :risingStar="starNum"
      :content="fillSkillPassive"
      v-on:merge="setStar((parseInt(starNum / 2) + 1)*2 % 8 )"
      :reinforceable="!!skills.Passive.reinforce"
      v-on:reinforce="reinforcePassive = !reinforcePassive">
    </character-skill-description>

    <!-- Rising Star -->
    <v-card width="100%" v-for="(item, index) in skills.risingStar" :key="index" @click="setStar(index + 1)">
      <v-row v-if="item" class="ma-1 text-subtitle-1">
        <v-col>

          <v-tooltip
            location="left"
          >
            <template v-slot:activator="{ props }">
              <div
                  v-bind="props">
                    <span
                      :class="starNum <= index ? '' : 'font-weight-bold'"
                      :style="{color: starNum <= index ? 'grey' : 'blue'}">
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

  function getNormalSkill(skillinfo, rarity, reinforce = false) {
    if(reinforce) {
      let index = 0;
      return skillinfo.description.replace(
        /{{}}/g, () => skillinfo.reinforce[rarity][index++] || ''
      )
    }
    else {
      let index = 0;
      return skillinfo.description.replace(
        /{{}}/g, () => skillinfo.arguments[rarity][index++] || ''
      )
    }
  }

  const rarityA = ref(0);
  const reinforceA = ref(false);
  const fillSkillA = computed(() => {
    return getNormalSkill(props.skills.A, rarityA.value, reinforceA.value);
  })

  const rarityB = ref(0);
  const reinforceB = ref(false);
  const fillSkillB = computed(() => {
    return getNormalSkill(props.skills.B, rarityB.value, reinforceB.value);
  })

  function getSpecialSkill(skillinfo, level, reinforce = false) {
    if(reinforce) {
      let index = 0;
      return skillinfo.description.replace(
        /{{}}/g, () => skillinfo.arguments[parseInt(level)][index++] || ''
      )
    }
    else {
      let index = 0;
      return skillinfo.description.replace(
        /{{}}/g, () => skillinfo.reinforce[parseInt(level)][index++] || ''
      )
    }
  }

  const reinforceSp = ref(false);
  const fillSkillSp = computed(() => {
    return getSpecialSkill(props.skills.Sp, (props.starNum+1)/2, reinforceSp);
  })

  const reinforcePassive = ref(false);
  const fillSkillPassive = computed(() => {
    return getSpecialSkill(props.skills.Passive, (props.starNum)/2, reinforcePassive);
  })

  watch(() => props.skills, () => {
    rarityA.value = 0;
    rarityB.value = 0;
  })

</script>

<style>

</style>
