import { useNavigate } from "react-router-dom"
    const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://i.ibb.co/k6HSQ9x/product.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '999',
        color: 'Black',
    },
    {
        id: 2,
        name: 'Earthen Bottle',
        href: '#',
        price: '948',
        imageSrc: 'https://animedevta.com/cdn/shop/files/hanumanjibackwhite.png?v=1682580633&width=1000',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        color: 'Black',
    },
    {
        id: 3,
        name: 'Nomad Tumbler',
        href: '#',
        price: '935',
        imageSrc: 'https://5.imimg.com/data5/RM/CD/HG/ANDROID-64351513/product-jpeg.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        color: 'Black',
    },
    {
        id: 4,
        name: 'Focus Paper Refill',
        href: '#',
        price: '896',
        imageSrc: 'https://www.mydesignation.com/wp-content/uploads/2019/08/malayali-tshirt-mydesignation-mockup-image-latest-golden-.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        color: 'Black',
    },
    {
        id: 8,
        name: 'Machined Mechanical Pencil 3',
        href: '#',
        price: '935',
        imageSrc: 'https://www.mydesignation.com/wp-content/uploads/2020/08/theyyam-tshirt-mydesignation-image-.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        color: 'Black',
    },
    {
        id: 5,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '935',
        imageSrc: 'https://animedevta.com/cdn/shop/files/isro.png?v=1689397097&width=1000',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        color: 'Black',
    },
    {
        id: 6,
        name: 'Machined Mechanical Pencil 2',
        href: '#',
        price: '935',
        imageSrc: 'https://animedevta.com/cdn/shop/products/brownganeshoversized.png?v=1681452099&width=1000',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        color: 'Black',
    }, {
        id: 7,
        name: 'Machined Mechanical Pencil 3',
        href: '#',
        price: '935',
        imageSrc: 'https://animedevta.com/cdn/shop/files/vkwhite.png?v=1688368107&width=1000',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        color: 'Black',
    },

]

export default function Example() {
    const navigate = useNavigate();
    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                    <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <div key={product.id} className="group relative" >
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href={product.href}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.name}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">₹{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <button 
            style={{ 
            color: "black", 
            border: "1.2px solid black", 
            padding: "15px", 
            borderRadius: "10px",
            position:"relative",
            top : -50,
            }}
            onClick={()=>{
                navigate("/products")
            }}
            >View More</button>
        </>
    )
}