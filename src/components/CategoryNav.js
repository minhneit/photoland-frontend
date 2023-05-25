import React from 'react';

//useFecth
import useFecth from '../hooks/useFetch';
import { Link } from 'react-router-dom';

const CategoryNav = ({ category }) => {
    const { data } = useFecth('/categories');
    return (
        <aside className="hidden xl:flex">
            <div className="bg-primary flex flex-col w-[286px] h-[500px] rounded-[8px] overflow-hidden">
                <div className="bg-accent py-4 uppercase font-semibold flex justify-center items-center">
                    Browse Categories
                </div>
                <div className="flex flex-col gap-y-6 p-6">
                    {data?.map((category) => {
                        return (
                            <Link to={`/products/${category.id}`} className="uppercase" key={category.id}>
                                {category.attributes.title}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
};

export default CategoryNav;
