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
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                {/* <img src={item.imageURL} /> */}
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