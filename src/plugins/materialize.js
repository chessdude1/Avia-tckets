import "../../node_modules/materialize-css/dist/js/materialize";
import "../../node_modules/materialize-css/dist/css/materialize.css";

let select = document.querySelectorAll("select");
M.FormSelect.init(select);


export function GetSelectInstance (elem) {
  return (M.FormSelect.getInstance(elem))
}

let autocomplete = document.querySelectorAll('.autocomplete');
M.Autocomplete.init(autocomplete, { data : {
  "Apple": null,
  "Microsoft": null,
  "Google": 'https://placehold.it/250x250'
}});

export function GetAutocompleteInstance (elem) {
  return (M.Autocomplete.getInstance(elem))
}

let datepicker = document.querySelectorAll('.datepicker');
M.Datepicker.init(datepicker, {
  showClearBtn: true,
  format: 'yyyy-mm'
});

export function GetDatepickerInstance (elem) {
  return (M.Datepicker.getInstance(elem), {
    showClearBtn: true,
    format: 'yyyy-mm'
  })
}
