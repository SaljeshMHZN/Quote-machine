// varibale decleration

const quote = document.getElementById('quote');
const btn = document.getElementById('button');


// Array for the quotes

const quotes = [
    'If you cant do it, dont even promise',
    'Broken heart is more painful than anything',
    'If you dont fail, you aint trying too',
    'Never stop trying, who knows success is just a step away',
    'Dont expect anything from people',
    'Life is too short to live depressed',
    'Sucide is not an solution',
    'Love bikes not girls',
    'Being materialistic is okey',
    'All our dreams can come true, if we have the courage to pursue them.',
    'The secret of getting ahead is getting started.',
    'Only the paranoid survive.',
    'It’s hard to beat a person who never gives up.',
    'I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.',
    'If people are doubting how far you can go, go so far that you can’t hear them anymore.',
    'Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE.',
    'Whatever you are, be a good one.'
];


// btn.addEventListener('click', function(){

//     const random = Math.floor(Math.random() * quotes.length);
//     quote.textContent = quotes[random];

// })

// function quoteGenerator() {
//     const random = Math.floor(Math.random() * quotes.length);
//     quote.textContent = quotes[random];
// }

btn.addEventListener('click', () => {
    const random = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[random];
})

