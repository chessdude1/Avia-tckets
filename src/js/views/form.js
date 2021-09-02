import {GetAutocompleteInstance, GetDatepickerInstance} from './../../plugins/materialize'

class FormsUI {
    constructor(AutocompleteInstance, DatePickerInstance) {
        this._form = document.forms['location'];
        this.depart = document.getElementById('datepicker-depart');
        this.return = document.getElementById('datepicker-return');
        this.destination = document.getElementById('autocomplete-Destination');
        this.origin = document.getElementById('autocomplete-Origin');
        this.DepartDatepicker = DatePickerInstance(this.depart);
        this.ReturnDatepicker = DatePickerInstance(this.return);
        this.DestinationAutocomplete = AutocompleteInstance(this.destination);
        this.OriginAutocomplete = AutocompleteInstance(this.origin)
    }


    get form () {
        return this._form
    }

    get departValue () {
        return this.depart.value.toString();
    }
    get returnValue () {
        return this.return.value.toString();
    }
    get destinationValue () {
        return this.destination.value;
    }
    get originValue () {
        return this.origin.value;
    }
    setAutoCompleteData (data) {
        this.DestinationAutocomplete.updateData(data);
        this.OriginAutocomplete.updateData(data)
    }

}

export const formUI = new FormsUI(GetAutocompleteInstance, GetDatepickerInstance);
