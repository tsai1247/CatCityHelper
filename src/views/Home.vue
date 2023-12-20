<template>
  <div>
    <div>
      <v-row>
        <v-col
          cols="2"
          class="ma-2"
        >
          <v-select
            :label="$t('t_system_chooseLanguage')"
            :items="['jp', 'en-US', 'zh-TW']"
            v-model="$i18n.locale"
            :width="100"
          ></v-select>
        </v-col>
      </v-row>
    </div>
    <character-view></character-view>
  </div>
</template>

<script setup>
import characterView from '@/components/characterView.vue'

</script>

<style scoped>
</style>
