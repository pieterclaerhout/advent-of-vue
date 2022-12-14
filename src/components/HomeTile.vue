<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();

defineProps({
  routeName: String,
});

const goToDay = (routeName: string | undefined) => {
  router.push({ name: routeName });
};
</script>

<template>
  <div class="btn-primary" @click="goToDay(routeName)">
    <slot />
  </div>
</template>
