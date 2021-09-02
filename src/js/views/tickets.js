import { currencyUI } from "./currency";

class TicketsUI {
  constructor() {
    this.container = document.querySelector(".tickets-container");
  }

  renderTickets(tickets) {
    this.clearTickets();

    if (!tickets.length) {
      this.emptyMessageTemplate;
    }
    let fragment = "";
    tickets.forEach((ticket) => {
      const template = TicketsUI.ticketTemplate(ticket);
      fragment += template
    });

    this.container.insertAdjacentHTML('afterbegin', fragment);
  }

  clearTickets() {
    this.container.innerHTML = "";
    console.log(this.container)
  }

  showEmptyMessage() {
    const template = TicketUI.emptyMessageTemplate();
    this.container.insertAdjacentHTML('afterbegin', template);
  }

  static emptyMessageTemplate() {
    return `<div class="tickets-empty-res-msg">
        По вашему запросу билетов не найдено.
      </div>`;
  }

  static ticketTemplate(ticket) {
      console.log(currencyUI.getCurrencyValueSymbol)
      console.log(ticket)
    return `
    <div class="col s12 m6">
    <div class="card ticket-card">
      <div class="ticket-airline display-flex align-center justify-between">
        <img
          src="${ticket.airline_logo}"
          class="ticket-airline-img"
        />
        <span class="ticket-airline-name"
          >${ticket.airline_name}</span
        >
      </div>
      <div class="ticket-destination display-flex align-center justify-between ">
        <div class="display-flex">
          <span class="ticket-city">${ticket.origin_name} </span>
          <i class="medium material-icons">flight_takeoff</i>
        </div>
        <div class="display-flex align-center">
          <i class="medium material-icons">flight_land</i>
          <span class="ticket-city">${ticket.destination_name}</span>
        </div>
      </div>
      <div class="ticket-time-price display-flex align-center">
        <span class="ticket-time-departure">${ticket.departure_at}</span>
        <span class="ticket-time-destination">${ticket.return_at}</span>
        <span class="ticket-price ml-auto">${currencyUI.getCurrencyValueSymbol} ${ticket.price}</span>
      </div>
      <div class="ticket-additional-info">
        <span class="ticket-transfers">Пересадок: ${ticket.transfers}</span>
        <span class="ticket-flight-number">Номер рейса: ${ticket.flight_number}</span>
      </div>
    </div>
  </div>
    `;
  }
}

export const TicketUI = new TicketsUI();
