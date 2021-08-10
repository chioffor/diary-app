import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { v4 } from 'uuid';
import { storageExists } from '../../helpers';

function NewCategoryInput({ openCategory }) {

    const [chosen, setChosen] = useState('');
    const [category, setCategory] = useState('');
    

    const choice = chosen ? chosen : `bi bi-app me-2 text-info`;

    const setColor = (e, color) => {
        setChosen(`bi bi-app me-2 text-${color}`);
    };

    const handleChange = (e) => {
        setCategory(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let data = [
            {
                name: category,
                iconClassName: chosen || choice,
                id: v4(),
                tasks: [],
            },
        ];

        if (storageExists()) {
            let newData = {
                name: category,
                iconClassName: chosen || choice,
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
        
        
    }

    return (       
        <li className="list-group-item d-flex border-0 mb-2">
            <Dropdown>
                <Dropdown.Toggle variant="light">
                        <i className={choice}></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item><ColorPicker setColor={setColor} /></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className="ms-2 form-control border-0 bg-light" 
                    placeholder="Category name"
                    value={category} 
                    onChange={handleChange}
                />
            </form>
        </li>
    )
}

function ColorPicker({ setColor }) {

    const colors = ["primary", "dark", "secondary", "success", "danger", "light", "warning", "info"];
    const picker = colors.map((color) => {
        let clas = `bi bi-app text-${color}`;
        return (
            <div 
                className="col" 
                key={color}
                onClick={e => setColor(e, color)}
            >
                <i className={clas}></i>
            </div>
        );
    });
    return (
        <div>
            Color
            <div className="row row-cols-3">
                {picker}
            </div>
        </div>
    );
}

export default NewCategoryInput;