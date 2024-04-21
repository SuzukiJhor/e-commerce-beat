import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y } from "swiper/modules";
import { BrowserRouter as Router, Link } from "react-router-dom";
import productsData from "../../data/productsData";

const HeroSlider = () => {
  const heroProducts = productsData.filter(
    (item) => item.tag === "hero-product",
  );

  return (
    <Swiper
      modules={[Pagination, A11y, Autoplay]}
      loop={true}
      speed={400}
      spaceBetween={100}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 400000,
        disableOnInteraction: false,
      }}
    >
      {heroProducts.map((item, index) => {
        const {
          id,
          title,
          tagline,
          heroImage,
          finalPrice,
          originalPrice,
          path,
        } = item;
        return (
          <SwiperSlide
            key={id}
            className={`wrapper hero_wrapper hero_slide-${index}`}
          >
            <div className="hero_item_text">
              <h3>{title}</h3>
              <h3>{tagline}</h3>
              <h2 className="hero_price">
                {finalPrice} &nbsp;
                <small>
                  <del>{originalPrice}</del>
                </small>
              </h2>
              <Router>
                <Link to={`${path}${id}`} className="btn">
                  Shop Now
                </Link>
              </Router>
            </div>
            <figure className="hero_item_img">
              <img src={heroImage} alt="product-img" />
            </figure>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
