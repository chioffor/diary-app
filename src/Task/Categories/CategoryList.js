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

    const categos = categories ? categories.map((catego) => {
        let icon;
        if (catego.icon.type === 'color') {
            let className = `bi bi-app me-1 text-${catego.icon.value}`;
            icon = <i className={className}></i>;
        } else {
            let i = catego.icon.value;
            icon = String.fromCodePoint(i);
        }

        return (<li 
            className="list-group-item border-0 mb-2 d-flex btn justify-content-between" 
            key={catego.id}
            onClick={e => handleCategoryItemClick(e, catego)}
        >
            <div className="category-list-icon">
                <span className="me-3">{icon}</span>
                <span className="category-list-name">{catego.name}</span>
            </div>
            <div className="bg-light rounded">
                <div className="font-monospace fw-light">{catego.tasks.length}</div>
            </div>
        </li>) 
    }) : [];

    return (
        <div>
            <div className="list-group-item border-0 mb-2 d-flex">
                <div className="flex-grow-1">
                    <span className="me-3">&#127968;</span>
                    Home
                </div>
                <div className="bg-light rounded">
                    <div className="font-monospace">12</div>
                </div>
            </div>
            
            <div className="list-group-item border-0 mb-2 d-flex">
                <div className="flex-grow-1">
                    <span className="me-3">&#128197;</span>
                    Today
                </div>
                <div className="bg-light rounded">
                    <div className="font-monospace fw-lighter">6</div>
                </div>
            </div> 

            <hr/>          
        
            { 
                clicked ? 
                    <NewCategoryInput openCategory={openCategory} /> : 
                        <NewCategoryCreate displayNewTaskInput={displayNewTaskInput} />
            }
            <ul className="list-group border-0">
                {categos}                
                
            </ul>

            <div>
                
            </div>
        </div>
    );
}

export default CategoryList;