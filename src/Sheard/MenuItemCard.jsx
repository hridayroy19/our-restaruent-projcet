/* eslint-disable react/prop-types */


const MenuItemCard = ({item}) => {
    const {name, image , price , recipe} = item
    return (
        <div className=" items-center px-3 flex gap-6">
            <div>  <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[120px]  rounded-md " src={image } alt="" /></div>
            <div>
            <h2 className="text-black"> { name}</h2>
            <p> $ {price} </p>
            <h3>{recipe} </h3>
            </div>
        </div>
    );
};

export default MenuItemCard;