const products = [
    {
        id: 1,
        name: 'Regular T-Shirt',
        href: '#',
        imageSrc: '/public/regular.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Oversized T-Shirts',
        href: '#',
        imageSrc: '/public/oversized.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Kids T-Shirts',
        href: '#',
        imageSrc: 'public/kid.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Crop Top',
        href: '#',
        imageSrc: '/public/crop top.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },

]
// bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30
export default function Categories() {
    return (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-1">
                <h2 className="text-2xl font-semibold text-black">Shop By Categories</h2>
            </div>
            <div
                className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

                {products.map((product) => (
                    <a key={product.id} href={product.href} className="group block">
                        <div
                            className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-7/8">
                            <img
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-75"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 flex items-end">
                                <div className="w-full bg-black/50 p-3">
                                    <div className="text-center -translate-y group-hover:opacity-75">
                                        <h3 className="text-sm font-semibold text-white">
                                            {product.name}
                                        </h3>
                                        <p className="text-xs text-gray-300">Shop Now →</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </a>
                ))}

            </div>

        </div>
    )
}
