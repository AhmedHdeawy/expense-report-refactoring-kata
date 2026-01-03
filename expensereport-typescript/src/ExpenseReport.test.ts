import { printHelloWorld, sumTwoValues, Expense, ExpenseReport } from './ExpenseReport'

describe(`ExpenseReport`, () => {
    it(`should keep its original behavior`, () => {
        let interceptedOutput = ""
        jest.spyOn(process.stdout, "write").mockImplementation((output: string): boolean => {
            interceptedOutput += output
            return true;
        })

      new ExpenseReport([new Expense('dinner', 5001)]).printReport()
        expect(interceptedOutput).toEqual(
          `Expenses: ${new Date().toISOString().substr(0, 10)}\nDinner\t5001\tX\nMeal Expenses: 5001\nTotal Expenses: 5001\n`,
        )
    })

  it(`should keep its original behavior for breakfast`, () => {
    let interceptedOutput = ''
    jest.spyOn(process.stdout, 'write').mockImplementation((output: string): boolean => {
      interceptedOutput += output
      return true
    })

    new ExpenseReport([new Expense('breakfast', 1003)]).printReport()
    expect(interceptedOutput).toEqual(
      `Expenses: ${new Date().toISOString().substr(0, 10)}\nBreakfast\t1003\tX\nMeal Expenses: 1003\nTotal Expenses: 1003\n`,
    )
  })
})

describe(`given I have this test suite`, () => {
    it(`should always output Hello, World!`, () => {
        //given
        let actualOutputData = ""
        jest.spyOn(process.stdout, "write").mockImplementation((data: string): boolean => {
            actualOutputData += data
            return true
        })
        const expectedOutputData = "Hello, World!\n"

        // when
        printHelloWorld()

        // then
        expect(actualOutputData).toEqual(expectedOutputData)
    })

    it(`should always do the correct sum`, () => {
        // given
        const a = 2, b = 3
        const expectedValue = 5

        // when
        const actualValue = sumTwoValues(a, b)

        // then
        expect(actualValue).toEqual(expectedValue)
    })
})
