import React from "react";

import "./WidgetCurrency.scss"

export default function WidgetCurrency({iso, currency}) {

    const [curCode, setCurCode] = useState('');
    const [money, setMoney] = useState();

    useEffect(() => {
        if (iso === 'FRA' || iso === 'DEU' || iso === 'NLD') {
            setCurCode('EUR');
            setMoney((prev) => {return 1})
        }
        if (iso === 'AUS') {
            setCurCode('AUD');
            setMoney((prev) => {return 1})
        }
    }, [iso]);

    console.log(curCode)

    return (
        <section className="wg-currency">
            <h3 className="wg-currency__title">local currency rate in {iso}</h3>
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
                        <td>2.6073</td>
                        <td>2.615</td>
                    </tr>
                    <tr>
                        <td>EUR</td>
                        <td>{money}</td>
                        <td>{money}</td>
                    </tr>
                    <tr>
                        <td>BYN</td>
                        <td>{currency[curCode]}</td>
                        <td>{currency[curCode]}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}
