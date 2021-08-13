import { useState } from 'react';
import { EmojiList } from '../emojis';

function EmojiPicker({ setButtonLogo }) {

    const [emojiCategory, setEmojiCategory] = useState('');

    const handleClick = (emojiCategory) => {
        setEmojiCategory(emojiCategory);
    };

    const defaultEmojiCategory ='emoticons';

    const emoChoices = Object.keys(EmojiList);
    const emoS = emoChoices.map(emo => {
        let i = String.fromCodePoint("0x" + EmojiList[emo][0]);
        const key = EmojiList[emo][0];
        return (
            <div className="em me-2" key={key} onClick={e => handleClick(emo)}>{i}</div>
        );
    });
      

    return (
        <div className="mt-2">
            <div className="d-flex mt-2 justify-content-between">
                {emoS}                
            </div>
            <hr />
            <div className="">                
                {
                    emojiCategory  
                        ? 
                        <EmojiCategoryItems 
                            emojiCategory={emojiCategory}
                            setButtonLogo={setButtonLogo} 
                        /> 
                        :   
                        <EmojiCategoryItems
                                emojiCategory={defaultEmojiCategory}
                                setButtonLogo={setButtonLogo}
                        />
                }
            </div>
        </div>
    );
}


function EmojiCategoryItems({ emojiCategory, setButtonLogo }) {

    const emojis = EmojiList[emojiCategory];

    const emojiList = emojis.map((emoji) => {
        let i = "0x" + emoji;
        let e = String.fromCodePoint(i);
        return (
            <div 
                className="col icon" 
                key={emoji}
                onClick={event => setButtonLogo('emoji', i)}
            >
                    {e}
            </div>
        );
    });

    return (
        <div className="row row-cols-8">
            {emojiList}
        </div>
    );
}


export default EmojiPicker;