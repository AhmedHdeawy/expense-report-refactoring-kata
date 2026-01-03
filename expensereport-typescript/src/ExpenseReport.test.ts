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


  it(`should keep its original behavior for car-rental`, () => {
    let interceptedOutput = ''
    jest.spyOn(process.stdout, 'write').mockImplementation((output: string): boolean => {
      interceptedOutput += output
      return true
    })

    new ExpenseReport([new Expense('car-rental', 3000)]).printReport()
    expect(interceptedOutput).toEqual(
      `Expenses: ${new Date().toISOString().substr(0, 10)}\nCar Rental\t3000\t \nMeal Expenses: 0\nTotal Expenses: 3000\n`,
    )
  })

  // add tests for multiple expenses
  it(`should handle multiple expenses correctly`, () => {
    let interceptedOutput = ''
    jest.spyOn(process.stdout, 'write').mockImplementation((output: string): boolean => {
      interceptedOutput += output
      return true
    })

    new ExpenseReport([
      new Expense('dinner', 4000),
      new Expense('breakfast', 800),
      new Expense('car-rental', 2000),
      new Expense('dinner', 6000),
    ]).printReport()
    expect(interceptedOutput).toEqual(
      `Expenses: ${new Date().toISOString().substr(0, 10)}\nDinner\t4000\t \nBreakfast\t800\t \nCar Rental\t2000\t \nDinner\t6000\tX\nMeal Expenses: 10800\nTotal Expenses: 12800\n`,
    )
  })

  // add test for no expenses
  it(`should handle no expenses correctly`, () => {
    let interceptedOutput = ''
    jest.spyOn(process.stdout, 'write').mockImplementation((output: string): boolean => {
      interceptedOutput += output
      return true
    })

    new ExpenseReport([]).printReport()
    expect(interceptedOutput).toEqual(
      `Expenses: ${new Date().toISOString().substr(0, 10)}\nMeal Expenses: 0\nTotal Expenses: 0\n`,
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
