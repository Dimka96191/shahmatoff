const list = document.querySelector('.page-coaches__filter-items')
const items = document.querySelectorAll('.page-coaches__item')
const listItems = document.querySelectorAll('.page-coaches__filter-item')





function filter() {
    list.addEventListener('click', (event) => {
        const targetId = event.target.dataset.id
        const target = event.target
       
        switch (targetId) {
            case 'all':
                removeClassName()
                break

            case 'tikhvin':
                getItems(targetId)
                break

            case 'aviation':
                getItems(targetId)
                break
        }

        if (target !== list) {
            listItems.forEach(item => {
                item.classList.remove('page-coaches__filter-item--active')
                target.classList.add('page-coaches__filter-item--active')
            })
        }


    })


}

filter()

function getItems(className) {
    items.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}

function removeClassName() {
    items.forEach((item) => {
        item.style.display = 'block'
    })

}