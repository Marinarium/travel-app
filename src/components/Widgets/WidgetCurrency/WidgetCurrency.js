import React, {useEffect, useState} from "react";

import "./WidgetCurrency.scss";
import {langTextWidgetCurrency as langText} from "../../../services/langComponents";
import Loader from "../../Loader/Loader";

export default function WidgetCurrency({currency, currencyCode, language, isLoading}) {
  const [usd, setUsd] = useState();
  const [eur, setEur] = useState();
  const [byn, setByn] = useState();

  useEffect(() => {
    setUsd((usd) => {
      return (currency.USD / currency[currencyCode]).toFixed(3);
    });
    setEur((eur) => {
      return (currency.EUR / currency[currencyCode]).toFixed(3);
    });
    setByn((byn) => {
      return (1 / currency[currencyCode]).toFixed(3);
    });
  }, [currency, currencyCode]);

  function sellingConvert(currency) {
    if (
      currencyCode === "MAD" ||
      currencyCode === "JPY" ||
      currencyCode === "BRL"
    ) {
      return (currency * 1.05).toFixed(3);
    } else return (currency * 1.003).toFixed(3);
  }

  return (
    <section className="wg-currency">
      {
        isLoading
          ? <Loader/>
          : <>
            <h3 className="wg-currency__title">{langText.localCurrency[language]}</h3>
            <table className="wg-currency__table">
              <thead>
              <tr>
                <th>{langText.currency[language]}</th>
                <th>{langText.buying[language]}</th>
                <th>{langText.selling[language]}</th>
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
                <td>{currencyCode === "EUR" ? "-" : eur}</td>
                <td>{currencyCode === "EUR" ? "-" : sellingConvert(eur)}</td>
              </tr>
              <tr>
                <td>BYN</td>
                <td>{byn}</td>
                <td>{sellingConvert(byn)}</td>
              </tr>
              </tbody>
            </table>
          </>
      }
    </section>
  );
}
