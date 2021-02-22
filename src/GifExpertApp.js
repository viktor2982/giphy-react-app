import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [ categories, setCategories ] = useState( ['Dragon Ball'] );

    // const handleAdd = () => {
    //     // setCategories( [...categories, 'HunterXHunter'] );
    //     setCategories( cats => [...cats, 'HunterXHunter'] );
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />
            {
                categories.map( (category) => (
                    <GifGrid
                        key={ category }
                        category={ category }
                    />
                ))
            }
        </>
    )
}

export default GifExpertApp
