import { useEffect, useState } from 'react';
import NewCategoryCreate from './NewCategoryCreate';
import NewCategoryInput from './NewCategoryInput';
import {getStorageItems} from '../../helpers';

function CategoryList({ openCategory }) {   

    const [clicked, setClicked] = useState(false);   

    const [categories, setCategories] = useState([]);    

    useEffect(() => {
        let category = getStorageItems() || [];
        setCategories(category);
    }, []);

    const displayNewTaskInput = () => {
        setClicked(true);
    };

    const handleCategoryItemClick = (e, catego) => {
        openCategory(catego);
    }


    const categos = categories ? categories.map((catego) => (

        <li 
            className="list-group-item border-0 mb-2 d-flex btn justify-content-between" 
            key={catego.id}
            onClick={e => handleCategoryItemClick(e, catego)}
        >
            <div className="">
                <span className="me-3"><i className={catego.iconClassName}></i></span>
                {catego.name}
            </div>
            <div className="bg-light rounded">
                <div className="font-monospace fw-light">{catego.tasks.length}</div>
            </div>
        </li> 
    )) : [];

    return (
        <div>
            <div className="list-group-item border-0 mb-2 d-flex">
                <div className="flex-grow-1">
                    <span className="me-3"><i className="bi bi-house"></i></span>
                    Home
                </div>
                <div className="bg-light rounded">
                    <div className="font-monospace">12</div>
                </div>
            </div>
            
            <div className="list-group-item border-0 mb-2 d-flex">
                <div className="flex-grow-1">
                    <span className="me-3"><i className="bi bi-calendar"></i></span>
                    Today
                </div>
                <div className="bg-light rounded">
                    <div className="font-monospace fw-lighter">6</div>
                </div>
            </div> 

            <hr/>          
        
            <ul className="list-group border-0">
                {categos}
                
                { clicked ? 
                    <NewCategoryInput
                        openCategory={openCategory} 
                    /> : 
                        <NewCategoryCreate 
                            displayNewTaskInput={displayNewTaskInput} 
                            
                        /> }
            </ul>
        </div>
    );
}

export default CategoryList;