// 'use client'
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch, RootState } from '../../../../lib/store';
// import { fetchProductsAsync } from "@/lib/features/products/productsSlice";
// import ProductListSec from "@/components/common/ProductListSec";
// import BreadcrumbProduct from "@/components/product-page/BreadcrumbProduct";
// import Header from "@/components/product-page/Header";
import Tabs from "@/components/product-page/Tabs";
// import { Product } from "@/types/product.types";
// import { notFound } from "next/navigation";


export default async function ProductPage({ params }: { params: Promise<{ slug: string[] }> }) {


    console.log(params);
    
    // const dispatch: AppDispatch = useDispatch();
    // const productSelection = useSelector((state: RootState) => state.products.productSelection);

    // dispatch(fetchProductsAsync());

    // const { slug } = await params;

    // if (!slug) return notFound();
    // const productId = Number(slug[0]);

    // if (isNaN(productId)) {
    //     return notFound();
    // }
    // const productData: Product | null = productSelection.find((product) => product.id === productId) || null;


    // if (!productData?.title) {
    //     notFound();
    // }

    return (
        <main>
            <div className="max-w-frame mx-auto px-4 xl:px-0">
                <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
                {/* <BreadcrumbProduct title={productData?.title ?? "product"} />
                <section className="mb-11">
                    <Header data={productData} />
                </section> */}
                <Tabs />
            </div>
            <div className="mb-[50px] sm:mb-20">
                {/* <ProductListSec title="You might also like" data={productSelection} /> */}
            </div>
        </main>
    );
}
