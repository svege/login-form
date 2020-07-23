import { SubmissionError } from 'redux-form';
import { IExistingUser } from '../../types/types';

function authenticate(values: IExistingUser) {
  const existingUsers = JSON.parse(localStorage.getItem('values') as string);
  const filtered: IExistingUser | undefined = existingUsers.find(
    (item: { username: string }) => item.username === values.username
  );

  if (
    typeof filtered === 'undefined' ||
    filtered.password !== values.password
  ) {
    throw new SubmissionError({
      _error: 'Wrong credentials'
    });
  }

  return true;
}

export default authenticate;
