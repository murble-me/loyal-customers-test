<template>
  <nav
    :class="cn('flex items-center space-x-2 lg:space-x-2', $attrs.class ?? '')"
  >
    <RouterLink to="/" class="menu-item" active-class="active-menu-item">
      <div class="flex items-center space-x-3">
        <HomeIcon class="h-6 w-6" /> <span>Home</span>
      </div>
    </RouterLink>
    <RouterLink
      v-for="page in pages"
      :to="page.link"
      class="menu-item"
      active-class="active-menu-item"
    >
      {{ page.title }}
    </RouterLink>
  </nav>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";
import { HomeIcon } from "@radix-icons/vue";

const pages = [
  {
    title: "Day 1",
    link: "/day1",
  },
  {
    title: "Day 2",
    link: "/day2",
  },
  {
    title: "Loyal Customers",
    link: "/loyal",
  },
];
</script>

<style lang="css" scoped>
.active-menu-item {
  @apply bg-slate-200 text-primary;
}

.menu-item {
  @apply text-sm font-medium transition-colors hover:text-primary hover:bg-slate-200 px-4 py-2 rounded-lg text-muted-foreground;
}
</style>
