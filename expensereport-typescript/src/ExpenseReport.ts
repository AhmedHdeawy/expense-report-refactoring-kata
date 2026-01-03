const message = 'Hello, World!\n';

const sumTwoValues = (a: number, b: number): number => a + b

const printHelloWorld = (): void => {
  process.stdout.write(message);
}

type ExpenseType = "dinner" | "breakfast" | "car-rental"

class Expense {
  type: ExpenseType
  amount: number
  constructor(type: ExpenseType, amount: number) {
    this.type = type
    this.amount = amount
  }
}

class ExpenseReport {
  expenses: Expense[]
  constructor(expenses: Expense[]) {
    this.expenses = expenses
  }


  title = ():boolean => process.stdout.write("Expenses: " + new Date().toISOString().substr(0, 10) + "\n")

  getExpenseName(expense: Expense, expenseName: string): string {
    switch (expense.type) {
      case "dinner":
        expenseName = "Dinner"
        break
      case "breakfast":
        expenseName = "Breakfast"
        break
      case "car-rental":
        expenseName = "Car Rental"
        break
    }
    return expenseName
  }

  printReport(): void {
    let totalExpenses = 0
    let mealExpenses = 0

    this.title()


    for (const expense of this.expenses) {
      if (expense.type == "dinner" || expense.type == "breakfast") {
        mealExpenses += expense.amount
      }

      let expenseName = ""
      expenseName = this.getExpenseName(expense, expenseName)

      const mealOverExpensesMarker = expense.type == "dinner" && expense.amount > 5000 || expense.type == "breakfast" && expense.amount > 1000 ? "X" : " "

      process.stdout.write(expenseName + "\t" + expense.amount + "\t" + mealOverExpensesMarker + "\n")

      totalExpenses += expense.amount
    }

    process.stdout.write("Meal Expenses: " + mealExpenses + "\n")
    process.stdout.write("Total Expenses: " + totalExpenses + "\n")
  }

}


export { sumTwoValues, printHelloWorld, ExpenseReport, Expense, ExpenseType }
