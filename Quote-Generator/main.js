const btn = document.querySelector('#new-quote')
const quote = document.querySelector('.quote')
const person = document.querySelector('.person')

const quotes = [
    {
        quote: "It is often the small steps, not the giant leaps, that bring about the most lasting change.",
        person: `QUEEN ELIZABETH II`
    },
    {
        quote: "Education is the most powerful weapon which you can use to change the world.",
        person: `NELSON MANDELA`
    },
    {
        quote: "There is always light. If only we're brave enough to see it. If only we're brave enough to be it.",
        person: `AMANDA GORMAN`
    },
    {
        quote: "If you want to lift yourself up, lift up someone else.",
        person: `BOOKER T. WASHINGTON`
    },
    {
        quote: "I have learned not to allow rejection to move me.",
        person: `CICELY TYSON`
    },
]

btn.addEventListener("click", () => {

    let random = Math.floor(Math.random() * quotes.length)

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person
})