import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
   const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch(`https://server-sooty-five.vercel.app/categories`)
        .then(res => res.json())
        .then(data =>setCategories(data))
    }, [])
    return (
        <div >
                <h4>All Catagories  </h4>

                {
                    categories.map(category => <p key={category.id}>  <Link to={`/category/${category.id}`} >{category.name}</Link>  </p>)
                }
        
        </div>
    );
};

export default LeftSideNav;