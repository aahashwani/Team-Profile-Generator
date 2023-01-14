// Import Employee class
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");


describe("Manager", () => {
  
  describe("Creating Manager Object", () => {
    it("Creates an object with the information for name, id, email and officeNumber", () => {
        const manager = new Manager("Nick Fury", 3, "nickfury@gmail.com", 99);
    
        //same as employee
        expect(manager).toBeInstanceOf(Manager);
        expect(manager.name).toEqual("Nick Fury");
        expect(manager.id).toEqual(3);
        expect(manager.email).toEqual("nickfury@gmail.com");
        //add a officeNumber check
        expect(manager.officeNumber).toEqual(99);
    });
  });

//same as employee
  describe("getName", () => {
    it("Should return the object's name property", () => {
        const manager = new Manager("Nick Fury", 3, "nickfury@gmail.com", 99);
        expect(manager.getName()).toEqual("Nick Fury");
    });
  });

 
  describe("getId", () => {
    it("Should return the object's id property", () => {
        const manager = new Manager("Nick Fury", 3, "nickfury@gmail.com", 99);
        expect(manager.getId()).toEqual(3);
    });
  });


  describe("getEmail", () => {
    it("Should return the object's email property", () => {
        const manager = new Manager("Nick Fury", 3, "nickfury@gmail.com", 99);
        expect(manager.getEmail()).toEqual("nickfury@gmail.com");
    });
  });

//add getOffice function test
  describe("getOffice", () => {
    it("Should return the object's officeNumber property", () => {
        const manager = new Manager("Nick Fury", 3, "nickfury@gmail.com", 99);
        expect(manager.getOfficeNumber()).toEqual(99);
    });
  });

  describe("getRole", () => {
    it("Should return the string 'Manager'", () => {
        const manager = new Manager("Nick Fury", 3, "nickfury@gmail.com", 99);
        expect(manager.getRole()).toEqual("Manager");
    });
  });
});