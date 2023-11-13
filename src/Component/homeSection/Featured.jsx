import fearuredImage from "../.././assets/home/featured.jpg"
import './featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white mb-8 mt-8 ">
            <div className=' w-4/12 mx-auto mt-8 items-center'>
            <p className='items-center text-center font-semibold '>------Check it out------</p>
           <h2 className='items-center text-center font-bold py-2 text-xl mb-9 border-y-4 '>FROM OUR MENU</h2>
        </div>

      <div className="flex items-center  bg-gray-500 opacity-60 px-14 py-12 justify-center">
      <div>
       <img className=" w-[70%]"  src={fearuredImage} alt="" />
       </div>

       <div className="">
        <h3> March 20, 2023 </h3>
        <h2>WHERE CAN I GET SOME?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
        <button className="btn text-red-300  btn-outline border-0 border-b-4 mt-6 "> Read More </button>
       </div>
      </div>
        </div>
    );
};

export default Featured;