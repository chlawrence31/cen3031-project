import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';

// Import Swiper Styles
import 'swiper/css/bundle';

export const TopAnimalSlides = ({ topAnimals }) => {
    return (
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >

            {topAnimals.map((slide) => (
                <SwiperSlide style={{ backgroundPosition: 'center', backgroundSize: 'cover' , 
                background: '#1A202C', color: 'white', fontFamily: 'Copperplate, serif'}} key={slide.image} effect>
                    <img style= {{ width: 400, height: 500 }} src={slide.image} alt={slide.title}/>
                    <h3>Name: {slide.name}</h3>
                    <h3>Species: {slide.species}</h3>
                    <h3>Sex: {slide.sex}</h3>
                    <h3>Age: {slide.age}</h3>
                </SwiperSlide>
                
            ))}
        </Swiper>
    )
}