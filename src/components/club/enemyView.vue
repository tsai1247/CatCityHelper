<template>
  <div>
    <v-row>
      <v-col cols="12" md="6">
        <div class="text-center font-weight-bold text-h5">
          {{ enemy.title }}-{{ enemy.name }}

        </div>
        <div :style="centerStyle">
          <v-img v-if="enemyImages[enemy.name]"
            class="text-center"
            max-width="250px"
            :src="enemyImages[enemy.name]"
            :lazy-src="enemyImages[enemy.name]"
          >
            <v-btn v-if="!isMobile"
              width="100%"
              height="100%"
              icon
              flat
              class="transparent-button"
              @click="showDamageCalculatorDialog = true"
            >
              <v-icon class="icon-size">mdi-sword-cross</v-icon>
            </v-btn>
          </v-img>
          <v-img v-else
            class="text-center"
            max-width="250px"
            :src="unknown"
            :lazy-src="unknown"
          >
            <v-btn v-if="!isMobile"
              width="100%"
              height="100%"
              icon
              flat
              class="transparent-button"
              @click="showDamageCalculatorDialog = true"
            >
              <v-icon class="icon-size">mdi-sword-cross</v-icon>
            </v-btn>
          </v-img>
        </div>

        <div :style="centerStyle">
          血量: {{ parseInt(allStats.HP) }}&emsp;攻擊力: {{ parseInt(allStats.ATK) }}&emsp;防禦力: {{ parseInt(allStats.DEF) }}
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <v-data-table
          :items="skillList"
          :headers="headerList"
        >
          <template v-slot:bottom>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <damage-calculator-dialog
      :showDialog="showDamageCalculatorDialog"
      :enemy="enemy"
      :stats="stats"
      v-on:close="showDamageCalculatorDialog = false"
    >
    </damage-calculator-dialog>
  </div>
</template>

<script setup>
import images from '@/common/images';
import { ref, computed } from 'vue';
import damageCalculatorDialog from './damageCalculatorDialog.vue';
import enemyValueRelated from './enemyValueRelated';

const props = defineProps({
  enemy: Object,
  round: Number,
  stats: Object,
})

const enemyImages = images.enemyImages;
const unknown = images.unknown;
const { getEnemyStats } = enemyValueRelated;

const allStats = computed(() => {
  const maxRound = props.stats.maxRound;
  const { basic, delta } = props.stats;

  return getEnemyStats(basic, delta, props.round, maxRound);
})

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

const showDamageCalculatorDialog = ref(false);

const isMobile = computed(() => {
  if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    return true;
  } else {
    return false;
  }
})

</script>

<style>
.transparent-button {
  color: transparent; /* 默认图标颜色 */
  background-color: transparent !important; /* 默认背景色透明 */
}

.transparent-button:hover {
  background-color: transparent !important; /* 鼠标悬停时背景变为白色 */
  color: gray !important; /* 可选：如果你想在悬停时改变图标或文字颜色 */
}

/* 调整图标大小，尽可能填满按钮 */
.icon-size {
  font-size: 6rem; /* 根据实际情况调整图标的大小 */
}

</style>
