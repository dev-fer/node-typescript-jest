import { User } from '@models/User';

test('is shoul be ok', () => {
  const user = new User();

  user.name = 'Felipe';

  expect(user.name).toEqual('Felipe');
});
