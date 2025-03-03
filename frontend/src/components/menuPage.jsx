import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

function MenuPage() {
  const tableid=useParams()
  const [menu,setMenu]=useState([]);
  useEffect(()=>{
    const fetchmenu=async()=>{
      try {
        const response= await axios.get('/api/menu/getDetails')
        if(!response) {console.log("ERROR:while fetching menu");
        }
        console.log(response.data);
        
        setMenu(response.data)
      } catch (error) {
        console.log("ERROR:while fetching menu",error);
        
      }
    }
    fetchmenu();
  },[])
  return (
    <div>
      <h2>Menu Items</h2>
      <div>{menu &&
          menu.map((item, index) => {
            return (
              <div key={item._id + index} className="menu-item">
                <h4>{item.MenuName}</h4>
                <img src={item.MenuImage} />
                <p>{item.Descriptions}</p>
                <h5>{item.MenuPrice}</h5>
                <button>
                  Add to Cart
                </button>
              </div>
            );
          })}
          </div>
    </div>
  )
}

export default MenuPage;