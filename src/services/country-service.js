export default class CountryService {
    _apiBase = 'https://travel-app-backend-rsschool.herokuapp.com';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, recived ${res.status}`)
        }

        return await res.json();
    }

    getAllCountries() {
        return this.getResource(`/countries/`);
    }

    getCountry(id) {
        return this.getResource(`/countries/${id}`);
    }
}

// const countriesData = new CountryService();
//
// countriesData.getAllCountries().then((countries) => {
//     console.log(countries)
//     countries.forEach((item) => {
//         console.log(item.country.country_eng);
//     })
// });
//
// countriesData.getCountry('AUS').then((item) => {
//     console.log(item[0].country.country_eng);
// });
