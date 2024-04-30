import Button from "@/components/Elements/Button";
import CardProduct from "@/components/Fragments/CardProduct";
import { Fragment, useState } from "react";


const products = [
    {
        id: 1,
        title: "Pikachu Electric",
        price: 600000,
        image: "/images/pikachu.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi iusto quas magnam molestiae. Rerum enim quae perferendis iusto"

    },
    {
        id: 2,
        title: "Syer Stone",
        price: 700000,
        image: "/images/pikachu.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."

    },
    {
        id: 3,
        title: "Indomaret Electric",
        price: 200000,
        image: "/images/pikachu.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi iusto quas magnam molestiae. Rerum enim quae perferendis iusto"

    },
    {
        id: 4,
        title: "Halodoc Doc",
        price: 500000,
        image: "/images/pikachu.jpg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."

    }
]


const ProductPage = ()=> {
    const [cart, setCart] = useState([
        {
            id: 1,
            qty: 1,
        }
    ]);

    const handleAddtoCart = (id) => {
        if(cart.find((item) => item.id === id)){
            setCart(cart.map((item) => item.id === id ? {...item, qty: item.qty + 1} : item));
        } else {
            setCart([...cart, {id, qty: 1}]);
        }
    }

    const email = localStorage.getItem('email')
    const handleLogout = () => {
        localStorage.removeItem('email');
        window.location.href = "/login";
    }
    return (
        <Fragment>
            <div className="flex justify-end h-20 bg-blue-900 text-white items-center px-10">
                {email}
                <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
            </div>
            <div className="flex justify-center py-5">
            <div className="w-3/5 flex flex-wrap">
            {products.map((product) => (
                <CardProduct key={product.id}>
                    <CardProduct.Header image={product.image}/>
                    <CardProduct.Body title={product.title}>
                        {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer price={product.price} handleAddtoCart={handleAddtoCart} id={product.id}/>
                </CardProduct>
            ))}
            </div>
            <div className="w-2/5">
                <h1 className="text-3xl font-bold text-blue-900 ml-5 mb-2">Cart
                </h1>
                <table className="text-left table-auto border-separate border-spacing-x-5">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => {
                            const product = products.find((product) => product.id === item.id);
                            return (
                                <tr key={item.id}>
                                    <td>{product.title}</td>
                                    <td>{item.qty}</td>
                                    <td>{product.price}</td>
                                    <td>{product.price * item.qty}</td> 
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            </div>
        </Fragment>
    )
}



export default ProductPage;