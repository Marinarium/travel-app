import React from "react";

import "./WidgetCurrency.scss"

export default function WidgetCurrency({iso, currency, currency_code}) {

    const [usd, setUsd] = useState();
    const [eur, setEur] = useState();
    const [byn, setByn] = useState();

    console.log(iso)


    useEffect(() => {
/*        if (iso === 'FRA' || iso === 'DEU' || iso === 'NLD') {
            converting();
        }
        if (iso === 'AUS') {
            converting();
        }
        if (iso === 'MAR') {
            converting();
        }
        if (iso === 'JPN') {
            converting();
        }
        if (iso === 'BRA') {
            converting();
        }
        if (iso === 'CAN') {
            converting();
        }*/

        setUsd((usd) => {return (currency.USD/currency[currency_code]).toFixed(3)});
        setEur((eur) => {return (currency.EUR/currency[currency_code]).toFixed(3)});
        setByn((byn) => {return (1/currency[currency_code]).toFixed(3)});

    }, [iso, currency, currency_code]);

    console.log(usd, eur, byn);

    return (
        <section className="wg-currency">
            <h3 className="wg-currency__title">local currency rate</h3>
            <table className="wg-currency__table">
                <thead>
                    <tr>
                        <th>currency</th>
                        <th>buying</th>
                        <th>selling</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>USD</td>
                        <td>{usd}</td>
                        <td>{usd}</td>
                    </tr>
                    <tr>
                        <td>EUR</td>
                        <td>{eur}</td>
                        <td>{eur}</td>
                    </tr>
                    <tr>
                        <td>BYN</td>
                        <td>{byn}</td>
                        <td>{byn}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}
