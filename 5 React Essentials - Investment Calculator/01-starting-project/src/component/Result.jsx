import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";


export default function Result({ userinfo }) {
    const result = calculateInvestmentResults(userinfo);
    console.log(result)
    return (
        <section >
            <table id="result">
                {/* {result.map((item)=>{
          return <p>{ item.year}</p>
        })} */}
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
                    {result.map((data) => {
                        let investedCapital=
                            userinfo.initialInvestment
                            +data.year*data.annualInvestment;
                        let totalInterest=
                            data.valueEndOfYear-investedCapital;
                        return <tr key={data.year}>
                            <td>{ data.year}</td>
                            <td>{formatter.format(data.valueEndOfYear)}</td>
                            <td>{formatter.format(data.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(investedCapital)}</td>
                        </tr>
                    })}

                </tbody>
            </table>

        </section>
    )

}