const Intern = require("../lib/Intern.js");

test('Create school', () => {
    const testValue = "University of Silly Walks";
    const member = new Intern("Bob", 123, "emailtest@email.com", testValue);
    expect(member.school).toBe(testValue);
});

test('getRole() to return \"Intern\"', () => {
    const testValue = "Intern";
    const member = new Intern("Bob", 123, "emailtest@email.com", "University of Silly Walks");
    expect(member.getRole()).toBe(testValue);
});

test('getSchool()', () => {
    const testValue = "University of Silly Walks";
    const member = new Intern("Bob", 123, "emailtest@email.com", testValue);
    expect(member.getSchool()).toBe(testValue);
});