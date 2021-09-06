import React from 'react'
import NewsItem from './NewsItem'
import { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
export default function News(props) {

    const [allNews, setAllNews] = useState([])
    const [totalResults,setTotalResults] = useState();
    const [page,setPage] = useState(0);
    async function getData() {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=302e0539d4e140ab8c91f2387894b21a&page=${page+1}&pageSize=${8}`;
        let response = await fetch(url);
        let data = await response.json();
        setAllNews(allNews.concat(data.articles))
        setTotalResults(data.totalResults);
        console.log(data.totalResults)
        setPage(page+1)
    }
    useEffect(() => {
        getData();
    }, [])

    function loadnextpage() {
        getData();
        console.log(page)
        
    }
    return (
        <div className="container my-3">
            <InfiniteScroll
            dataLength={allNews.length}
            hasMore={allNews.length !== totalResults}
            next = {loadnextpage}
            loader = {<h4>Loading...</h4>}
            >
                <div className="row">
            {allNews.map((n) => {
                return <NewsItem title={n.title} content={n.description} newsUrl = {n.url} imgUrl={!n.urlToImage?"newslogo.jpg":n.urlToImage} />
            })}
            </div>
            </InfiniteScroll>
        </div>
    )
}
