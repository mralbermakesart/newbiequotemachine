console.log(quotes)
new Vue({
    el: '#app',
    data: {
        quotes,
        currentQuote: {
            quote: '',
            page: 0,
        },
        animating: false
    },
    methods: {
        newQuote: function() {
            const num = Math.floor(Math.random() * quotes.length);
            this.currentQuote = quotes[num];
            this.animating = true
        }
    },

    updated: function() {
        this.animating = true
        setTimeout(() => {
            this.animating = false

        }, 1000)
        console.log('updated')

    }
})