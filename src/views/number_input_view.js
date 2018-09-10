const PubSub = require('../helpers/pub_sub.js')

const NumberInputView = function() {

}

NumberInputView.prototype.bindEvents = function() {
    const numberInputForm = document.querySelector('#prime-checker-form');

    numberInputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const numberSubmitted = event.target.number.value;

        PubSub.publish('NumberInputView:number-submitted', numberSubmitted);
    })
}

module.exports = NumberInputView;