import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
 

const items = [
    <div className="item bg-red-500 w-[90%] " data-value="1" key="1">1</div>,
    <div className="item bg-red-500 w-[90%] " data-value="2" key="2">2</div>,
    <div className="item bg-red-500 w-[90%] " data-value="3" key="3">3</div>,
    <div className="item bg-red-500 w-[90%] " data-value="4" key="4">4</div>,
    <div className="item bg-red-500 w-[90%] " data-value="5" key="5">5</div>,
];

const MainCarousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        controlsStrategy="alternate"
        
    />
);

export default MainCarousel;



