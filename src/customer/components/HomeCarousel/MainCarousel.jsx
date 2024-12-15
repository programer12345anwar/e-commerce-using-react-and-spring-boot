import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './mainCarouselData';

const MainCarousel = () => {
    const items = mainCarouselData.map((item) => (
        <img
            className="cursor-pointer"
            role="presentation"
            src={item.image}  
            alt=""
        />
    ))  

    return (
        <AliceCarousel
            items={items}
            autoPlay
            autoPlayInterval={1000}
            infinite
            disableButtonsControls
        />
    );
};

export default MainCarousel

