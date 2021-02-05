let coloredBg = document.querySelector('.color'),
    number = document.querySelector('.number');
    
let colorItemArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'],
    randomItem,
    color = [];

window.addEventListener('click', () => {
    for (let i = 0; i < 6; i++) {
        randomItem = Math.floor(Math.random() * Math.floor(16));
        color.push(colorItemArr[randomItem]);
    }
    colorString = color.join('');
    coloredBg.style.backgroundColor = `#${colorString}`;
    color = [];
    number.textContent = `${colorString}`;
});


