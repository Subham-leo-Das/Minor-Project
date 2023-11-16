import Img1 from "../Assets/1..webp";
import Img2 from "../Assets/2.jpg";
import Img3 from "../Assets/3.jpg";
import './Carousel.css';
function Carousel() {
    return(
        <div id="carouselExample" className="carousel slide">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>

  <div className="carousel-inner">
    <div className="carousel-item active c-item">
      <img src={Img1} className="d-block w-100 c-img" alt="..."/>
    </div>
    <div className="carousel-item c-item">
      <img src={Img2} className="d-block w-100 c-img" alt="..."/>
    </div>
    <div className="carousel-item c-item">
      <img src={Img3} className="d-block w-100 c-img" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )
}
export default Carousel;      