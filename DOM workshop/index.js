const title = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');

console.log(title);

// I. Content processing

title.innerHTML = `<mark>Alt text</mark>`;
h2.innerText = `<mark>
    

        Inner Text
        There
</mark>`;
h3.textContent = `<mark>
    

    Text Content
    There
</mark>`;

// II. Css processing

// h2.style.backgroundColor = 'green';

// h2.classList.add('green');
h2.addEventListener('mouseover', () => {
    h2.classList.toggle('green');
    console.log('hey')
})
// h2.setAttribute('style', 'background-color: yellow;')

// III. Add remove HTML elements

// 1 create HTML element
const para = document.createElement('p');


// 2 Add content
para.innerText = 'This is a paragraph';

//3 Add to html
const divElem = document.querySelector('#root');
divElem.appendChild(para);

// remove elem

para.remove();


// IV. Pinpoint element in a list

const products = document.querySelectorAll('.products'); // . se refera la Class -------   # se refera la ID
products.forEach(p => {
    p.addEventListener('click', () => {
        console.log(p.dataset.id);
    })
})