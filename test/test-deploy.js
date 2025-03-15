const { ethers } = require("hardhat");
const { assert } = require("chai");

describe("SimpleStorage", function () {
  let simpleStorage, SimpleStorageFactory;

  beforeEach(async function () {
    SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await SimpleStorageFactory.deploy();
    // ❌ Remove simpleStorage.deployed();
  });

  it("should start with favorite number 0", async function () {
    const currentValue = await simpleStorage.retrieve();
    const expected = "0";
    assert.equal(currentValue.toString(), expected);
  });
  it("should update when we call store",async function(){
    const exp="7"
    const tx=await simpleStorage.store(exp)
    await tx.wait(1)
    const currentValue=await simpleStorage.retrieve()
    assert.equal(currentValue.toString(),exp)

  })
});
