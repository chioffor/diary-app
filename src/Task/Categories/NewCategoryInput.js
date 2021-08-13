import { useState } from 'react';
import { v4 } from 'uuid';
import { EmojiList } from '../../emojis';
import { storageExists } from '../../helpers';
import Picker from '../../Picker/Picker';

function NewCategoryInput({ openCategory }) {

    const [category, setCategory] = useState('');
    const [iconObject, setIconObject] = useState({});
    
    const setButtonLogo = (type, value) => {
        setIconObject({
            type: type,
            value: value,
        });
        document.getElementById("picker").classList.toggle('show');
    };

    const handleChange = (e) => {
        setCategory(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let data = [
            {
                name: category,
                icon: iconObject,
                id: v4(),
                tasks: [],
            },
        ];

        if (storageExists()) {
            let newData = {
                name: category,
                icon: iconObject,
                id: v4(),
                tasks: [],
            };

            let x = JSON.parse(localStorage.getItem('category'));
            x.push(newData);
            localStorage.setItem('category', JSON.stringify(x));
            openCategory(newData);
        } else {
            localStorage.setItem('category', JSON.stringify(data));
            openCategory(data[0]);
        }      
                
    };

    const handleClick = (e) => {
        console.log(Object.keys(EmojiList), );
        document.getElementById("picker").classList.toggle("show");
    }


    const className = `bi bi-app text-${iconObject.value}`;    
    const icon = iconObject.type  
                    ? iconObject.type === 'color' 
                        ? <i className={className}></i>
                        : String.fromCodePoint(iconObject.value)
                    : <i className="bi bi-app text-info"></i>;

    return (       
        <div className="p-2 mb-0">            
            <div className="d-flex border-0 mb-2">
                
                <div className="ms-2 position-relative dropdown">
                    <button className="btn bg-light border-0" onClick={handleClick}>
                        <span className="me-2">{icon}</span>
                        <i className="bi bi-chevron-down text-dark"></i>
                    </button>
                    <div className="picker shadow p-2 mt-1 bg-light" id="picker">
                        <Picker setButtonLogo={setButtonLogo} />                    
                        
                    </div>
                </div>
                
                <form onSubmit={handleSubmit}>

                    <input 
                        type="text" 
                        className="ms-2 form-control border-0 bg-light" 
                        placeholder="Category name"
                        value={category} 
                        onChange={handleChange}
                    />
                </form>
            </div>
            
        </div>
        
    )
}


export default NewCategoryInput;