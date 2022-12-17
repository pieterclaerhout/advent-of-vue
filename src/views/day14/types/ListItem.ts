import type { Person } from "./Person";

export type ListItem = {
  giver: Person;
  receiver: Person;
  secretSanta?: Person;
  email?: string;
};
