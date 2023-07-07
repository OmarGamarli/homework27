1)
//поменяйте значение border-radius в элементе с помощью метода DOM
<div id="block1"></div>
document.querySelector('#block1').style.border-radius = "20px"

2)
//что делает обработчик событий?
// Он запускается когда пользователь делает определение действие

3)
//наложите обработчик события клик на 'button' который поменяет цвет текста в теге 'p' на крассный
<p id='txt'>Some Text</p>
//<button>Click</button>
documet.querySelector('button').addEventListener("click",function(){
    document.getElementById('txt').style.color='red'
})

4)
//как удалить обработчик событий?
// removeEventListener

5)
//создайте обработчик события который запускает функцию showMessage при клике на элемент ниже
<div id='btn'>Block</div>

document.getElementById('btn').addEventListener("click",function showMessage() {
    console.log('Запуск');
}

)
6)
//создайте 2 обработчика события которые запускают функцию showMessage и hideBlock при клике на элемент ниже
<div id='btn'>Block</div>

document.getElementById('btn').addEventListener('click',function showMessage() {
    console.log('Запуск');
}
)

document.getElementById('btn').addEventListener('click',
function hideBlock() {
    console.log('Спрятать');
}
)

7)
//измените значение 'useCapture' так чтобы при нахатии на 'p' запускался сначала обработчик тега 'p' и лишь затем обработчик его родителя
<div id='block'><p id='txt'></p></div>

document.querySelector('#block').addEventListener('click', myFunction, useCapture);
document.querySelector('#txt').addEventListener('click', myFunction, useCapture);


8)
//измените значение 'useCapture' так чтобы при нахатии на 'p' запускался сначала обработчик тега 'div' и лишь затем обработчик тега 'p'
<div id='block'><p id='txt'></p></div>

document.querySelector('#block').addEventListener('click', myFunction, useCapture);
document.querySelector('#txt').addEventListener('click', myFunction, useCapture);


9)
//получите родителя элемента с идентификатором 'block' с помощью нодов и выведите в консоли
<ul>
    <li id='block'></li>
</ul>

console.log(document.getElementById('block').parentNode);

10)
//получите первый дочерний элемент с классом 'block' с помощью нодов и выведите в консоли
<ul>
    <li class='block'></li>
    <li class='block'></li>
    <li class='block'></li>
    <li class='block'></li>
    <li class='block'></li>
</ul>

console.log(document.getElementsByClassName('block').firstChild.nodeValue);

11)
//получите последний дочерний элемент с классом 'block' с помощью нодов и выведите в консоли
<ul>
    <li class='block'></li>
    <li class='block'></li>
    <li class='block'></li>
    <li class='block'></li>
    <li class='block'></li>
</ul>

console.log(document.getElementsByClassName('block').lastChild.nodeValue);

12)
//получите следующий дочерний элемент после класса 'block1' с помощью нодов и выведите в консоли
<ul>
    <li class='block1'></li>
    <li class='block2'></li>
    <li class='block3'></li>
    <li class='block4'></li>
    <li class='block5'></li>
</ul>

console.log(document.getElementsByClassName('block1').nextSibling.nodeValue);

13)
//получите предыдущий дочерний элемент до класса 'block3' с помощью нодов и выведите в консоли
<ul>
    <li class='block1'></li>
    <li class='block2'></li>
    <li class='block3'></li>
    <li class='block4'></li>
    <li class='block5'></li>
</ul>

console.log(document.querySelector('.block3').previousSibling.nodeValue);

14)
//получите определенный дочерний элемент с помощью нода childNode[index] и выведите в консоли
<ul>
    <li class='block1'></li>
    <li class='block2'></li>
    <li class='block3'></li>
    <li class='block4'></li>
    <li class='block5'></li>
</ul>

console.log(document.querySelector('ul').childNodes[3].nodeValue);