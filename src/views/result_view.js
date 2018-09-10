const PubSub = require('../helpers/pub_sub.js')

const ResultView = function() {

}

ResultView.prototype.displayResult = function(result) {
    const resultElement = document.querySelector('#result');
    if (result === true) {
        resultElement.textContent = `That IS a prime number!`
    } else {
        resultElement.textContent = `That is NOT a prime number!`
    }
}

ResultView.prototype.bindEvents = function() {
    PubSub.subscribe('PrimeChecker:result-calculated', (event) => {
        const primeDecision = event.detail;
        this.displayResult(primeDecision);
    })

}

module.exports = ResultView;