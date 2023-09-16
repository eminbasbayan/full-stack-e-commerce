const SliderItem = () => {
  return (
    <div className="slider-item fade">
      <div className="slider-image">
        <img src="img/slider/slider1.jpg" className="img-fluid" alt="" />
      </div>
      <div className="container">
        <p className="slider-title">SUMMER 2022</p>
        <h2 className="slider-heading">Save up to 70%</h2>
        <a href="#" className="btn btn-lg btn-primary">
          Explore Now
        </a>
      </div>
    </div>
  );
};

export default SliderItem;
