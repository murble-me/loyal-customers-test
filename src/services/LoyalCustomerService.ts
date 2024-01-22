import type { PageLog } from "@/types/PageLog";
import day1data from "../assets/json/day1.json";
import day2data from "../assets/json/day2.json";
import usersData from "../assets/json/users.json";
import type { User } from "@/types/Users";

export const getLoyalCustomers = (): Array<User> => {
  const loyalCustomerIds: Set<string> = new Set();

  const dataFromDay1 = getDataFromDay(day1data);

  day2data.forEach((view) => {
    if (dataFromDay1.has(view.CustomerId)) {
      const day1Pages = [...(dataFromDay1.get(view.CustomerId) as Set<number>)];

      if (day1Pages.length >= 2 || !day1Pages.includes(view.PageId)) {
        loyalCustomerIds.add(view.CustomerId);
      }
    }
  });

  const users = [...loyalCustomerIds].map((customerId) => {
    return usersData.find((user) => user.id === customerId) as User;
  });

  return users;
};

const getDataFromDay = (day: Array<PageLog>) => {
  const data: Map<string, Set<number>> = new Map();

  day.forEach((log) => {
    const customerPages = day
      .filter((item) => item.CustomerId === log.CustomerId)
      .map((x) => x.PageId);

    if (customerPages.length) {
      data.set(log.CustomerId, new Set(customerPages));
    }
  });

  return data;
};
