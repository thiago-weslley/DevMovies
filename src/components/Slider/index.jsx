import Card from "../Card";
import { Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const Slider = ({ info, title }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        grabCursor
        slidesPerView={"auto"}
        spaceBetween={15}
        freeMode={true}
        breakpoints={{
          270: {
            slidesPerView: 2,
          },
          860: {
            slidesPerView: 3,
          },
          1250: {
            slidesPerView: 4,
          },
          1700: {
            slidesPerView: 6,
          },
          2200: {
            slidesPerView: 7,
          },
        }}
        modules={[FreeMode, Pagination]}
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
