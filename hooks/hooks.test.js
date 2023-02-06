import { afterAll, afterEach, beforeAll, beforeEach, expect, it } from 'vitest';

import { User } from './hooks';

let testEmail = 'test@test.com';
let user = new User(testEmail);

beforeAll(() => {
  console.log('beforeAll()')
});

beforeEach(() => {
  testEmail = 'test@test.com';
   user = new User(testEmail);
  console.log('beforeEach')
   
});
afterAll(() => {
  console.log('afterAll')
});
afterEach(() => {
  
  console.log('afterEach')
});

it('should update the email', () => {
  
  const newTestEmail = 'test2@test.com';

  
  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

it.concurrent('should have an email property', () => {
  //const testEmail = 'test@test.com';

  const user = new User(testEmail);

  expect(user).toHaveProperty('email');
});

it.concurrent('should store the provided email value', () => {
  

  expect(user.email).toBe(testEmail);
});

it('should clear the email', () => {
  
  user.clearEmail();

  expect(user.email).toBe('');
});

it('should still have an email property after clearing the email', () => {
  
  user.clearEmail();

  expect(user).toHaveProperty('email');
});
