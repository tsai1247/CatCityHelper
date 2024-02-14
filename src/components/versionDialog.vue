<template>
  <div>
    <v-dialog v-model="showDialog"
      width="600px" max-height="400px">
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
                <v-data-table
                  :headers="headers"
                  :items="list">
                  <template v-slot:bottom>
                    <div></div>
                  </template>
                </v-data-table>
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
    list: Array,
  })
  const emits = defineEmits(['closeDialog'])

  const showDialog = computed(() => {
    return props.showDialog
  })

  function closeDialog() {
    emits('closeDialog');
  }

  const headers = [
    { title: '版本號', value: 'version', width: '115px' },
    { title: '詳細資訊', value: 'description', width: 'auto'},
  ]

</script>

<style>

</style>
