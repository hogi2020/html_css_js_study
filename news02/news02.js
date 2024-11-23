// Web API에 있는 XMLHttpRequest는 비동기, 동기를 지원하는 API
// 웹 서비스는 Request와 Response의 작동이다.

const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";

const ajax = new XMLHttpRequest();
const content = document.createElement("div");

ajax.open("GET", NEWS_URL, false);
ajax.send()

const newsList = JSON.parse(ajax.response);
const ul = document.createElement("ul");

for (let i = 0; i < 10; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = `#${newsList[i].id}`;
    a.innerHTML = newsList[i].title;

    li.appendChild(a);
    ul.appendChild(li);
}
document.querySelector("#root").appendChild(ul);


// hashchange => 해시가 변경되면 감지
window.addEventListener("hashchange", () => {
    //브라우저 주소창의 URL에서 해시 부분(# 뒤의 문자열)을 가져오고, #도 제거
    const id = location.hash.substring(1)
    ajax.open("GET", CONTENT_URL.replace("@id", id), false)
    ajax.send()

    const newsContent = JSON.parse(ajax.response)
    const title = document.createElement("h1")
    title.innerHTML = newsContent.title
    content.appendChild(title)
});
document.querySelector("#root").appendChild(content)