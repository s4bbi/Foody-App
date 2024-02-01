import { sum } from "../components/sum";

test("Sum Function should calculate sum of two numbers", 
() => {
    const result = sum(2,5)

    expect(result).toBe(7)
})