const Quotesarr = [
  {
    personname: 'Oscar Wilde',
    quotes: 'Be yourself; everyone else is already taken.',
  },
  {
    personname: 'Marilyn Monroe',
    quotes:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  },
  {
    personname: 'Albert Einstein',
    quotes:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  },
  {
    personname: 'Marcus Tullius Cicero',
    quotes: 'A room without books is like a body without a soul.',
  },
]
let btn = document.querySelector('#btn')
let container = document.querySelector('.quotes-box-container')
let authorquotes = document.querySelector('#quotes-text')
let authorname = document.querySelector('#author-name')
btn.addEventListener('click', () => {
  let number = Math.abs(Math.ceil(Math.random() * Quotesarr.length - 1))

  authorname.textContent = Quotesarr[number].personname
  authorquotes.textContent = Quotesarr[number].quotes
})
