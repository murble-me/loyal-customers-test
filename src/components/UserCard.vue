<template>
  <Card class="w-[300px]">
    <CardHeader>
      <div class="flex flex-row justify-between">
        <CardTitle>{{ name }}</CardTitle>
        <img
          v-if="gender === 'male'"
          src="../assets/icons/male.svg"
          class="h-6"
        />
        <img v-else src="../assets/icons/female.svg" class="h-6" />
      </div>
      <CardDescription>{{ email }}</CardDescription>
    </CardHeader>
    <CardContent class="text-justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, error.
    </CardContent>
    <CardFooter>
      <div class="flex items-center">
        <span class="font-bold mr-2">Phone:</span>

        <a :href="`tel:${phone}`" class="cursor-pointer flex items-center">
          <MobileIcon class="w-5 h-5" />
          <span>{{ phone }}</span>
        </a>
      </div>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MobileIcon } from "@radix-icons/vue";

defineProps<{
  name: string;
  gender: "female" | "male";
  email: string;
  phone: string;
}>();
</script>
