// import Picker from 'emoji-picker-react';
import CategoryList from './Categories/CategoryList';

function TaskPage({ openCategory, categories }) {

    return (
        <div className="container-fluid border shadow p-3 rounded page">
            <div className="fw-bold h4 mb-2 text-center">Task Page</div>
            <CategoryList 
                openCategory={openCategory}
                categories={categories}
            />

        </div>
        
    );
}



export default TaskPage;