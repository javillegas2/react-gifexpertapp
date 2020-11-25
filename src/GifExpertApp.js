import React, { useState } from 'react';
import { AddCategory } from './componentes/AddCategory';
import { GifGrid } from './componentes/GifGrid';


const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samuray X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = ()=>{
    //     const category = 'hunterxhunter';
    //     setCategories([...categories, category]);

    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory setCategories={setCategories} />
            <ol>
                {
                    categories.map((category, index) => {
                        return <GifGrid
                            key={category}
                            category={category}
                        />
                    })
                }
            </ol>

        </>

    );

};

export default GifExpertApp;