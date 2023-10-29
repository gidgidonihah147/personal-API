import hello from "../utils/hello.js";

it("Should say Tristin",()=>{
    const helloString=hello();
    console.log(helloString);

    expect(helloString).toBe("Tristin");
})