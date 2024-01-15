<template>
  <v-row>
    <v-col>
      <v-card v-if="character"
        class="ma-2 fixed-element"
        width="100%"
        height="100%">

          <template v-slot:title>
            <span>{{character.name}}</span>
            <v-icon class="float-right"
              @click="closeDialog">
              mdi-close-circle
            </v-icon>
          </template>

          <v-card-text>
            <span>{{character.name}} 的資訊</span>
          </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
  defineProps({
    character: Object
  })

  const emit = defineEmits(['closeDialog'])

  function closeDialog(){
    emit('closeDialog');
  }
</script>

<style>

</style>
