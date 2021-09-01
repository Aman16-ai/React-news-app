import React from 'react'
import NewsItem from './NewsItem'
import { useState, useEffect } from 'react'
export default function News() {
    let newsApidata = {

        "status": "ok",
        "totalResults": 5885,
        "articles": [
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "Rebecca Cairns, CNN",
                "title": "Meet the entrepreneur teaching computers to understand human emotions",
                "description": "Computers are smart. They store and process vast amounts of data in the blink of an eye, translate language instantaneously, and even operate machinery. But they have the same emotional intelligence as a brick wall.",
                "url": "https://www.cnn.com/2021/09/01/world/rana-el-kaliouby-affectiva-emotion-ai-hnk-spc-intl/index.html",
                "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210629052957-02-rana-el-kaliouby-affectiva-emotion-ai-hnk-spc-intl-super-tease.jpg",
                "publishedAt": "2021-09-01T08:38:58Z",
                "content": "(CNN)Computers are smart. They store and process vast amounts of data in the blink of an eye, translate language instantaneously, and even operate machinery. But they have the same emotional intellig… [+5300 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Drive.com.au"
                },
                "author": "James Ward",
                "title": "Dear Drive… is it true I can no longer haggle for a Honda?",
                "description": "Has Honda's move to a fixed-price line-up removed the \"majesty of the deal\"? Dear Drive... where we answer reader, viewer and listener questions.",
                "url": "https://www.drive.com.au/caradvice/dear-drive-is-it-true-i-can-no-longer-haggle-for-a-honda/",
                "urlToImage": "https://images.drive.com.au/caradvice/image/private/c_fill,f_auto,g_auto,h_720,q_auto:best,w_1280/qit1g7cjwzcrjwrf4gyk",
                "publishedAt": "2021-09-01T08:29:43Z",
                "content": "Tesla have been operating this way since the brand launched in Australia, and Mercedes-Benz will follow suit in 2022. It is an interesting step, particularly in automotive, but as the former Managing… [+208 chars]"
            }]
    }
    const [allNews, setAllNews] = useState([])
    async function getData() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=302e0539d4e140ab8c91f2387894b21a";
        let response = await fetch(url);
        let data = await response.json();
        setAllNews(data.articles)
        console.log(data.articles[0].title)
        console.log(data.articles.map((n) => {
            return n.title;
        }))
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="container my-3">
            <div className="row">
            {allNews.map((n) => {
                return <NewsItem title={n.title} content={n.description} newsUrl = {n.url} imgUrl={n.urlToImage} />
            })}
            </div>
        </div>
    )
}
