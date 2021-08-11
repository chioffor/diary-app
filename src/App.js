import { useState } from 'react';
import './App.css';
import TaskPage from './Task/TaskPage';
import DiaryPage from './Diary/DiaryPage';
import CategoryPage from './Task/Categories/CategoryPage';
import SubtaskPage from './SubTask/SubTaskPage';
// import { getStorageItems } from './helpers';

function App() {

  const [clicked, setClicked] = useState('');
  const [category, setCategory] = useState({});
  const [subtask, setSubtask] = useState({});

  // const [categories, setCategories] = useState([]);    

  // useEffect(() => {
  //     let category = getStorageItems() || [];
  //     setCategories(category);
  // }, []);

  
  const goToPage = (page) => {
    setClicked(page);
  }

  const openCategory = (data) => {
    setClicked('category-page');
    setCategory(data);
  };

  const openSubtaskPage = (task) => {
    setClicked('subtask-page');
    setSubtask(task);
  }


  switch (clicked) {
    case 'task-page':
      return (
        <TaskPage 
          openCategory={openCategory}
          // categories={categories}
        />
      );

    case 'subtask-page':
      return (
        <SubtaskPage 
          taskObj={subtask}
          category={category} 
          goToPage={goToPage}
        />
      );

    case 'diary-page':
      return <DiaryPage />

    case 'category-page':
      return (
        <CategoryPage 
          categoryObj={category} 
          openSubtaskPage={openSubtaskPage}
          goToPage={goToPage}
          openCategory={openCategory}
        />
      );

    default:
      return (
        <Home
          goToPage={goToPage}
        />
      )
  }  
}


function Home({ goToPage }) {
  return (
    <div className="App w-50 mt-2 position-absolute top-50 start-50 translate-middle d-flex">
      <button 
        className="shadow p-3 mb-5 rounded mx-auto bg-dark text-white"
        onClick={e => goToPage('task-page')}
      >
        Tasks
      </button>
      <button 
        className="shadow p-3 mb-5 rounded mx-auto bg-dark text-white"
        onClick={e => goToPage('diary-page')}
      >
        Diary
      </button>
    </div>
  );
}



export default App;
