<script setup lang="ts">
import MainNav from "@/components/MainNav.vue";
</script>

<template>
  <div class="flex-col md:flex h-full">
    <div class="border-b top-0 left-0 bg-white">
      <div class="flex h-16 items-center px-4">
        <MainNav class="mx-6" />
      </div>
    </div>
    <div class="flex-1 space-y-4 p-8 pt-6 overflow-y-scroll">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
