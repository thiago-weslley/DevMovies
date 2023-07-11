import { Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = ({ info, title }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        grabCursor
        spaceBetween={10}
        slidesPerView={"auto"}
        className="swiper"
      >
        {info.map((item, index) => (
          <SwiperSlide key={index}>{item.original_title}</SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Slider;
