const message = 'Hello, World!\n'

const sumTwoValues = (a: number, b: number): number => a + b

const printHelloWorld = (): void => {
  process.stdout.write(message)
}

type ExpenseType = 'dinner' | 'breakfast' | 'car-rental'

class Expense {
  type: ExpenseType
  amount: number
  constructor(type: ExpenseType, amount: number) {
    this.type = type
    this.amount = amount
  }

  isItFoodExpense(): boolean {
    return this.type === 'dinner' || this.type === 'breakfast'
  }

  isItOverExpense(): boolean {
    return (this.type == 'dinner' && this.amount > 5000) ||
           (this.type == 'breakfast' && this.amount > 1000)
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

    for (const expense of this.expenses) {
      const expenseName = this.getExpenseName(expense)

      const mealOverExpensesMarker = expense.isItOverExpense() ? 'X' : ' '

      this.printExpenseDetails(expenseName, expense, mealOverExpensesMarker)
    }

    process.stdout.write('Meal Expenses: ' + this.mealExpenses + '\n')
    process.stdout.write('Total Expenses: ' + this.totalExpenses + '\n')
  }

  private printExpenseDetails(expenseName: string, expense: Expense, mealOverExpensesMarker: string) {
    process.stdout.write(
      expenseName + '\t' + expense.amount + '\t' + mealOverExpensesMarker + '\n',
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

export { sumTwoValues, printHelloWorld, ExpenseReport, Expense, ExpenseType }
