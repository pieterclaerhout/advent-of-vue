<script lang="ts" setup>
import ChristmasPresent from "../../components/ChristmasPresent.vue";
import ChristmasTreeWithPresents from "../../components/ChristmasTreeWithPresents.vue";
import { ref } from "vue";

const presents = ref<string[]>([
  "small-red-gift",
  "blue-gift",
  "tall-red-gift",
]);

const underTheTree = ref<string[]>([]);

const startDrag = (evt: DragEvent, index: string) => {
  if (!evt.dataTransfer) {
    return;
  }
  evt.dataTransfer.dropEffect = "move";
  evt.dataTransfer.effectAllowed = "move";
  evt.dataTransfer.setData("index", index);
};

const onDrop = (evt: DragEvent) => {
  const index: number | undefined = evt.dataTransfer?.getData("index") as
    | number
    | undefined;
  if (!index) {
    return;
  }
  underTheTree.value.push(presents.value[index]);
  presents.value.splice(index, 1);
};
</script>

<template>
  <PageTitle>Drag the presents under the tree!</PageTitle>
  <ChristmasTreeWithPresents
    :presents="underTheTree"
    class="mt-16"
    @drop="onDrop"
    @dragover.prevent
    @dragenter.prevent
  />
  <div class="pt-32 mt-32 bg-gray-100 w-full justify-center flex-1">
    <div v-auto-animate class="flex items-end justify-center">
      <ChristmasPresent
        v-for="(p, index) in presents"
        :key="p"
        draggable="true"
        :name="p"
        @dragstart="startDrag($event, `${index}`)"
      />
    </div>
  </div>
</template>
