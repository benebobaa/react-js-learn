import Button from "../Elements/Button";


const CardProduct = (props) => {
    const {children} = props;
    return (
        <div 
            className="w-full max-w-sm bg-gray-800 border border-slate-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
                {children}
            </div>
    )
}

const Header = (props) => {
    const {image} = props;
    return (
        <a href="">
            <img 
            src={image} 
            alt="product" 
            className="p-8 rounded-t-lg"/>
        </a>
    )
}

const Body = (props) => {
    const {title, children} = props;
    return (
        <div
            className="px-6 pb-5 h-full">
                <h5
                className="text-xl font-semibold tracking-tight text-white">
                {title}
                </h5>
                <p
                className="text-m text-white">
                {children}
                </p>
        </div>
    )
}

const Footer = (props) => {
    const {price, handleAddtoCart, id} = props;
    return (
        <div
            className="flex items-center justify justify-between px-6 pb-5">
            <span
                className="text-xl font-bold text-white">
                Rp. {price}
            </span>
            <Button
            classname="bg-blue-700"
            onClick={() => handleAddtoCart(id)}>
            Add to Cart
            </Button>
        </div>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;