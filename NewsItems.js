import React, { Component } from 'react'

export class NewsItems extends Component {

    render() {
       let {title,discription,imageUrl,url,author,date} = this.props;
        return (
            <div className = "my-3">
                <div className="card" style={{width: "18rem"}}>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{discription}...</p>
    <p class="card-text"><small class="text-muted">by{author} on {date}</small></p>
    <a rel= "noreferrer"href={url} target = "_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
            </div>
        )
    }
}

export default NewsItems
