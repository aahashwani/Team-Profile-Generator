// Import Employee class
const Employee = require("../lib/Employee");

describe("Employee", () => {
  
  describe("Employee ", () => {
    it("Creates an object with name, id, and email properties", () => {
      const employee = new Employee("Captain America", 1, "captainamerica@gmail.com");

      expect(employee).toBeInstanceOf(Employee);
      expect(employee.name).toEqual("Captain America");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("captainamerica@gmail.com");
    });
  });

  
  describe("getName", () => {
    it("Should return the object's name property", () => {

      const employee = new Employee("Captain America", 1, "captainamerica@gmail.com");

      expect(employee.getName()).toEqual("Captain America");
    });
  });

 
  describe("getId", () => {
    it("Should return the object's id property", () => {
      const employee = new Employee("Captain America", 1, "captainamerica@gmail.com");

      expect(employee.getId()).toEqual(1);
    });
  });


  describe("getEmail", () => {
    it("Should return the object's email property", () => {
      const employee = new Employee("Captain America", 1, "captainamerica@gmail.com");

      expect(employee.getEmail()).toEqual("captainamerica@gmail.com");
    });
  });


  describe("getRole", () => {
    it("Should return the string 'Employee'", () => {
      const employee = new Employee("Captain America", 1, "captainamerica@gmail.com");

      expect(employee.getRole()).toEqual("Employee");
    });
  });
});