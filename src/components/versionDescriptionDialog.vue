<template>
  <div>
    <v-dialog v-model="showDialog"
      width="40%" max-height="80%">
        <template v-slot:default>
          <v-card
            class="ma-2"
            height="100%">
              <template v-slot:title>
                <span>{{ title }}</span>
                <v-icon class="float-right"
                  @click="closeDialog">
                  mdi-close-circle
                </v-icon>
              </template>

              <v-card-text class="ma-1" >
                <div
                  v-for="(item, index) in content"
                  :key="index"
                >
                  {{ item }}
                </div>
              </v-card-text>
            </v-card>
        </template>
    </v-dialog>
  </div>
</template>

<script setup>
import { computed } from "vue";

  const props = defineProps({
    showDialog: Boolean,
    title: String,
    content: Array,
  })
  const emits = defineEmits(['closeDialog'])

  const showDialog = computed({
    get() {
      return props.showDialog
    },
    set(value) {
      return value;
    }
  })

  function closeDialog() {
    emits('closeDialog');
  }

</script>

<style>

</style>
