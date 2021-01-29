const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const gitHubId = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", gitHubId);
  expect(e.github).toBe(gitHubId);
});

test("getRole() should return \"Engineer\"", () => {
  const employeeRole = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(employeeRole);
});

test("Can get GitHub username via getGithub()", () => {
  const gitHubId = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", gitHubId);
  expect(e.getGithub()).toBe(gitHubId);
});
