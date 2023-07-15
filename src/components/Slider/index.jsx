import Card from "../Card";
import { Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Slider = ({ info, title }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        grabCursor
        slidesPerView={"auto"}
        spaceBetween={10}
        breakpoints={{
          270: {
            slidesPerView: 1
          },
          600: {
            slidesPerView: 2
          },
          860: {
            slidesPerView: 3
          },
          1250: {
            slidesPerView: 4
          },
          1700: {
            slidesPerView: 6
          },
          2200: {
            slidesPerView: 7
          }
        }}
      >
        {info.map((item, index) => (
          <SwiperSlide key={index}>
            <Card item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Slider;
