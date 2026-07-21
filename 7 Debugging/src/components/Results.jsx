import { calculateInvestmentResults, formatter } from '../util/investment.js';


// const results = [];//so whenever the UserInput changes in this case,the other code in this file,so the creation of this array, will not be re-executed, that's still only executed once. And therefore what's happening here is that an array gets created and then inside of the calculateInvestmentResults function, more and more items are being added to one and the same array in memory because the array is never reset or anything like this.That's why we should take this code and move it backinto the component function so that a new array is recreated
//every time this component function is executed.And with that, we can see that if we reload this app,this error goes away and there is no error in the console.
export default function Results({ input }) {
  const results = [];
  calculateInvestmentResults(input, results);
  if(results.length===0){
    return <p className="center">Invalid Data Provided</p>
  }
  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
