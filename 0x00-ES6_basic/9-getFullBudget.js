import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    income: budget.income,
    gdp: budget.gdp,
    capita: budget.capita,
    getIncomeInDollars: (income) => `$${income}`,
    getIncomeInEuros: (income) => `${income} euros`,
  };

  return fullBudget;
}
