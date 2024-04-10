<template>
  <v-dialog v-bind:model-value="showDialog" persistent>
    <template v-slot:default>
      <v-card>
        <template v-slot:title>
          <span class="font-weight-bold text-h5">社團特訓傷害試算</span>
          <span class="text-subtitle-1 ml-2">{{ enemy.title }}-{{ enemy.name }}</span>
          <v-icon size="x-small" class="ml-2"
            v-bind="props"
          >
            <v-img
              :src="enemy.attribute.icon"
            >
            </v-img>
          </v-icon>
          <v-icon class="float-right"
            @click="close">
            mdi-close-circle
          </v-icon>
        </template>

        <v-card-text class="ma-1" >
          <v-data-table
            :headers="headerList"
            :items="dataList"
            :items-per-page="itemsPerPage"
            v-model:page="currentPage"
            :items-per-page-options="[]"
          >
            <template v-slot:item.round="{index}">
              <v-text-field
                type="number"
                min="1"
                max="999"
                variant="underlined"
                v-model.number="dataList[itemsPerPage * (currentPage - 1) + index].round"
              >
              </v-text-field>
            </template>

            <template v-slot:item.HpTotal="{item}">
              <div>
                <div v-if="item.HpTotal">
                  <v-tooltip
                    location="right"
                  >
                    <template v-slot:activator="{ props }">
                      <div v-bind="props">
                          {{ item.HpTotal }}
                      </div>
                    </template>
                      <div>Hp:  {{ item.HpTotal }}</div>
                      <div>Atk: {{ item.AtkTotal }}</div>
                      <div>Def: {{ item.DefTotal }}</div>
                  </v-tooltip>
                </div>
                <div v-else>-</div>
              </div>
            </template>

            <template v-slot:item.HpBefore="{index}">
              <v-text-field
                variant="underlined"
                v-model.number="dataList[itemsPerPage * (currentPage - 1) + index].HpBefore"
              >
              </v-text-field>
            </template>

            <template v-slot:item.HpPercentBefore="{index}">
              <div>
                <v-row align="center">
                  <v-col>
                    <v-text-field
                      variant="underlined"
                      v-model.number="dataList[itemsPerPage * (currentPage - 1) + index].HpPercentBefore"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col>
                    <span>%</span>
                  </v-col>
                </v-row>
              </div>
            </template>

            <template v-slot:item.HpAfter="{index}">
              <v-text-field
                variant="underlined"
                v-model.number="dataList[itemsPerPage * (currentPage - 1) + index].HpAfter"
              >
              </v-text-field>
            </template>

            <template v-slot:item.HpPercentAfter="{index}">
              <div>
                <v-row align="center">
                  <v-col>
                    <v-text-field
                      variant="underlined"
                      v-model.number="dataList[itemsPerPage * (currentPage - 1) + index].HpPercentAfter"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col>
                    <span>%</span>
                  </v-col>
                </v-row>
              </div>
            </template>

            <template v-slot:item.totalDamage="{value}">
              <div>
                <div v-if="value">
                  {{ value.toFixed(0) }}
                </div>
                <div v-else>
                  -
                </div>
              </div>
            </template>

            <template v-slot:item.totalDamagePercent="{value}">
              <div>
                <div v-if="value">
                  {{ value.toFixed(2) }}%
                </div>
                <div v-else>
                  -
                </div>
              </div>
            </template>

            <template v-slot:item.remark="{index}">
              <v-text-field
                variant="underlined"
                v-model="dataList[itemsPerPage * (currentPage - 1) + index].remark"
              >
              </v-text-field>
            </template>

          </v-data-table>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
  import { ref, watch } from 'vue';
  import enemyValueRelated from './enemyValueRelated';
  const props = defineProps({
    showDialog: Boolean,
    enemy: Object,
    stats: Object,
  });

  const itemsPerPage = ref(5);
  const currentPage = ref(1);
  const { getEnemyValue, toFixed } = enemyValueRelated;

  const emits = defineEmits([
    'close'
  ])

  const headerList = [
    { title: '輪次', key: 'round', sortable: false, width: '80px' },
    { title: '總血量', key: 'HpTotal', sortable: false, align: 'center' },
    { title: '攻擊前血量', key: 'HpBefore', sortable: false },
    { title: '攻擊前百分比', key: 'HpPercentBefore', sortable: false },
    { title: '攻擊後血量', key: 'HpAfter', sortable: false },
    { title: '攻擊後百分比', key: 'HpPercentAfter', sortable: false },
    { title: '總傷害', key: 'totalDamage', sortable: false, align: 'center' },
    { title: '總傷害百分比', key: 'totalDamagePercent', sortable: false, align: 'center' },
    { title: '備註', key: 'remark', sortable: false },
  ]

  const maxDataListLength = ref(60);
  const dataList = ref(new Array(maxDataListLength.value).fill().map(() => ({})));
  dataList.value[0] = {
    round: 1,
    HpBefore: 1000000,
    HpAfter: 500000,
    remark: "這是範例",
  }

  const { getEnemyStats } = enemyValueRelated;

  dataList.value.forEach((_, index) => {
    watch(
      () => dataList.value[index].round,
      (value) => {
        if( value === undefined ) {
          return;
        }
        if( value > 999 ) {
          dataList.value[index].round = 999;
          return;
        }
        if( value === '' ) {
          dataList.value[index].round = 1;
          return;
        }

        const { basic, delta } = props.stats;
        const { HP, ATK, DEF } = getEnemyStats(basic, delta, value, props.stats.maxRound);
        dataList.value[index].HpTotal = HP;
        dataList.value[index].AtkTotal = ATK;
        dataList.value[index].DefTotal = DEF;
      },
      {immediate: true}
    );

    watch(
      () => dataList.value[index].HpPercentBefore,
      (value) => {
        if(!value) return;
        const item = dataList.value[index];
        const HpBefore = (item.HpTotal * value) / 100;
        const diff = Math.abs(item.HpBefore - HpBefore);
        if(!item.HpBefore || diff > item.HpTotal * 0.01 / 100) {
          dataList.value[index].HpBefore = toFixed(HpBefore, 0);
        }
      },
      {immediate: true}
    );

    watch(
      () => dataList.value[index].HpBefore,
      (value) => {
        if(!value) return;
        const item = dataList.value[index];
        const HpPercentBefore = (value / item.HpTotal * 100);

        const diff = Math.abs(item.HpPercentBefore - HpPercentBefore);

        if(!item.HpPercentBefore || diff >= 0.01) {
          dataList.value[index].HpPercentBefore = toFixed(HpPercentBefore);
        }
      },
      {immediate: true}
    );

    watch(
      () => dataList.value[index].HpPercentAfter,
      (value) => {
        if(!value) return;
        const item = dataList.value[index];
        const HpAfter = (item.HpTotal * value) / 100;
        const diff = Math.abs(item.HpAfter - HpAfter);
        if(!item.HpAfter || diff > item.HpTotal * 0.01 / 100) {
          dataList.value[index].HpAfter = toFixed(HpAfter, 0);
        }
      },
      {immediate: true}
    );

    watch(
      () => dataList.value[index].HpAfter,
      (value) => {
        if(!value) return;
        const item = dataList.value[index];
        const HpPercentAfter = (value / item.HpTotal * 100);

        const diff = Math.abs(item.HpPercentAfter - HpPercentAfter);

        if(!item.HpPercentAfter || diff >= 0.01) {
          dataList.value[index].HpPercentAfter = toFixed(HpPercentAfter);
        }
      },
      {immediate: true}
    );

    watch(
      () => [dataList.value[index].HpBefore, dataList.value[index].HpAfter],
      (value) => {
        if(!value[0] || !value[1]) return;
        dataList.value[index].totalDamage = dataList.value[index].HpBefore - dataList.value[index].HpAfter
      },
      {immediate: true}
    );

    watch(
      () => [dataList.value[index].HpPercentBefore, dataList.value[index].HpPercentAfter],
      (value) => {
        if(!value[0] || !value[1]) return;
        dataList.value[index].totalDamagePercent = (dataList.value[index].HpPercentBefore - dataList.value[index].HpPercentAfter)
      },
      {immediate: true}
    );
  })

  watch(() => dataList.value, () => {
    localStorage[props.enemy.name] = JSON.stringify(dataList.value);
  }, {deep: true});

  watch(() => props.showDialog, () => {
    if(localStorage[props.enemy.name]) {
      dataList.value = JSON.parse(localStorage[props.enemy.name]);
    }
  })

  function close() {
    emits('close');
  }

</script>

<style>

</style>
