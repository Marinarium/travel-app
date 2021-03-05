import React from "react";

import './LangSelect.scss';

export default function LangSelect() {
    return (
        <select className="select" size="1">
            <option selected value="en">English</option>
            <option value="ru">Русский</option>
            <option value="by">Беларуская</option>
        </select>
    )
}