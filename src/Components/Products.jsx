
import { Cards } from "./Casds"
import img1 from '../assets/img/girl1.png'
import img2 from '../assets/img/girl2.png'
import img3 from '../assets/img/girl3.png'
import img4 from '../assets/img/girl4.png'
export const Products = () => {
    return(
        <section className='products'>
            <div className="cont">
            <h2 className="decription__card">WOMEN’S FASHION</h2>
          <p className="desc1">Shop our new arrivals from established brands</p>
          </div>
        <div className="container grid">
            <Cards 
            imgLink={img1}
            desc={"IGURE"}
            title={"GREEN MUSCLE FIT POLO SHIRT"}
            newPrice={"$129.00"}
            oldPrice={"$229.00"}
            />
            <Cards 
            imgLink={img2}
            desc={"IGURE"}
            title={"GREEN MUSCLE FIT POLO SHIRT"}
            newPrice={"$129.00"}
            oldPrice={"$229.00"}
            />
            <Cards 
            imgLink={img3}
            desc={"IGURE"}
            title={"GREEN MUSCLE FIT POLO SHIRT"}
            newPrice={"$129.00"}
            oldPrice={"$229.00"}
            />
            <Cards 
            imgLink={img4}
            desc={"IGURE"}
            title={"GREEN MUSCLE FIT POLO SHIRT"}
            newPrice={"$129.00"}
            oldPrice={"$229.00"}
            />
            </div>
            </section>
    )
}
export default Products;