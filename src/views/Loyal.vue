<template>
  <div class="loyal-grid">
    <UserCard
      v-for="customer in loyalCustomers"
      :name="customer.name"
      :email="customer.email"
      :gender="customer.gender"
      :phone="customer.phone"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getLoyalCustomers } from "../services/LoyalCustomerService";
import type { User } from "@/types/Users";
import UserCard from "@/components/UserCard.vue";

const loyalCustomers = ref<Array<User>>([]);

onMounted(() => {
  loyalCustomers.value = getLoyalCustomers();
  loyalCustomers.value.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
});
</script>

<style scoped>
.loyal-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 30px;
}
</style>
