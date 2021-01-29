const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const schoolName = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", schoolName);
  expect(e.school).toBe(schoolName);
});

test("getRole() should return \"Intern\"", () => {
  const employeeRole = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(employeeRole);
});

test("Can get school via getSchool()", () => {
  const schoolName = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", schoolName);
  expect(e.getSchool()).toBe(schoolName);
});
