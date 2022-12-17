import type { Person } from "../types/Person";
import type { ListItem } from "../types/ListItem";

export const hasDuplicateInArray = (arr: string[]): boolean => {
  return new Set(arr).size !== arr.length;
};

export const hasDuplicates = (list: Person[]): boolean => {
  const nameList: string[] = list.map((person: Person) => person.name);
  const emailList: string[] = list.map((person: Person) => person.email);
  return hasDuplicateInArray(nameList) || hasDuplicateInArray(emailList);
};

export const matchPeople = (people: Person[]): ListItem[] => {
  let pool = [...people];
  pool = pool.sort(() => 0.5 - Math.random());

  const secretSantaList: ListItem[] = [];
  people.forEach((person: Person) => {
    const secretSanta: Person | undefined = pool.find(
      (poolPerson) => poolPerson.email !== person.email
    );

    if (secretSanta) {
      // Successful match!
      // Removing secret santa from the pool.
      pool = pool.filter(
        (poolPerson) => poolPerson.email !== secretSanta.email
      );
      secretSantaList.push({ receiver: person, giver: secretSanta });
    } else {
      // The last person left in the pool is the giver themselve!
      // In this case, we swap them out with the last successfully assigned pair.
      const lastSecretSanta = secretSantaList[0];
      const newSecretSantaIndex = secretSantaList.findIndex(
        (lastPerson: ListItem) => {
          return lastPerson.email !== lastSecretSanta.giver.email;
        }
      );
      secretSantaList.push({
        receiver: person,
        giver: secretSantaList[newSecretSantaIndex].giver,
      });
      secretSantaList[newSecretSantaIndex].secretSanta = person;
    }
  });

  return secretSantaList;
};
