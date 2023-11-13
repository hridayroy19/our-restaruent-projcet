import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Banner = () => {
    return (
        <div>
                <Carousel>
                <div>
                    <img src="https://i.ibb.co/vxg90QB/01.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/0npgLmj/06.png" />
                </div> 
                 <div>
                    <img src="https://i.ibb.co/VgR8Bkv/05.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/VgR8Bkv/05.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/Ytrpybh/04.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/pKRv22Q/03.png"/>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;