import React from "react";

import "./WidgetCurrency.scss"

export default function WidgetCurrency({iso, currency}) {
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
                        <td>2.6073</td>
                        <td>2.615</td>
                    </tr>
                    <tr>
                        <td>EUR</td>
                        <td>2.6073</td>
                        <td>2.615</td>
                    </tr>
                    <tr>
                        <td>RU</td>
                        <td>2.6073</td>
                        <td>2.615</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}
