import React from 'react'

export default function NewsItem(props) {
    const s = {
        width:"18rem"
    }
    return (
                <div className="col">
                <div class="card" style={s}>
                <img src={props.imgUrl} class="card-img-top" alt="..."/>
                <div class ="card-body">
                <h5 class ="card-title">{props.title}</h5>
                <p class ="card-text">{props.content}</p>
                <a href={props.newsUrl} target="_blank" class ="btn btn-primary">Read full article</a>
                </div>
            </div>
                </div>
            
    
    )
}
