// import { update } from "lodash";
import { useEffect, useState } from "react";
import { getStorageItems, updateStorage, toTitleCase } from '../../helpers';
import { v4 } from 'uuid';

function CategoryPage({ categoryObj, openSubtaskPage, goToPage, openCategory }) {

    const [clicked, setClicked] = useState(false);
    const [task, setTask] = useState('');    

    const handleClick = () => {
        setClicked(true);
    };

    // const handleClick1 = () => {
    //     document.getElementById("picker").classList.toggle('show');
    // }

    const handleTaskChange = (e) => {
        setTask(e.target.value);
    };

    const className = `bi bi-app text-${categoryObj.icon.value}`;
    const icon = categoryObj.icon.type  
                    ? categoryObj.icon.type === 'color' 
                        ? <i className={className}></i>
                        : String.fromCodePoint(categoryObj.icon.value)
                    : <i className="bi bi-app text-info"></i>;

    return (
        <div className="container-fluid border shadow p-3 rounded page" id="category-page">
            <button className="float-end btn" onClick={e => goToPage('task-page')}>
                <i className="bi bi-x-lg"></i>
            </button>
            <h4 className="text-center mt-3 mb-2">Category Page</h4>

            <div className="p-2 me-3">
                <div className="d-flex">                   
                    <div className="my-auto">
                        <div className="category-list-icon">
                            <span className="me-2">{icon}</span>
                            <span className="category-list-item-name">{toTitleCase(categoryObj.name)}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                {
                    categoryObj.tasks.length > 0 ? 
                    <TasksList 
                        categoryObj={categoryObj}
                        openSubtaskPage={openSubtaskPage}
                    /> : 
                    <EmptyCategoryDisplay />
                }
            </div>

            <div>
                { 
                    clicked ? 
                    <NewTaskInput
                        task={task}
                        handleTaskChange={handleTaskChange}
                        categoryObj={categoryObj}
                        openSubtaskPage={openSubtaskPage}
                    /> : 
                    <AddTask handleClick={handleClick} /> 
                }
            </div>
        </div>        
    );
}

// function ListOfCategories({ openCategory, categoryObj }) {

//     const handleClick = (category) => {
//         openCategory(category);
//     }

//     const x = JSON.parse(localStorage.getItem('category')).map((category) => {

//         const icon = getIcon(category);
//         if (category.id === categoryObj.id) {
//             return false;            
//         }
//         return ( 
//             <div className="d-flex mb-2 category-list-item btn" key={category.id} onClick={e => handleClick(category)}>
//                 <div className="my-auto">{icon}</div>
//                 <div className="my-auto">{category.name}</div>
//             </div>            
//         );
//     });

//     return (
//         <div>
//             {x}
//         </div>
        
//     );
// }


function TasksList({ categoryObj, openSubtaskPage }) {

    const [arr, setArr] = useState([]);

    const handleTaskClick = (e, task) => {
        openSubtaskPage(task);
    }

    useEffect(() => {
        let items = JSON.parse(localStorage.getItem('category'));
        let obj = items.find(item => item.id === categoryObj.id);
        console.log(obj.tasks);
        return setArr(obj.tasks);
    }, [categoryObj.id]);
    

    const categoryTasks = arr.map(task => (
        <li 
            className="list-group-item form-check btn border-0" 
            key={task.id}
            
        >
            <input className="form-check-input ms-auto me-2" type="checkbox" />
            <div className="d-flex justify-content-between" onClick={e => handleTaskClick(e, task)}>                    
                <div className="task-item-name">{task.name}</div>
                <div className="bg-light rounded">
                    <div className="font-monospace fw-light">{task.subtasks.length}</div>
                </div>
            </div>
                
        </li>
    ));

    return (
        <div>
            <hr />
            <ul className="list-group">
                {categoryTasks}
            </ul>
        </div>
    );
}

function NewTaskInput({ task, handleTaskChange, categoryObj, openSubtaskPage }) {

    const handleTaskSubmit = (e) => {
        e.preventDefault();
        let taskObj = {
            name: task,
            subtasks: [],
            id: v4(),
        };

        let items = getStorageItems();
        
        let t = items.find(task => (task.id === categoryObj.id));
        let taskIndex = items.indexOf(t);

        updateStorage(taskIndex, taskObj);
        openSubtaskPage(taskObj);        
    };

    return (
        <div className="mt-2 mb-2">
            <form onSubmit={handleTaskSubmit}>
                <input 
                    type="text"
                    className="form-control" 
                    placeholder="Enter a Task title" 
                    value={task}
                    onChange={handleTaskChange}
                />
            </form>
        </div>
    );
}

function AddTask({ handleClick }) {
    return (
        <button className="btn border-0 mb-2 mt-2" onClick={handleClick}>
            <span className="me-3"><i className="bi bi-plus"></i></span>
            Add task
        </button>
    );
}

function EmptyCategoryDisplay() {
    return (
        <div>
            <div className="text-muted text-center">No tasks yet!</div>            
        </div>
    );
}


export default CategoryPage;