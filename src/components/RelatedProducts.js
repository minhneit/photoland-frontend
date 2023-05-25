import React from 'react';

//useFetch hook
import useFetch from '../hooks/useFetch';

//component
import ProducSlider from '../components/ProductSlider';

const RelatedProducts = ({ categoryTitle }) => {
    const { data } = useFetch(`/products?populate=*&filters[categories][title]=${categoryTitle}`);
    // console.log(data);
    return (
        <div className="mb-16">
            <div className="container mx-auto">
                <h2 className="h2 mb-6 text-center lg:text-left">Related Products</h2>
                <ProducSlider data={data} />
            </div>
        </div>
    );
};

export default RelatedProducts;
