const quotes = [
  {
    quote:
      "A long life may not be good enough, but a good life is long enough.",
    author: "Benjamin Franklin",
  },
  {
    quote: "Life is not fair; get used to it.",
    author: "Bill Gates",
  },
  {
    quote:
      "We all have big changes in our lives that are more or less a second chance.",
    author: "Harrison Ford",
  },
  {
    quote: "Well done is better than well said.",
    author: "Benjamin Franklin",
  },
  {
    quote: "Eighty percent of success is showing up.",
    author: "Woody Allen",
  },
  {
    quote:
      "The best thing about the future is that it comes one day at a time.",
    author: "Abraham Lincoln",
  },
  {
    quote: "Nothing is permanent in this wicked world - not even our troubles.",
    author: "Charlie Chaplin",
  },
  {
    quote:
      "It's not that I'm so smart, it's just that I stay with problems longer.",
    author: "Albert Einstein",
  },
  {
    quote:
      "If I only had an hour to chop down a tree, I would spend the first 45 minutes sharpening my axe.",
    author: "Abraham Lincoln",
  },
  {
    quote: "The wisest men follow their own direction.",
    author: "Euripides",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = todaysQuote.author;
