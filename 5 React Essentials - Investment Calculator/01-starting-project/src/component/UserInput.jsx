import { use, useState } from "react";


export default function UserInput({ userinfo, update }) {
    
    
    return (
        <section id="user-input" >
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number"
                        required
                        value={userinfo.initialInvestment}
                        onChange={(event) => update('initialInvestment', event.target.value)}>
                    </input>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number"
                        required
                        value={userinfo.annualInvestment}
                        onChange={(event) => update('annualInvestment', event.target.value)}>
                    </input>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number"
                        required
                        value={userinfo.expectedReturn}
                        onChange={(event) => update('expectedReturn', event.target.value)}>
                    </input>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number"
                        required
                        value={userinfo.duration}
                        onChange={(event) => update('duration', event.target.value)}>
                    </input>
                </p>
            </div>

        </section>
    )
}