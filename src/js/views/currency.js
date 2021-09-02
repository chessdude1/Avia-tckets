class CurrencyUI {
    constructor() {
        this.currencyElement = document.getElementById('currency');
        this.Dictionary = {
            'USD' : '$',
            'EUR' : '€',
        }
    }



    get getCurrencyValue () {
       return this.currencyElement.value
    }
    
    get getCurrencyValueSymbol () {
        return this.Dictionary[this.getCurrencyValue]
    }
}

export const currencyUI = new CurrencyUI; 
