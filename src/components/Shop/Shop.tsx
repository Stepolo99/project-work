import React, { ComponentProps } from 'react'
import "./Shop.css" 

type ShopProps = {
   addToCart: (product: number) => void 
}
const Shop = (props: ShopProps) => {
   
    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <div className="col col-md-3 d-flex">
                        <Card addToCart={props.addToCart} name="Experience To Amesterdam" className='Prova' img={"https://www.miprendoemiportovia.it/wp-content/uploads/2024/03/Amsterdam-2.jpg"} price={237.90}>
                        </Card>
                    </div>
                    <div className="col col-md-3 d-flex">
                        <Card addToCart={props.addToCart} name="Costa Azzurra" img={"https://www.miprendoemiportovia.it/wp-content/uploads/2024/03/costa-azzurra-in-auto-1.jpg"} price={150} >
                        </Card>
                    </div>
                    <div className="col col-md-3 d-flex">
                        <Card addToCart={props.addToCart} name="Lucerna in love" img={"https://www.miprendoemiportovia.it/wp-content/uploads/2024/03/lucerna4.jpg"} price={460}>
                        </Card>
                    </div>
                    <div className="col col-md-3 d-flex">
                        <Card addToCart={props.addToCart} name="Maldive my dream" img={"https://www.miprendoemiportovia.it/wp-content/uploads/2024/02/spiaggia-1.jpg"} price={1.500}>
                        </Card>
                    </div>
                    <div className="col col-md-3 d-flex">
                        <Card addToCart={props.addToCart} name="Il lontano Giappone" img={"https://www.miprendoemiportovia.it/wp-content/uploads/2024/02/3.-Kamakura-Giappone.jpg"} price={2.800}>
                        </Card>
                    </div>               
                    <div className="col col-md-3 d-flex">
                        <Card addToCart={props.addToCart} name="Tallin e il Baltico" img={"https://www.miprendoemiportovia.it/wp-content/uploads/2024/02/Caravanpark-a-Saue-Tallinn-1.jpg"} price={1.500}>
                        </Card>
                    </div>         
                </div>
            </div>
        </>
    )
}

function Card(props:ComponentProps<"div"> & {name:string; img:string; price:number; addToCart: (product: number) => void }) {
    return (
        <div className="text-center shadow p-3 mb-5 bg-body-tertiary rounded productCard">
            <img src={props.img} className="card-img-top" alt="pic" />
            <div className="card-body">
                <p className="card-text">{props.name}</p>
                <p>{props.children}</p>
                <p>{props.price} $</p>
                <button type="button" className="btn btn-success px-5 rounded-top" onClick={() => props.addToCart(props.price)}>Add</button>
            </div>
        </div>
    )
}

export default Shop