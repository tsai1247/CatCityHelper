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
            <v-btn
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
    <damage-calculator-dialog
      :showDialog="showDamageCalculatorDialog"
      :enemy="enemy"
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
})

const enemyImages = images.enemyImages;
const { getEnemyValue } = enemyValueRelated;

const HP = computed(() => {
  return getEnemyValue(props.enemy.basicValues.HP, props.enemy.delta.HP, props.round);
});

const ATK = computed(() => {
  return getEnemyValue(props.enemy.basicValues.ATK, props.enemy.delta.ATK, props.round);
});

const DEF = computed(() => {
  return getEnemyValue(props.enemy.basicValues.DEF, props.enemy.delta.DEF, props.round);
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

const showDamageCalculatorDialog = ref(false);

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
