import { SetUrl } from './service/service'
import { location } from './store/location'
import './css/style.css'
import '../plugins/index'
import { formUI } from './views/form';
import { currencyUI } from './views/currency';
import { TicketUI } from './views/tickets';


document.addEventListener('DOMContentLoaded', () => {
    initApp();

    async function initApp() {
        await location.init();
        formUI.setAutoCompleteData(location.shortCitiesList)
    }

    formUI._form.addEventListener('submit', e => {
        e.preventDefault();
        onFormSubmit();
    })

    function onFormSubmit() {
        const depart = formUI.departValue;
        const returnDate = formUI.returnValue;
        const origin = location.getCodeByCityName(formUI.originValue);
        const destination = location.getCodeByCityName(formUI.destinationValue);
        const currency = currencyUI.getCurrencyValue
        location.fetchTickets({origin, destination, depart, returnDate, currency}).then(res => TicketUI.renderTickets(res))
    }
})