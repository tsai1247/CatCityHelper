<template>
  <div>
    <v-row>
      <v-col cols="6">
        <div class="text-center font-weight-bold text-h5">
          {{ enemy.title }}-{{ enemy.name }}

        </div>
        <div :style="centerStyle">
          <v-img
            class="text-center"
            max-width="250px"
            :src="enemyImages[enemy.name]"
            :lazy-src="enemyImages[enemy.name]"
          >
          </v-img>
        </div>

        <div :style="centerStyle">
          血量: {{ HP }}&emsp;攻擊力: {{ ATK }}&emsp;防禦力: {{ DEF }}
        </div>
      </v-col>
      <v-col cols="6">
        <v-data-table
          :items="skillList"
          :headers="headerList"
        >
          <template v-slot:bottom>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import images from '@/common/images';
import { ref, computed } from 'vue';

const props = defineProps({
  enemy: Object,
  round: String,
})

const enemyImages = images.enemyImages;

const roundValue = computed(() => {
  const computedRound = parseInt(props.round);
  if(isNaN(computedRound)) {
    return 1;
  }
  return computedRound;
});

const HP = computed(() => {
  return props.enemy.basicValues.HP + props.enemy.delta.HP * (roundValue.value - 1);
});

const ATK = computed(() => {
  return props.enemy.basicValues.ATK + props.enemy.delta.ATK * (roundValue.value - 1);
});

const DEF = computed(() => {
  return props.enemy.basicValues.DEF + props.enemy.delta.DEF * (roundValue.value - 1);
});


const headerList = [
  { title: '技能類型', key: 'name', sortable: false, width: '35%'},
  { title: '技能描述', key: 'description', sortable: false, width: '65%'},
]


const skillList = computed(() => {
  let list = []

  if( props.enemy.skills.Sp ) {
    list.push(
      {name: '奧義技能', description: props.enemy.skills.Sp},
    );
  }

  if( props.enemy.skills.Active ) {
    list.push(
      ...props.enemy.skills.Active.map((item, index) => {
        return {
          name: `技能${index+1}`,
          description: item,
        }
      }),
    );
  }

  if( props.enemy.skills.Passive ) {
    list.push(
      {name: '被動技能', description: props.enemy.skills.Passive},
    );
  }
  return list;
})

const centerStyle = ref({
  display: 'flex', justifyContent: 'center'
})

</script>

<style>

</style>
