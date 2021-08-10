// import Picker from 'emoji-picker-react';
import CategoryList from './Categories/CategoryList';

function TaskPage({ openCategory }) {

    return (
        <div className="container border shadow p-3 mb-5 rounded mt-2 page">
        <div className="fw-bold h4 mb-2 text-center">Task Page</div>
            <CategoryList 
                openCategory={openCategory}
            />
        </div>
    );
}



export default TaskPage;