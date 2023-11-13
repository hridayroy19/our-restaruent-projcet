import Banner from "../Component/Banner";
import Featured from "../Component/homeSection/Featured";
import ManuItems from "../Component/homeSection/ManuItems";
import OrderOnline from "../Component/homeSection/OrderOnline";
import Reviews from "../Component/homeSection/Reviews";

const Home = () => {
    return (
        <div>

          <Banner></Banner>
           <OrderOnline></OrderOnline>
           <ManuItems></ManuItems>
           <Featured></Featured>
           <Reviews></Reviews>
        </div>
    );
};

export default Home;