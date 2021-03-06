import { getIcon } from '../helpers';

function SubtaskPage({ taskObj, category, goToPage }) {
    return (
        <div className="position-relative container-fluid border shadow p-3 rounded-3 page">
            <button className="float-end btn" onClick={e => goToPage('category-page')}>
                <i className="bi bi-x-lg"></i>
            </button>
            <div className="text-center fw-bold h4 mt-3">Subtask Page</div>
            <div className="">
                <input className="form-check-input ms-auto me-2" type="checkbox" />
                <span className="fw-bold">{taskObj.name}</span>
            </div>
            
            <hr />
            <div className="subtask-section">
                <div className="border-0 mt-3 rounded-3 subtask-options">
                    <div className="d-flex justify-content-between p-2">
                        <div className="subtask-options-text my-auto">Category</div>
                        <div className="shadow-sm p-2 rounded-3 category-button my-auto">
                            <span className="my-auto">{getIcon(category)}</span>
                            <span className="my-auto category-list-item-name">{category.name}</span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between p-2">
                        <div className="subtask-options-text my-auto">Due date</div>
                        <div className="border-0 shadow-sm bg-white p-2 rounded-3">
                            <span className="category-list-item-name my-auto">10/05/2021</span>
                        </div>
                    </div>              

                </div>

                <div>
                    <textarea className="form-control border-0 mt-3 bg-light subtask-options" placeholder="Write a note..." rows="5"></textarea>
                </div>

                <div className="mt-2">
                    <ul className="list-group">
                        <li className="list-group-item text-muted border-0">
                            <input className="form-check-input me-2 border-0" type="checkbox" />
                            <span>Finish the designs</span>
                        </li>
                        <li className="list-group-item text-muted border-0">
                            <input className="form-check-input me-2 border-0" type="checkbox" />
                            <span>Prepare the presentation</span>
                        </li>
                        <li className="list-group-item text-muted border-0">
                            <input className="form-check-input me-2 border-0" type="checkbox" />
                            <span>Finish the designs</span>
                        </li>
                        <li className="list-group-item text-muted border-0">
                            <input className="form-check-input me-2 border-0" type="checkbox" />
                            <span>Prepare the presentation</span>
                        </li>
                    </ul>
                    {/* subtaskssss */}
                </div>

                <div className="mb-2">
                    <div className="btn">
                        <span className="me-3"><i className="bi bi-plus"></i></span>
                        Add a subtask
                    </div>
                </div>
            </div>

            <div className="position-absolute start-0 end-0 bottom-0 mb-2 p-2">
                <div className="list-group">
                    <div className="list-group-item">File 1.pdf</div>
                    <div className="list-group-item">File2.pdf</div>
                </div>
                <div className="d-flex justify-content-around">
                    <button className="btn form-control border me-2 rounded add-file">Add a file</button>
                    <button className="btn form-control border rounded delete-task">Delete task</button>
                </div>
            </div>

        </div>
    )
}

export default SubtaskPage;