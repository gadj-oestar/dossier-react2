import "./Movie.css";

const Movie = ({id, title, date, category, resume, like, nbLike, comment, bookmark, trailer, image, onUpdateBookmark, onUpdateLike }) => {

  const [day, month, year] = date.split(' ');

  return ( 
    <div className="card card full-image">
      <div className="wrapper" style={{backgroundImage: `url(${image})`}}>
        <div className="header">
          <div className="date">
            <span className="day">{ day }</span>
            <span className="month">{ month }</span>
            <span className="year">{ year }</span>
          </div>
          <ul className="menu-content">
            <li>
              <a href="#" onClick={(event)=>onUpdateBookmark(id, event)} className={ bookmark ? "fa fa-bookmark" : "fa fa-bookmark-o" }></a>
            </li>
            <li>
              <a href="#" onClick={(event)=>onUpdateLike(id, event)} className={ like ? "fa fa-heart" : "fa fa-heart-o" }>
                <span>{ nbLike }</span>
              </a>
            </li>
            <li>
              <a href="#" className="fa fa-comment-o">
                <span>{ comment }</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="data">
          <div className="content">
            <span className="author">{ category }</span>
            <h1 className="title">
              <a href="#">{ title }</a>
            </h1>
            <p className="text">
              { resume }
            </p>
            <a href={ trailer } target="_blank" className="button">
              Trailer
            </a>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Movie;