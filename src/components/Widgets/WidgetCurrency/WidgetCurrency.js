import React, {useEffect, useState} from "react";

import "./WidgetCurrency.scss"

export default function WidgetCurrency({currency, currencyCode}) {

    const [usd, setUsd] = useState();
    const [eur, setEur] = useState();
    const [byn, setByn] = useState();

    useEffect(() => {
        setUsd((usd) => {return (currency.USD/currency[currencyCode]).toFixed(3)});
        setEur((eur) => {return (currency.EUR/currency[currencyCode]).toFixed(3)});
        setByn((byn) => {return (1/currency[currencyCode]).toFixed(3)});
    }, [currency, currencyCode]);

    function sellingConvert(currency) {
        if (currencyCode === 'MAD' || currencyCode === 'JPY' || currencyCode === 'BRL') {
            return (currency * 1.05).toFixed(3)
        }
        else return (currency * 1.003).toFixed(3)
    }

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
                        <td>{sellingConvert(usd)}</td>
                    </tr>
                    <tr>
                        <td>EUR</td>
                        <td>{currencyCode === 'EUR' ? '-' : eur}</td>
                        <td>{currencyCode === 'EUR' ? '-' : sellingConvert(eur)}</td>
                    </tr>
                    <tr>
                        <td>BYN</td>
                        <td>{byn}</td>
                        <td>{sellingConvert(byn)}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}
