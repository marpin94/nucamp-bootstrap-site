let articles = [
    {
        "title":"10 Tips to Accomplish Your New Year's Resolutions",
        "author":"M. Arpin",
        "category":"nutrition, goals",
        "id": 1
    },
    {
        "title":"Exercise Routines for Beginners",
        "author":"M. Arpin",
        "category":"fitness, routines, beginners",
        "id": 2
    },
    {
        "title":"Healthy Holiday Recipes",
        "author":"M. Arpin",
        "category":"recipes, nutrition",
        "id": 3
    },
]

function loadArticles() {

    const container = document.getElementById('articles')

    articles.forEach((article) => {
        const card = document.createElement('div')
        card.id ='article-card'
        card.classList.add('card')
        card.classList.add('col-sm-12')

        const body = document.createElement('div')
        body.classList.add('card-body')

        const description = document.createElement('p')
        description.textContent=`Categories: ${article.category}`

        const title = document.createElement('h3')
        title.textContent = article.title
        title.classList.add('card-title')

        const footer = document.createElement('div')
        footer.classList.add('card-footer')

        const link = document.createElement('a')
        link.href='#'
        link.innerHTML = 'Read More'

        
        
        body.appendChild(description)
        footer.appendChild(link)
        card.appendChild(title)
        card.appendChild(body)
        card.appendChild(footer)
        container.appendChild(card)

    })   
}

(function loadDisplay(){
    loadArticles()
})();