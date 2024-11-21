const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";

const ajax = new XMLHttpRequest();

ajax.open("GET", NEWS_URL, false);
ajax.send();

const newsList = JSON.parse(ajax.response);

const ul = document.createElement("ul");
for (let i=0; i<10; i++) {
    const li = document.createElement("li");
    li.innerHTML = newsList[i].title;
    ul.appendChild(li);
}

document.querySelector("#root").appendChild(ul);