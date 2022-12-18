<script setup lang="ts">
import TallRedGift from "../assets/tall-red-gift.svg?component";
import BlueGift from "../assets/blue-gift.svg?component";
import SmallRedGift from "../assets/small-red-gift.svg?component";

defineProps<{
  name: string;
}>();
</script>

<template>
  <div>
    <TallRedGift v-if="name === 'tall-red-gift'" class="w-32" />
    <SmallRedGift v-else-if="name === 'small-red-gift'" class="w-32" />
    <BlueGift v-else-if="name === 'blue-gift'" class="w-32" />
  </div>
</template>
