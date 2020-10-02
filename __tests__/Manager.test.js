const Manager = require("../lib/Manager.js");

test('Create office number', () => {
    const testValue = 321;
    const member = new Manager("Bob", 123, "emailtest@email.com", testValue);
    expect(member.officeNumber).toBe(testValue);
});

test('getRole() to return \"Manager\"', () => {
    const testValue = "Manager";
    const member = new Manager("Bob", 123, "emailtest@email.com", 321);
    expect(member.getRole()).toBe(testValue);
});

test('getOffice() to return office number', () => {
    const testValue = 321;
    const member = new Manager("Bob", 123, "emailtest@email.com", testValue);
    expect(member.getOfficeNumber()).toBe(testValue);
});