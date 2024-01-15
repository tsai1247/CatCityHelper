<template>
  <v-row>
    <v-col>
      <v-card v-if="character"
        class="ma-2 fixed-element"
        width="100%"
        height="100%">

          <template v-slot:title>
            <!-- name -->
            <span class="font-weight-bold text-h5 mr-1">{{character.name}}</span>

            <!-- attribute -->
            <v-tooltip
              location="top"
            >
              <template v-slot:activator="{ props }">
                <span v-show="character.attribute">
                  <v-icon size="x-small"
                    v-bind="props"
                    :color="character.attribute?.color">
                    mdi-circle
                  </v-icon>
                </span>
              </template>
              <span>{{ character.attribute?.name }}</span>
            </v-tooltip>

            <!-- particle -->
            <v-tooltip
              location="top"
            >
              <template v-slot:activator="{ props }">
                <span v-show="character.particle">
                  <v-icon size="x-small"
                    v-bind="props">
                    {{ character.particle?.icon }}
                  </v-icon>
                </span>
              </template>
              <span>{{ character.particle?.name }}</span>
            </v-tooltip>


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
