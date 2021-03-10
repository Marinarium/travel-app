// export const getCountry = (iso) => {
//     fetch(`${this._apiBase}/countries/${iso}`)
//         .then(res => res.json())
//         .then(
//             (result) => {
//                 this.setState({
//                     isLoaded: true,
//                     country: result
//                 });
//             },
//             (error) => {
//                 this.setState({
//                     isLoaded: true,
//                     error
//                 });
//             }
//         )
// }

// import React, {Component} from "react";
//
// export default class CountryService extends Component {
//     //
//     // _apiBase = 'https://travel-app-backend-rsschool.herokuapp.com';
//     //
//     // async getResource(url) {
//     //     const res = await fetch(`${this._apiBase}${url}`);
//     //
//     //     if(!res.ok){
//     //         throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
//     //     }
//     //
//     //     return await .then(res => res.json());
//     // }
//     //
//     // getAllCountries() {
//     //     console.log("hey");
//     //     return this.getResource(`/countries/`);
//     // }
//     //
//     // getCountry(id) {
//     //     return this.getResource(`/countries/${id}/`);
//     // }
//
//     _apiBase = 'https://travel-app-backend-rsschool.herokuapp.com';
//
//     state = {
//         error: null,
//         isLoaded: false,
//         countries: []
//     }
//
//     componentDidMount() {
//         function getCountries() {
//             fetch(`${this._apiBase}/countries`)
//                 .then(res => res.json())
//                 .then(
//                     (result) => {
//                         this.setState({
//                             isLoaded: true,
//                             countries: result
//                         });
//                     },
//                     (error) => {
//                         this.setState({
//                             isLoaded: true,
//                             error
//                         });
//                     }
//                 )
//         }
//
//         function getCountry(iso) {
//             fetch(`${this._apiBase}/countries/${iso}`)
//                 .then(res => res.json())
//                 .then(
//                     (result) => {
//                         this.setState({
//                             isLoaded: true,
//                             country: result
//                         });
//                     },
//                     (error) => {
//                         this.setState({
//                             isLoaded: true,
//                             error
//                         });
//                     }
//                 )
//         }
//     }
//
//     // render() {
//     //     console.log(countries)
//     //
//     //     const {error, isLoaded, countries} = this.state;
//     //     if (error) {
//     //         return <div>Ошибка: {error.message}</div>;
//     //     } else if (!isLoaded) {
//     //         return <div>Загрузка...</div>;
//     //     } else {
//     //         return (
//     //             <ul>
//     //                 <li>{countries[0].country.country_eng}</li>
//     //             </ul>
//     //         );
//     //     }
//     // }
// }
