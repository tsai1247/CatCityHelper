<template>
  <div>
    <v-expansion-panels>
      <v-expansion-panel bg-color="lime-lighten-5"
        v-for="(bookVersion, index) in bookVersionList"
        :key="index"
      >
        <v-expansion-panel-title class="text-h6" :style="{userSelect: 'none'}">
          {{ formattedVersionTitle(bookVersion) }}
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <div
            v-for="(description, index) in bookVersion.description"
            :key=index
          >
            {{ description }}
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup>
import version from '@/common/versions'
const bookVersionList = version.bookVersionList;

function formattedVersionTitle(bookVersion) {
  const { version, title } = bookVersion;
  if(version) {
    return `v${version} ${title}`;
  }
  return title;
}

</script>

<style scoped>

</style>
