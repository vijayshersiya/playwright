const {test,expect} = require('@playwright/test');

test("my first test", async({page})  =>{
expect(100).toBe(100)
})

test("my second test", async({page})=>{
    expect(100).toBe(101)
})


  test("my third test", async({page})=>{
      expect("this is my test cases".includes("my")).toBeTruthy()
  })

// test.only("my third test", async({page})=>{
//     expect("vijay shersiya").toContain("vijay")
// })
// test("my fourth test", async({page})=>{
//     expect(true).toBeTruthy()
// })

// test.skip("my fifth test", async({page})=>{
//     expect(true).toBeFalsy()
// })