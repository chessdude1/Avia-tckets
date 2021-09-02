import { SetUrl } from "../service/service";
import { formatDate } from '../helpers/date'

class Location {
    constructor(API, helpers) {
        this.api = API;
        this.countries = null;
        this.cities = null;
        this.shortCitiesList = null;
        this.airlines = {};
        this.formatDate = helpers.formatDate;
    }
    async init() {
        const locationResponse = await Promise.all([this.api.countries(), this.api.cities(), this.api.airlines()])
        const [countries, cities, airlines] = locationResponse
        this.countries = this.serializeCountries(countries.data);
        this.cities = this.serializeCities(cities.data);
        this.shortCitiesList = this.serializeShortCitiesList(this.cities);
        this.airlines = this.serializeAirlines(airlines);
        return(locationResponse)
    }

    getCityNameByCode(code) {
        return this.cities[code].name
    }
    getCodeByCityName(key) {
        const city = Object.values(this.cities).find(item => item.full_name === key)
        return city.code
    }

    serializeAirlines(airlines) {
        return airlines.data.reduce((acc, item) => {
            item.logo = `http://pics.avs.io/200/200/${item.code}.png`;
            item.name = item.name || item. name_translations;
            acc[item.code] = item
            return acc 
        }, {})
    }

    serializeCountries(countries) {
        return countries.reduce((acc, country) => {
            acc[country.code] = country;
            return acc
        }, {})
    }

    serializeShortCitiesList(cities) {
        return Object.entries(cities).reduce((acc, [, city]) => {
            acc[city.full_name] = null;
            return acc
        }, {})
    }

    serializeCities (cities) {
        return cities.reduce((acc, city) => {
            city.name = city.name || city.name_translations.en
            let countryName = this.getCountryNameByCode(city.country_code);
            let full_name = `${city.name}, ${countryName}`;
            acc[city.code] = {
                ...city,
                countryName,
                full_name
            }
            return acc
        }, {})
    
    }

    async fetchTickets(params) {
        let response = await this.api.prices(params);
        return (this.serializeTickets(response.data.data))
        // this.lastSearch = this.
    }

    serializeTickets(ticket) {
        return Object.values(ticket).map(ticket => {
            return {
                ...ticket,
                origin_name: this.getCityNameByCode(ticket.origin),
                destination_name: this.getCityNameByCode(ticket.destination),
                airline_logo: this.getAirlinesLogoByCode(ticket.airline),
                airline_name: this.getAirlineNameByCode(ticket.airline),
                departure_at: this.formatDate(ticket.departure_at, 'dd MMM yyyy hh:mm'),
                return_at: this.formatDate(ticket.return_at, 'dd MMM yyyy hh:mm')
            }
        })
    }
    getCountryNameByCode (code) {
        return this.countries[code].name
    }

    getAirlineNameByCode (code) {
        return this.airlines[code] ? this.airlines[code].name : '';
    }

    getAirlinesLogoByCode (code) {
        return this.airlines[code] ? this.airlines[code].logo : '';
    }

    // serializeTickets (tickets) {

    // }

}

export const location = new Location(SetUrl, {formatDate})