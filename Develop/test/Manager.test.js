const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const officeNumber = 100;
  const e = new Manager("Foo", 1, "test@test.com", officeNumber);
  expect(e.officeNumber).toBe(officeNumber);
});

test('getRole() should return "Manager"', () => {
  const employeeRole = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(employeeRole);
});

test("Can get office number via getOffice()", () => {
  const officeNumber = 100;
  const e = new Manager("Foo", 1, "test@test.com", officeNumber);
  expect(e.getOfficeNumber()).toBe(officeNumber);
});
