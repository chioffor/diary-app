import { useState } from 'react';
// import { OverlayTrigger } from 'react-bootstrap';
import { v4 } from 'uuid';
import { EmojiList } from '../../emojis';
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
                
    };

    const handleClick = (
        <div className="d-flex">
            <div>Color</div>
            <div>Emoji</div>
        </div>
    );

    const emojis = EmojiList['emoticons'];
    const emojiList = emojis.map((emoji) => {
        let i = "0x" + emoji;
        let e = String.fromCodePoint(i);
        return (
            <div className="col">{e}</div>
        );
    });

    return (       
        <div className="p-2 mb-0">            
            <div className="d-flex border-0 mb-2">
                {/* <Dropdown>
                    <Dropdown.Toggle variant="light">
                            <i className={choice}></i>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item><ColorPicker setColor={setColor} /></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> */}
                {/* <OverlayTrigger placement="right" overlay={popover}> */}
                <div className="ms-2 position-relative dropdown">
                    <button class="btn btn-primary border-0" onClick={handleClick}>Click me</button>
                    <div className="picker shadow p-2 mt-1">
                        <div className="d-flex mb-2">
                            <div className="picker-color text-white ms-1 me-2">Colors</div>
                            <div className="picker-emoji text-white">Emoji</div>
                        </div>
                        <div className="ms-1 text-muted frequently-used">Frequently used</div>
                        <div className="row row-cols-10">
                            {emojiList}
                        </div>
                        
                    </div>
                </div>
                
                {/* </OverlayTrigger> */}
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

function ColorPicker({ setColor }) {

    const handleClick = (e) => {
        e.preventDefault();
        //alert('yaya');
    }
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
            <span onClick={handleClick}>Color</span>
            <div className="row row-cols-3">
                {picker}
            </div>
        </div>
    );
}

export default NewCategoryInput;