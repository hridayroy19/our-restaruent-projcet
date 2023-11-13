import { useEffect, useState } from "react";
import MenuItemCard from "../../Sheard/MenuItemCard";


const ManuItems = () => {
    const [menu , setMenu]=useState([]);
    useEffect (()=>{
        fetch ('/public/manu.json')
        .then (res => res.json())
        .then (data =>{
            const populersmenuItems = data.filter(item => item.category === 'popular')
            setMenu(populersmenuItems)
        })

    },[])


    return (
        <>
             <div className=' w-4/12 mx-auto mt-8 items-center'>
            <p className='items-center text-center font-semibold '>------Check it out------</p>
           <h2 className='items-center text-center font-bold py-2 text-xl mb-9 border-y-4 '>FROM OUR MENU</h2>
        </div>

        <div className="grid md:grid-cols-2 mb-7 gap-5">
         {

              menu.map(item => <MenuItemCard key={item._id} item={item}></MenuItemCard>)

         }
        </div>

        </>
    );
};

export default ManuItems;