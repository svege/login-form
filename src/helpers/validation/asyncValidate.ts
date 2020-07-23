import { INewUser } from '../../types/types';

const MIN = 0;
const MAX = 999;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function randomInteger(min: number, max: number): number {
  const rand: number = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const generateUsername = (username: string, usernames: string[]): string => {
  const arr = [
    (username + randomInteger(MIN, MAX)).toString(),
    (username + randomInteger(MIN, MAX)).toString(),
    (username + randomInteger(MIN, MAX)).toString()
  ];

  const filtered = arr.filter((item) => !usernames.includes(item));
  return filtered.join(', ');
};

const asyncValidate = (values: INewUser) => {
  const existingUsers = JSON.parse(localStorage.getItem('values') as string);
  const existingUsernames = existingUsers.map(
      (item: { username: string }) => item.username.toLowerCase()
  );

  const suggestions: string = generateUsername(
      values.username,
      existingUsernames
  );

  return sleep(100).then(() => {
      if (existingUsernames.includes(values.username.toLowerCase())) {
        throw Object.assign({
          Error,
          username: `That username is taken. Try these: ${suggestions}`
        });
      }
  });
};

export default asyncValidate;
