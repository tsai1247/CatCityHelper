<template>
  <v-dialog v-model="firstVisitLatestVersion">
    <template v-slot:default>
      <v-card
        class="ma-2"
        height="100%"
      >
        <template v-slot:title>
          <span>新版本資訊</span>
          <v-icon
            class="float-right"
            @click="newVersionNotifyHasRead"
          >
            mdi-close-circle
          </v-icon>
        </template>

        <v-card-text class="ma-1">
          <div>
            圖鑑更新啦！
            現在是
            <span class="font-weight-bold">v{{ latestBookVersion.version }}</span>
            版本
          </div>
          <div>來看看這次有什麼改動吧～</div>
          <br>
          <v-virtual-scroll :items="[1]">
            <template v-slot:default>
              <div
                v-for="(description, index) in latestBookVersion.description"
                :key="index"
              >
                <div
                  class="text-green"
                  v-if="description.includes('【新增】')"
                >
                  {{ description }}
                </div>
                <div
                  class="text-orange"
                  v-else-if="description.includes('【優化】')"
                >
                  {{ description }}
                </div>
                <div
                  class="text-red"
                  v-else-if="description.includes('【修正】')"
                >
                  {{ description }}
                </div>
                <div v-else>
                  {{ description }}
                </div>
              </div>
            </template>
          </v-virtual-scroll>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  latestBookVersion: Object
});

const firstVisitLatestVersion = ref(localStorage.lastBookVersion !== props.latestBookVersion.version);

function newVersionNotifyHasRead() {
  localStorage.lastBookVersion = props.latestBookVersion.version;
  firstVisitLatestVersion.value = false;
}
</script>

<style></style>
