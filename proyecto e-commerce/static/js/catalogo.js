document.addEventListener('DOMContentLoaded', () => {

    const productos = [
      { "id": 1, "name": "Tarjeta de Video NVIDIA RTX 4060", "description": "GIGABYTE WINDFORCE OC 8GB", "price": 389990, "discount": 22, "imageUrl": "https://foreign.cl/wp-content/uploads/2024/01/https___media-prod-use-1.mirakl.webp" },
      { "id": 2, "name": "Monitor Gamer MSI MAG 27\"", "description": "240Hz, 1ms, Adaptive Sync", "price": 119990, "discount": 33, "imageUrl": "https://www.winpy.cl/files/39899-1414-Monitor-Gamer-MSI-MAG-275F-1.jpg" },
      { "id": 3, "name": "Tarjeta de Video AMD Radeon RX 9070", "description": "Prime Edition 16GB GDDR6", "price": 859990, "discount": 34, "imageUrl": "https://media.spdigital.cl/thumbnails/products/1747420155561-f3bad3f68d964cbf6569cbdd49b3b8ead692e3be_ebd9a6bd_thumbnail_51.jpg" },
      { "id": 4, "name": "Mouse Gamer G Pro X Superlight", "description": "Inalámbrico, ultra ligero, sensor HERO 25K", "price": 94990, "discount": 44, "imageUrl": "https://cdnx.jumpseller.com/smart-tech/image/18848391/D_NQ_NP_2X_798029-MLA45377518559_032021-F.webp?1714699718" },
      { "id": 5, "name": "Procesador Intel Core i5-13600K", "description": "14 núcleos, 20 hilos, hasta 5.1 GHz", "price": 319990, "discount": 15, "imageUrl": "https://media.solotodo.com/media/products/1648709_picture_1664520396.jpg" },
      { "id": 6, "name": "Memoria RAM Corsair Vengeance 32GB", "description": "2x16GB, DDR5, 5600MHz", "price": 129990, "discount": 18, "imageUrl": "https://http2.mlstatic.com/D_NQ_NP_769056-MLU73569178644_122023-O.webp" },
      { "id": 7, "name": "Placa Madre ASUS ROG Strix Z790-E", "description": "Wi-Fi 6E, PCIe 5.0, DDR5", "price": 499990, "discount": 10, "imageUrl": "https://dlcdnwebimgs.asus.com/files/media/9A827026-9AD2-4CE7-9958-DB583A2DB6F8/v1/img/kv/ROG-Strix-Z790-E-Gaming.png" },
      { "id": 8, "name": "Disco SSD Samsung 970 EVO Plus 1TB", "description": "NVMe PCIe 3.0, hasta 3500 MB/s", "price": 89990, "discount": 25, "imageUrl": "https://http2.mlstatic.com/D_NQ_NP_702579-CBT71964289274_092023-O.webp" },
      { "id": 9, "name": "Fuente de Poder Corsair RM850e", "description": "850W 80 PLUS Gold Fully Modular", "price": 109990, "discount": 12, "imageUrl": "https://www.winpy.cl/files/36834-8569-Fuente-de-Poder-Corsair-RM850e-de-850W-1.jpg" },
      { "id": 10, "name": "Gabinete Lian Li O11 Dynamic EVO", "description": "Mid-Tower, Cristal Templado, Negro", "price": 179990, "discount": 8, "imageUrl": "https://media.spdigital.cl/thumbnails/products/9jyu22ye_3a66a62d_thumbnail_512.jpg" },
      { "id": 11, "name": "Teclado Mecánico HyperX Alloy Origins", "description": "Switches Red, RGB, Layout Español", "price": 79990, "discount": 20, "imageUrl": "https://www.winpy.cl/files/33309-9088-HyperX-Alloy-Origins-4.jpg" },
      { "id": 12, "name": "Auriculares Gamer Logitech G733", "description": "Inalámbricos, LIGHTSPEED, DTS Headphone:X 2.0", "price": 109990, "discount": 15, "imageUrl": "https://media.spdigital.cl/thumbnails/products/53_teu5s_b63b51ea_thumbnail_512.png" }
    ];

    const featuredListContainer = document.getElementById('featured-product-list');
    const catalogListContainer = document.getElementById('catalog-product-list');

    const renderProducts = (container, productArray) => {
        container.innerHTML = '';
        const allCardsHTML = productArray.map(product => {
            const formattedPrice = `$${product.price.toLocaleString('es-CL')}`;
            return `
                <div class="col-lg-4 col-md-6 col-12">
                    <div class="card product-card h-100">
                        <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text text-body-secondary">${product.description}</p>
                            <div class="mt-auto">
                                <span class="badge bg-success">-${product.discount}%</span>
                                <p class="product-price my-2">${formattedPrice}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        container.innerHTML = allCardsHTML;
    };

    if (featuredListContainer) {
        const shuffled = [...productos].sort(() => 0.5 - Math.random());
        const randomProducts = shuffled.slice(0, 3);
        renderProducts(featuredListContainer, randomProducts);
    }
    
    if (catalogListContainer) {
        renderProducts(catalogListContainer, productos);
    }
});