// variable declarations

const quote = document.getElementById('quote');
const btn = document.getElementById('button');
const author = document.getElementById('author');

// Array for the quotes
const quotes = [
  {
    quote: 'Life isn’t about getting and having, it’s about giving and being.',
    author: 'Kevin Kruse',
  },
  {
    quote: 'Whatever the mind of man can conceive and believe, it can achieve.',
    author: 'Napoleon Hill',
  },
  {
    quote: 'Strive not to be a success, but rather to be of value.',
    author: 'Albert Einstein',
  },
  {
    quote:
      'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.',
    author: 'Robert Frost',
  },
  {
    quote: 'I attribute my success to this: I never gave or took any excuse.',
    author: 'Florence Nightingale',
  },
  {
    quote: 'You miss 100% of the shots you don’t take.',
    author: 'Wayne Gretzky',
  },
  {
    quote:
      'I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.',
    author: 'Michael Jordan',
  },
  {
    quote:
      'The most difficult thing is the decision to act, the rest is merely tenacity.',
    author: 'Amelia Earhart',
  },
  {
    quote: 'Every strike brings me closer to the next home run.',
    author: 'Babe Ruth',
  },
  {
    quote: 'Definiteness of purpose is the starting point of all achievement.',
    author: 'W. Clement Stone',
  },
  {
    quote: 'We must balance conspicuous consumption with conscious capitalism.',
    author: 'Kevin Kruse',
  },
  {
    quote: 'Life is what happens to you while you’re busy making other plans.',
    author: 'John Lennon',
  },
  {
    quote: 'We become what we think about.',
    author: 'Earl Nightingale',
  },
  {
    quote:
      'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.',
    author: 'Mark Twain',
  },
  {
    quote: 'Life is 10% what happens to me and 90% of how I react to it.',
    author: 'Charles Swindoll',
  },
  {
    quote:
      'The most common way people give up their power is by thinking they don’t have any.',
    author: 'Alice Walker',
  },
  {
    quote: 'The mind is everything. What you think you become.',
    author: 'Buddha',
  },
  {
    quote:
      'The best time to plant a tree was 20 years ago. The second best time is now.',
    author: 'Chinese Proverb',
  },
  {
    quote: 'An unexamined life is not worth living.',
    author: 'Socrates',
  },
  {
    quote: 'Eighty percent of success is showing up.',
    author: 'Woody Allen',
  },
  {
    quote:
      'Your time is limited, so don’t waste it living someone else’s life.',
    author: 'Steve Jobs',
  },
  ,
  {
    quote: 'If the wind will not serve, take to the oars.',
    author: 'Latin Proverb',
  },
  {
    quote:
      'You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.',
    author: 'Unknown',
  },
  {
    quote:
      'We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.',
    author: 'Marie Curie',
  },
  {
    quote:
      'Too many of us are not living our dreams because we are living our fears.',
    author: 'Les Brown',
  },
  {
    quote:
      'Challenges are what make life interesting and overcoming them is what makes life meaningful.',
    author: 'Joshua J. Marine',
  },
  {
    quote: 'If you want to lift yourself up, lift up someone else.',
    author: 'Booker T. Washington',
  },
  {
    quote:
      'I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.',
    author: 'Leonardo da Vinci',
  },
  {
    quote:
      'Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.',
    author: 'Jamie Paolinetti',
  },
  {
    quote:
      'You take your life in your own hands, and what happens? A terrible thing, no one to blame.',
    author: 'Erica Jong',
  },
  {
    quote:
      'What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.',
    author: 'Bob Dylan',
  },
  {
    quote: 'I didn’t fail the test. I just found 100 ways to do it wrong.',
    author: 'Benjamin Franklin',
  },
  {
    quote:
      'In order to succeed, your desire for success should be greater than your fear of failure.',
    author: 'Bill Cosby',
  },
  {
    quote: 'A person who never made a mistake never tried anything new.',
    author: ' Albert Einstein',
  },
  {
    quote:
      'The person who says it cannot be done should not interrupt the person who is doing it.',
    author: 'Chinese Proverb',
  },
  {
    quote: 'There are no traffic jams along the extra mile.',
    author: 'Roger Staubach',
  },
  {
    quote: 'It is never too late to be what you might have been.',
    author: 'George Eliot',
  },
  ,
  {
    quote: 'I would rather die of passion than of boredom.',
    author: 'Vincent van Gogh',
  },
  {
    quote:
      'A truly rich man is one whose children run into his arms when his hands are empty.',
    author: 'Unknown',
  },
  {
    quote:
      'It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.',
    author: 'Ann Landers',
  },
  {
    quote:
      'If you want your children to turn out well, spend twice as much time with them, and half as much money.',
    author: 'Abigail Van Buren',
  },
  {
    quote:
      'Build your own dreams, or someone else will hire you to build theirs.',
    author: 'Farrah Gray',
  },
  {
    quote:
      'The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.',
    author: 'Jesse Owens',
  },
  {
    quote:
      'Remember that not getting what you want is sometimes a wonderful stroke of luck.',
    author: 'Dalai Lama',
  },
  {
    quote: 'You can’t use up creativity.  The more you use, the more you have.',
    author: 'Maya Angelou',
  },
  {
    quote: 'Dream big and dare to fail.',
    author: 'Norman Vaughan',
  },
  {
    quote:
      'Our lives begin to end the day we become silent about things that matter.',
    author: 'Martin Luther King Jr.',
  },
  ,
  {
    quote: 'Remember no one can make you feel inferior without your consent.',
    author: 'Eleanor Roosevelt',
  },
  {
    quote: 'Life is what we make it, always has been, always will be.',
    author: 'Grandma Moses',
  },
  {
    quote:
      'The question isn’t who is going to let me; it’s who is going to stop me.',
    author: 'Ayn Rand',
  },
  {
    quote:
      'When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.',
    author: 'Henry Ford',
  },
  {
    quote:
      'It’s not the years in your life that count. It’s the life in your years.',
    author: 'Abraham Lincoln',
  },
  {
    quote:
      'Either write something worth reading or do something worth writing.',
    author: 'Benjamin Franklin',
  },
  {
    quote: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  },
];

// Event Listener
btn.addEventListener('click', () => {
  const random = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = `<q>${quotes[random].quote}</q>`;
  author.innerHTML = quotes[random].author;
});
