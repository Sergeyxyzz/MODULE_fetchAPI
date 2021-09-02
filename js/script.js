window.addEventListener('DOMContentLoaded', () => {
    function req() {
        fetch('http://localhost:3000/people') // get запрос по адресу
            .then(it => it.json()) // в it мы получили данные в json формате => здесь мы превратили их из формата json в обычный объект
            .then(it => createCards(it)) // здесь уже мы можем данные(наш it) как угодно
            .catch(err => console.error(err))

        this.remove() // удалили функцию после ее выполнения, т.е. кнопку
    }

    document.querySelector('button').addEventListener('click', req, {'once': true})

    function createCards(response) {
        response.forEach(it => {
            let card = document.createElement('div');
            card.classList.add('card');

            let icon;

            if (it.sex === "male") {
                icon = 'icons/mars.png';
            } else {
                icon = 'icons/female.png';
            }

            card.innerHTML = `
                <img src='${it.photo}' alt=''>
                <div class='name'>${it.name} ${it.surname}</div>
                <div class='sex'>
                    <img src=${icon} alt='male'>
                </div>
                <div class='age'>${it.age}</div>
            `;
            document.querySelector('.app').appendChild(card)
        })
    }
})

