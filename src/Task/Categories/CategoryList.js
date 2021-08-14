import { useEffect, useState } from 'react';
import NewCategoryCreate from './NewCategoryCreate';
import NewCategoryInput from './NewCategoryInput';
import { getStorageItems, getIcon, toTitleCase } from '../../helpers';

function CategoryList({ openCategory }) {   

    const [clicked, setClicked] = useState(false);   

    const [categories, setCategories] = useState([]);    

    useEffect(() => {
        let category = getStorageItems();
        setCategories(category);
    }, []);

    const displayNewTaskInput = () => {
        setClicked(true);
    };

    const handleCategoryItemClick = (e, catego) => {
        openCategory(catego);
    }    

    const categos = categories.map((category) => {
        
        const icon = getIcon(category);

        return (<li 
            className="list-group-item border-0 d-flex btn justify-content-between category-list-item" 
            key={category.id}
            onClick={e => handleCategoryItemClick(e, category)}
        >
            <div className="category-list-icon">
                <span className="me-2 my-auto">{icon}</span>
                <span className="category-list-item-name my-auto">{toTitleCase(category.name)}</span>
            </div>
            <div className="">
                <div className="font-monospace my-auto">{category.tasks.length}</div>
            </div>
        </li>) 
    });

    return (
        <div>            
        
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