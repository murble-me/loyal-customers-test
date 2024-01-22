<template>
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead class="w-[70px]"> # </TableHead>
        <TableHead class="w-[130px]"> Date </TableHead>
        <TableHead class="w-[220px]"> CustomerId </TableHead>
        <TableHead> PageId </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="(item, i) in day1data" :key="i">
        <TableCell class="font-medium text-[16px]"> {{ i + 1 }} </TableCell>
        <TableCell> {{ formattedDate(item.Date) }} </TableCell>
        <TableCell> {{ item.CustomerId }}</TableCell>
        <TableCell> {{ item.PageId }} </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>

<script setup lang="ts">
import day1data from "../assets/json/day1.json";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const formattedDate = (date: string) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};
</script>
