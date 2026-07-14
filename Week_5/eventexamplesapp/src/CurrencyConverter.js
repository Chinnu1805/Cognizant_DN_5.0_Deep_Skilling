import React, { useState } from "react";

function CurrencyConvertor() {

    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("");

    function handleSubmit(event) {

        event.preventDefault();

        let euro = amount * 80;

        alert("Converting to Euro Amount is " + euro);

    }

    return (

        <div>

            <h1 style={{ color: "green" }}>
                Currency Convertor!!!
            </h1>

            <div>
                <label>Amount: </label>

                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>

            <br />

            <div>

                <label>Currency: </label>

                <input
                    type="text"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                />

            </div>

            <br />

            <button onClick={handleSubmit}>
                Submit
            </button>

        </div>

    );

}

export default CurrencyConvertor;