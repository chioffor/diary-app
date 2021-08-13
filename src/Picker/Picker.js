import { useState } from 'react';
import ColorPicker from './ColorPicker';
import EmojiPicker from './EmojiPicker';

function Picker({ setButtonLogo }) {

    const [choice, setChoice] = useState('color');

    const handleClick = (data) => {
        setChoice(data);
    };

    return (
        <div>
            <div className="d-flex">
                <div className="picker-color me-2 btn" onClick={e => handleClick('color')}>Color</div>
                <div className="picker-emoji btn" onClick={e => handleClick('emoji')}>Emoji</div>
                {/* <ColorPicker />
                <EmojiPicker /> */}
            </div>
            {
                choice === 'color' ? 
                    <ColorPicker setButtonLogo={setButtonLogo} /> :
                        <EmojiPicker setButtonLogo={setButtonLogo} /> 
            }
        </div>
        
    );
}

export default Picker;