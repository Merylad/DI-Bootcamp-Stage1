import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const CarouselDC = ()=> {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} stopOnHover={true}>
                <div>
                    <img src="HongKong.jpg" />
                    <p className="legend">Hong Kong</p>
                </div>
                <div>
                    <img src="Japan.webp" />
                    <p className="legend">Japan</p>
                </div>
                <div>
                    <img src="LasVegas.webp" />
                    <p className="legend">Las Vegas</p>
                </div>
                <div>
                    <img src="Macao.webp" />
                    <p className="legend">Macao</p>
                </div>
            </Carousel>
    )
}

export default CarouselDC