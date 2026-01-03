const message = 'Hello, World!\n'

const sumTwoValues = (a: number, b: number): number => a + b

const printHelloWorld = (): void => {
  process.stdout.write(message)
}

enum ExpenseTypeEnum {
  Dinner = 'dinner',
  Breakfast = 'breakfast',
  CarRental = 'car-rental',
}

class Expense {
  type: ExpenseTypeEnum
  amount: number
  constructor(type: ExpenseTypeEnum, amount: number) {
    this.type = type
    this.amount = amount
  }

  isItFoodExpense(): boolean {
    return this.type === ExpenseTypeEnum.Dinner || this.type === ExpenseTypeEnum.Breakfast
  }

  isItOverExpense(): boolean {
    return (
      (this.type == ExpenseTypeEnum.Dinner && this.amount > 5000) ||
      (this.type == ExpenseTypeEnum.Breakfast && this.amount > 1000)
    )
  }

  mealOverExpensesMarker(): string {
    return this.isItOverExpense() ? 'X' : ' '
  }

  getExpenseName(): string {
    return this.type
      .replace('-', ' ')
      .replace(/(^|\s+)\w/g, match => match.toUpperCase())
  }
}

class ExpenseReport {
  expenses: Expense[]
  mealExpenses = 0
  totalExpenses = 0
  constructor(expenses: Expense[]) {
    this.expenses = expenses
  }

  printTitle(): void {
    process.stdout.write('Expenses: ' + new Date().toISOString().substr(0, 10) + '\n')
  }


  getExpenseName(expense: Expense): string {
    let expenseName = ''
    switch (expense.type) {
      case 'dinner':
        expenseName = 'Dinner'
        break
      case 'breakfast':
        expenseName = 'Breakfast'
        break
      case 'car-rental':
        expenseName = 'Car Rental'
        break
      default:
    }
    return expenseName
  }

  printReport(): void {
    this.printTitle()

    this.calculateMealExpenses()

    this.calculateTotalExpenses()

    this.printExpenses()

    process.stdout.write('Meal Expenses: ' + this.mealExpenses + '\n')
    process.stdout.write('Total Expenses: ' + this.totalExpenses + '\n')
  }

  private printExpenses() {
    for (const expense of this.expenses) {
      this.printExpenseDetails(expense)
    }
  }

  private printExpenseDetails(expense: Expense) {
    process.stdout.write(
      expense.getExpenseName() + '\t' + expense.amount + '\t' + expense.mealOverExpensesMarker() + '\n',
    )
  }

  private calculateMealExpenses() {
    for (const expense of this.expenses) {
      if (expense.isItFoodExpense()) {
        this.mealExpenses += expense.amount
      }
    }
  }

  private calculateTotalExpenses() {
    for (const expense of this.expenses) {
      this.totalExpenses += expense.amount
    }
  }
}

export { sumTwoValues, printHelloWorld, ExpenseReport, Expense, ExpenseTypeEnum }
