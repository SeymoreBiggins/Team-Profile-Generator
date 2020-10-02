const Employee = require("../lib/Employee.js");

test("Create new employee instance", () => {
  const member = new Employee();
  expect(typeof(member)).toBe("object");
})

test('Create name via constructor arguments', () => {
  const name = "Bob";
  const member = new Employee(name);
  expect(member.name).toBe(name);
});

test('Create id via constructor arguments', () => {
  const testValue = 123;
  const member = new Employee("Bob", testValue);
  expect(member.id).toBe(testValue);
});

test('Create email via constructor arguments', () => {
  const testValue = "emailtest@email.com";
  const member = new Employee("Bob", 123, testValue);
  expect(member.email).toBe(testValue);
});

test('Create getName()', () => {
  const testValue = "Bob";
  const member = new Employee(testValue);
  expect(member.getName()).toBe(testValue);
});

test('Create getId()', () => {
  const testValue = 123;
  const member = new Employee("Bob", testValue);
  expect(member.getId()).toBe(testValue);
});

test('Create getEmail()', () => {
  const testValue = "email@test.com";
  const member = new Employee("Bob", 123, testValue);
  expect(member.getEmail()).toBe(testValue);
});

test('Create getRole()', () => {
  const testValue = "Employee";
  const member = new Employee("Bob", 123, "email@test.com");
  expect(member.getRole()).toBe(testValue);
});