import { use, useState } from "react";


export default function UserInput({ userInput, onchange }) {
    
    
    return (
        <section id="user-input" >
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number"
                        required
                        value={userInput.initialInvestment}
                        onChange={(event) => onchange('initialInvestment', event.target.value)}>
                    </input>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number"
                        required
                        value={userInput.annualInvestment}
                        onChange={(event) => onchange('annualInvestment', event.target.value)}>
                    </input>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number"
                        required
                        value={userInput.expectedReturn}
                        onChange={(event) => onchange('expectedReturn', event.target.value)}>
                    </input>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number"
                        required
                        value={userInput.duration}
                        onChange={(event) => onchange('duration', event.target.value)}>
                    </input>
                </p>
            </div>

        </section>
    )
}