function ColorPicker({ setButtonLogo }) {

    const colors = ["primary", "dark", "secondary", "success", "danger", "light", "warning", "info"];
    const picker = colors.map((color) => {
        let clas = `bi bi-app icon text-${color}`;
        return (
            <div 
                className="col" 
                key={color}
                onClick={e => setButtonLogo('color', color)}
            >
                <i className={clas}></i>
            </div>
        );
    });

    return (
        <div className="mt-2">
            <hr />
            <div className="row row-cols-3">
                {picker}
            </div>
        </div>
    );
}

export default ColorPicker;