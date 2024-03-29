import PC from "./productCard"
const products = [
    {
        title: "Apple iPhone 14",
        price: "Rs. 1,00,000" 
    },
    {
        title: "Apple iPhone 13",
        price: "Rs. 70,000" 
    },
    {
        title: "Google Pixel 7",
        price: "Rs. 50,000" 
    },
    {
        title: "Nokia 1100",
        price: "Rs. 2,000" 
    },
    {
        title: "Samsung Galaxy S10",
        price: "Rs. 1,00,000" 
    },
    {
        title: "Sony Xperia S10",
        price: "Rs. 1,00,000" 
    }
];
export default function Products(){
    return (
    <div>
        {products.map(function(item){
            return <PC title={item.title} price = {item.price} />;
        })}
    </div>
    );
}