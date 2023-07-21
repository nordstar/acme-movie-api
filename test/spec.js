/**
 * STEP 1
 * Create a basic test to pass in the test folder
 */
const { expect } = require("chai");
//const server = require("supertest")(require("../index"));
//const { syncAndSeed } = require("../db/index");

it("shows that true is true", () => {
  expect(true).to.be.equal(true);
});