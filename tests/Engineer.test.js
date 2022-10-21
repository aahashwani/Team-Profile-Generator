// Import Employee class
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");


describe("Engineer", () => {
  
    describe("Engineer object instantiation", () => {
      it("Creates an object with name, id, email and github properties", () => {
        const engineer = new Engineer("Ironman", 2, "ironman@gmail.com", "Stark Industry");
//same as employee
        expect(engineer).toBeInstanceOf(Engineer);
        expect(engineer.name).toEqual("Ironman");
        expect(engineer.id).toEqual(2);
        expect(engineer.email).toEqual("ironman@gmail.com");
        //add a github check
        expect(engineer.github).toEqual("Stark Industry");
      });
    });
  
//same as employee
    describe("getName", () => {
      it("Should return the object's name property", () => {
        const engineer = new Engineer("Ironman", 2, "ironman@gmail.com", "Stark Industry");

        expect(engineer.getName()).toEqual("Ironman");
      });
    });
  
   
    describe("getId", () => {
      it("Should return the object's id property", () => {
        const engineer = new Engineer("Ironman", 2, "ironman@gmail.com", "Stark Industry");

        expect(engineer.getId()).toEqual(2);
      });
    });
  
  
    describe("getEmail", () => {
      it("Should return the object's email property", () => {
        const engineer = new Engineer("Ironman", 2, "ironman@gmail.com", "Stark Industry");

        expect(engineer.getEmail()).toEqual("ironman@gmail.com");
      });
    });

//add getGithub function test
    describe("getGithub", () => {
        it("Should return the object's github property", () => {
          const engineer = new Engineer("Ironman", 2, "ironman@gmail.com", "Stark Industry");

          expect(engineer.getGithub()).toEqual("Stark Industry");
        });
      });

    describe("getRole", () => {
      it("Should return the string 'Engineer'", () => {
        const engineer = new Engineer("Ironman", 2, "ironman@gmail.com", "Stark Industry");

        expect(engineer.getRole()).toEqual("Engineer");
      });
    });
  });