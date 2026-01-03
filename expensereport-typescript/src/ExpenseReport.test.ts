import { printHelloWorld, sumTwoValues, Expense, ExpenseReport, ExpenseTypeEnum } from './ExpenseReport'

describe(`ExpenseReport`, () => {
  const todayDate = new Date().toISOString().substr(0, 10)
  it(`should keep its original behavior`, () => {
    let interceptedOutput = ''
    jest.spyOn(process.stdout, 'write').mockImplementation((output: string): boolean => {
      interceptedOutput += output
      return true
    })

    new ExpenseReport([new Expense(ExpenseTypeEnum.Dinner, 5001)]).printReport()
    expect(interceptedOutput).toEqual(
      `Expenses: ${todayDate}\nDinner\t5001\tX\nMeal Expenses: 5001\nTotal Expenses: 5001\n`,
    )
  })

  it(`should keep its original behavior for breakfast`, () => {
    let interceptedOutput = ''
    jest.spyOn(process.stdout, 'write').mockImplementation((output: string): boolean => {
      interceptedOutput += output
      return true
    })

    new ExpenseReport([new Expense(ExpenseTypeEnum.Breakfast, 1003)]).printReport()
    expect(interceptedOutput).toEqual(
      `Expenses: ${todayDate}\nBreakfast\t1003\tX\nMeal Expenses: 1003\nTotal Expenses: 1003\n`,
    )
  })

  it(`should keep its original behavior for car-rental`, () => {
    let interceptedOutput = ''
    jest.spyOn(process.stdout, 'write').mockImplementation((output: string): boolean => {
      interceptedOutput += output
      return true
    })

    new ExpenseReport([new Expense(ExpenseTypeEnum.CarRental, 3000)]).printReport()
    expect(interceptedOutput).toEqual(
      `Expenses: ${todayDate}\nCar Rental\t3000\t \nMeal Expenses: 0\nTotal Expenses: 3000\n`,
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
      new Expense(ExpenseTypeEnum.Dinner, 4000),
      new Expense(ExpenseTypeEnum.Breakfast, 800),
      new Expense(ExpenseTypeEnum.CarRental, 2000),
      new Expense(ExpenseTypeEnum.Dinner, 6000),
    ]).printReport()
    expect(interceptedOutput).toEqual(
      `Expenses: ${todayDate}\nDinner\t4000\t \nBreakfast\t800\t \nCar Rental\t2000\t \nDinner\t6000\tX\nMeal Expenses: 10800\nTotal Expenses: 12800\n`,
    )
  })

  // add test for Add Lunch with an expense limit of 2000
  it(`should handle lunch expenses correctly`, () => {
    let interceptedOutput = ''
    jest.spyOn(process.stdout, 'write').mockImplementation((output: string): boolean => {
      interceptedOutput += output
      return true
    })

    new ExpenseReport([
      new Expense(ExpenseTypeEnum.Lunch, 1500),
    ]).printReport()
    expect(interceptedOutput).toEqual(
      `Expenses: ${todayDate}\nLunch\t1500\t \nMeal Expenses: 1500\nTotal Expenses: 1500\n`,
    )
  })

  it(`should handle lunch with over expense`, () => {
    let interceptedOutput = ''
    jest.spyOn(process.stdout, 'write').mockImplementation((output: string): boolean => {
      interceptedOutput += output
      return true
    })

    new ExpenseReport([
      new Expense(ExpenseTypeEnum.Lunch, 2500),
    ]).printReport()
    expect(interceptedOutput).toEqual(
      `Expenses: ${todayDate}\nLunch\t2500\tX\nMeal Expenses: 2500\nTotal Expenses: 2500\n`,
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
      `Expenses: ${todayDate}\nMeal Expenses: 0\nTotal Expenses: 0\n`,
    )
  })
})

describe(`given I have this test suite`, () => {
  it(`should always output Hello, World!`, () => {
    //given
    let actualOutputData = ''
    jest.spyOn(process.stdout, 'write').mockImplementation((data: string): boolean => {
      actualOutputData += data
      return true
    })
    const expectedOutputData = 'Hello, World!\n'

    // when
    printHelloWorld()

    // then
    expect(actualOutputData).toEqual(expectedOutputData)
  })

  it(`should always do the correct sum`, () => {
    // given
    const a = 2,
      b = 3
    const expectedValue = 5

    // when
    const actualValue = sumTwoValues(a, b)

    // then
    expect(actualValue).toEqual(expectedValue)
  })
})
