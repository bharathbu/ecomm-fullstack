import "./ProductCard.css"
export default function ProductCard({title,price}){
    return (
    <div className="card">
        <div>{title} </div>
        <div>{price} </div>
    </div>
    );  
}