import "./ItemListContainer.css";

const Item = ({ product }) => {
    return (
        <article className="product-card">
            <img src={product.img} alt={product.name} />
            <div className="product-details">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p className="price">Precio: ${product.price}</p>
                <label htmlFor={`quantity-${product.id}`}>Cantidad:</label>
                <input
                    id={`quantity-${product.id}`}
                    type="number"
                    defaultValue="1"
                    min="1"
                />
                <button>Agregar al carrito</button>
            </div>
        </article>
    );
};

export const ItemListContainer = () => {
    // Por ahora, vamos a usar datos de ejemplo. Más adelante los obtendrás de una API.
const products = [
    {
        id: 1,
        name: "Auriculares Inalámbricos",
        description: "Auriculares Bluetooth con cancelación de ruido",
        price: 120,
        img: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=150&q=80",
    },
    {
        id: 2,
        name: "Smartwatch Deportivo",
        description: "Reloj inteligente con monitor de ritmo cardíaco",
        price: 200,
        img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=150&q=80",
    },
    {
        id: 3,
        name: "Cámara Instantánea",
        description: "Cámara instantánea para capturar recuerdos al instante",
        price: 150,
        img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=150&q=80",
    },
    {
        id: 4,
        name: "Mochila Urbana",
        description: "Mochila resistente al agua con múltiples compartimentos",
        price: 90,
        img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=150&q=80",
    },
];

    return (
        <div className="item-list-container">
            <h2>Productos</h2>
            {products.map((p) => (
                <Item key={p.id} product={p} />
            ))}
        </div>
    );
};
