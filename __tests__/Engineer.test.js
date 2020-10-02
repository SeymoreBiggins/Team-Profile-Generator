const Engineer = require("../lib/Engineer.js")

test('Create GitHub account', () => {
  const testValue = "GitHubUser";
  const member = new Engineer("Bob", 123, "emailtest@email.com", testValue);
  expect(member.github).toBe(testValue);
});

test("getRole() to return \"Engineer\"", () => {
  const testValue = "Engineer";
  const member = new Engineer("Bob", 123, "emailtest@email.com", "GitHubUser");
  expect(member.getRole()).toBe(testValue);
});

test("getGithub() to return GitHub username", () => {
  const testValue = "GitHubUser";
  const member = new Engineer("Bob", 123, "emailtest@email.com", testValue);
  expect(member.getGithub()).toBe(testValue);
});