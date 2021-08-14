// import Picker from 'emoji-picker-react';
import CategoryList from './Categories/CategoryList';

function TaskPage({ openCategory, categories }) {

    return (
        <div className="container-fluid border p-3 rounded page">
            <div className="fw-bold h4 mb-2 text-center">Task Page</div>

            <div className="mb-3 d-flex">
                <div className="flex-grow-1">
                    <span className="me-3">&#127968;</span>
                    <span className="default-category-item">Home</span>
                </div>
                <div className="bg-light rounded">
                    <div className="font-monospace">12</div>
                </div>
            </div>
            
            <div className="d-flex">
                <div className="flex-grow-1">
                    <span className="me-3">&#128197;</span>
                    <span className="default-category-item">Today</span>
                </div>
                <div className="bg-light rounded">
                    <div className="font-monospace">6</div>
                </div>
            </div> 
            <hr />
            <CategoryList 
                openCategory={openCategory}
                categories={categories}
            />

        </div>
        
    );
}



export default TaskPage;