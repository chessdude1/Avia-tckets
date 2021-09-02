import { config } from "../config/config";
import axios from "axios";

class API {
  constructor(config) {
    this.url = config.url;
  }
  async countries() {
    try {
      let countries = await axios.get(`${this.url}/countries`);
      return countries;
    } catch (err) {
      console.log(err);
    }
  }

  async airlines() {
    try {
      let airlines = await axios.get(`${this.url}/airlines`);
      return airlines; // если возвращать не дата, получим response //
    } catch (err) {
      console.log(err);
    }
  }

  async cities() {
    try {
      let cities = await axios.get(`${this.url}/cities`);
      return cities;
    } catch (err) {
      console.log(err);
    }
  }

  async prices(params) {
    try {
      let prices = await axios.get(`${this.url}/prices/cheap`, {
        params,
      });
      return prices;
    } catch (err) {
      console.log(err);
    }
  }
}

export const SetUrl = new API(config);
