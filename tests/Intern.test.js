// Import Employee class
const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern", () => {
  
  describe("Intern object instantiation", () => {
    it("Creates an object with name, id,email and school properties", () => {
        const intern = new Intern("Spider Man", 4, "spiderman@gmail.com", "Midtown High School");
    
        //same as employee
        expect(intern).toBeInstanceOf(Intern);
        expect(intern.name).toEqual("Spider Man");
        expect(intern.id).toEqual(4);
        expect(intern.email).toEqual("spiderman@gmail.com");
        //add a school check
        expect(intern.school).toEqual("Midtown High School");
    });
  });

  //same as employee
  describe("getName", () => {
    it("Should return the object's name property", () => {
        const intern = new Intern("Spider Man", 4, "spiderman@gmail.com", "Midtown High School");
        expect(intern.getName()).toEqual("Spider Man");
    });
  });

 
  describe("getId", () => {
    it("Should return the object's id property", () => {
        const intern = new Intern("Spider Man", 4, "spiderman@gmail.com", "Midtown High School");
        expect(intern.getId()).toEqual(4);
    });
  });


  describe("getEmail", () => {
    it("Should return the object's email property", () => {
        const intern = new Intern("Spider Man", 4, "spiderman@gmail.com", "Midtown High School");
        expect(intern.getEmail()).toEqual("spiderman@gmail.com");
    });
  });

  //add getSchool function test
  describe("getSchool", () => {
    it("Should return the object's school property", () => {
        const intern = new Intern("Spider Man", 4, "spiderman@gmail.com", "Midtown High School");
        expect(intern.getSchool()).toEqual("Midtown High School");
    });
  });

  describe("getRole", () => {
    it("Should return the string 'Intern'", () => {
        const intern = new Intern("Spider Man", 4, "spiderman@gmail.com", "Midtown High School");
        expect(intern.getRole()).toEqual("Intern");
    });
  });
});