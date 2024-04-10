<template>
  <div class="ma-2 mt-4 mb-4">
    <div>
      <v-row>
        <v-col>
          <v-select
            variant="underlined"
            label="期數"
            :items="clubInfo"
            item-value="no"
            :item-title="item => getEventTitle(item)"
            v-model="event"
            return-object
          >
          </v-select>
        </v-col>
        <v-col>
          <v-text-field
            type="number"
            min="1"
            max="999"
            variant="underlined"
            label="輪次"
            v-model.number="round"
          >
          </v-text-field>
        </v-col>
      </v-row>
    </div>
    <div v-if="event" class="ml-2 mr-2">
      <v-row>
        <v-col>
          <div v-if="unconfirmedData" class="text-red font-weight-bold">技能數值與血攻防為前期相同BOSS的數據，僅供參考</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6" class="elevation-10 bg-yellow-lighten-4">
          <enemy-view
            :enemy="event.enemies.white"
            :round="round"
            :stats="bigStats"
          >
          </enemy-view>
        </v-col>
        <v-col cols="12" md="6" class="bg-red-lighten-5">
          <enemy-view
            :enemy="event.enemies.red"
            :round="round"
            :stats="smallStats"
          >
          </enemy-view>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6" class="bg-light-green-accent-1">
          <enemy-view
            :enemy="event.enemies.green"
            :round="round"
            :stats="smallStats"
          >
          </enemy-view>
        </v-col>
        <v-col cols="12" md="6" class="bg-indigo-lighten-5">
          <enemy-view
            :enemy="event.enemies.blue"
            :round="round"
            :stats="smallStats"
          >
          </enemy-view>
        </v-col>

      </v-row>
    </div>
    <div v-else class="text-h6 font-weight-bold text-center">
      請選擇期數
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue';
import enemyView from './enemyView.vue';
import clubInfo from '@/common/clubInfo';
import { useRoute, useRouter } from 'vue-router';
import { watch } from 'vue';

const route = useRoute();
const router = useRouter();

const defaultEventNo = parseInt(route.query.event);
const event = ref(clubInfo[0]);

if(!isNaN(defaultEventNo)) {
  event.value = clubInfo.find(item => item.no === defaultEventNo);
}

const defaultRound = parseInt(route.query.round);
const round = ref(1);
if(!isNaN(defaultRound)) {
  round.value = defaultRound;
}

const unconfirmedData = ref(false);
function getEventTitle(item) {
  const start = new Date(item.duration.start);
  start.setHours(5);
  const end = new Date(item.duration.end);
  end.setHours(5);

  const today =  new Date();

  if(today < start) {
    unconfirmedData.value = true;
    return `第${item.no}期 ${item.duration.start}~${item.duration.end} (即將開始)`
  }
  else if(today < end) {
    unconfirmedData.value = false;
    return `第${item.no}期 ${item.duration.start}~${item.duration.end} (舉辦中)`
  } else {
    unconfirmedData.value = false;
    return `第${item.no}期 ${item.duration.start}~${item.duration.end} (已結束)`
  }
}

const updateQuery = setInterval(() => {
  let query = {};
  if(event.value) {
    query.event = `${event.value.no}`;
  }
  if(round.value) {
    query.round = round.value;
  }

  if(query.event === route.query.event && query.round === route.query.round) {
    return;
  }

  router.push({
    name: '/Club',
    query,
  });
}, 1000);

watch(() => round.value, () => {
  if(round.value === '') {
    round.value = 1;
  }
  if(round.value > 999) {
    round.value = 999;
  }
}, {immediate: true})

const smallStats = computed(() => event.value.enemies.stats.small);
const bigStats = computed(() => event.value.enemies.stats.big);

onUnmounted(() => {
  clearInterval(updateQuery);
});
</script>

<style>

</style>
