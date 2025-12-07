const listItems = document.querySelectorAll('li')
const list = document.querySelector('ul')

listItems.forEach(li => {
	li.addEventListener('click', e => {
		e.target.parentElement.innerText = 'hello'
	})
})
