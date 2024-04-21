const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    }, 
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
      },
      {
          name: 'cheeseburger',
          img: 'images/cheeseburger.png',
      }, 
      {
          name: 'hotdog',
          img: 'images/hotdog.png',
      },
      {
          name: 'cheeseburger',
          img: 'images/cheeseburger.png',
      },
      {
          name: 'ice-cream',
          img: 'images/ice-cream.png',
      },
      {
          name: 'milkshake',
          img: 'images/milkshake.png',
      },
      {
          name: 'pizza',
          img: 'images/pizza.png',
      },
]
cardArray.sort(() => 0.5 - Math.random())
const gridDisplay = document.querySelector('#grid') // document.getElementById('grid') //
console.log(gridDisplay)
function createBoard () {
    
}