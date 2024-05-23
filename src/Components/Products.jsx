
import { useEffect, useState } from "react"
import { Cards } from "./Casds"
import axios from "axios"

export const ProductsWomen = () => {
    
        const [productMale, setProductMan] = useState([])
        const [error, SetError] = useState(null)
    
        useEffect(() =>{
            const catchProduct = async() =>{
                try{
                    const resp = await axios ("https://fakestoreapi.com/products/category/women's clothing")
                    const data = resp.data 
                    setProductMan(data.slice(0,4))
                }catch(error){
                    SetError(error.massage)
                }
            }
            catchProduct()
        }, [])
    return(
        <section className='products'>
            <div className="cont">
            <h2 className="decription__card">WOMEN’S FASHION</h2>
          <p className="desc1">Shop our new arrivals from established brands</p>
          </div>
        <div className="container grid">
        {productMale.map(item => (
                        <Cards
                            key={item.id}
                            imgLink={item.image} 
                            desc={item.category}
                            title={item.title}
                            newPrice={`$${item.price}`}
                            oldPrice={`$${item.price + 100}`}
                        />
                    ))}
            </div>
            </section>
    )
}
export default ProductsWomen;