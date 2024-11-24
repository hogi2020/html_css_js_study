const container = document.querySelector("#home")
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json"

const ajax = new XMLHttpRequest()

function getData(url) {
    ajax.open("GET", url, false)
    ajax.send()
    return JSON.parse(ajax.response)
}

const content = document.createElement("div")
const newsList = getData(NEWS_URL)

window.addEventListener("hashchange", () => {
    const id = location.hash.substring(1)
    const newsContent = getData(CONTENT_URL.replace("@id", id))
    const title = document.createElement("h1")

    title.innerHTML = newsContent.title
    content.appendChild(title)
})


const ul = document.createElement("ul")

for (let i = 0; i < 10; i++) {
    const div = document.createElement("div")
    div.innerHTML = `
        <li>
            <a href="#${newsList[i].id}">
                ${newsList[i].title}(✨${newsList[i].comments_count})
            </a>
        </li>
    `
    ul.appendChild(div.firstElementChild)
}

container.appendChild(ul)
container.appendChild(content)