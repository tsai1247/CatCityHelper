<template>
  <div>
    <v-dialog v-model="showDialog"
      width="60%" max-height="100%">
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
                <v-list lines="one">
                  <v-list-item
                    v-for="(item, index) in list"
                    @click="openDescriptionDialog(item)"
                    :key="index"
                  >
                    <v-list-item-title>
                      <v-tooltip
                        location="right"
                        v-if="item.description"
                      >
                        <template v-slot:activator="{ props }">
                          <span v-bind="props">
                            <span v-if="item.version">v</span>{{ item.version }}
                            {{ item.title }}
                          </span>
                        </template>
                        <div
                          v-for="(item, index) in item.description"
                          :key="index"
                        >
                          {{ item }}
                        </div>
                      </v-tooltip>
                      <span v-else>
                        <span v-if="item.version">v</span>{{ item.version }}
                        {{ item.title }}
                      </span>
                    </v-list-item-title>
                    <v-list-item-subtitle >
                      <div v-if="item.description?.length">
                        {{ item.description[0] }}
                      </div>
                    </v-list-item-subtitle>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
        </template>
    </v-dialog>
    <version-description-dialog
      :showDialog="showDescriptionDialog"
      :title="descriptionTitle"
      :content="descriptionContent"
      v-on:close-dialog="closeDescriptionDialog">
    </version-description-dialog>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import versionDescriptionDialog from "./versionDescriptionDialog.vue";

  const props = defineProps({
    showDialog: Boolean,
    title: String,
    list: Array,
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


  const showDescriptionDialog = ref(false);
  const descriptionTitle = ref("");
  const descriptionContent = ref([]);

  function closeDescriptionDialog() {
    showDescriptionDialog.value = false;
  }

  function openDescriptionDialog(item) {
    if(item.description) {
      descriptionTitle.value = `${item.version?'v':''}${item.version}${item.title}`;
      descriptionContent.value = item.description;
      showDescriptionDialog.value = true;
    }
  }

</script>

<style>

</style>
