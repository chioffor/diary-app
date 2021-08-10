function NewCategoryCreate({ displayNewTaskInput }) {

    return (
        <li 
            className="list-group-item btn border-0 mb-2"
            onClick={displayNewTaskInput}
        >
            <span className="me-3"><i className="bi bi-plus"></i></span>
            Create new list
        </li>
    )
}

export default NewCategoryCreate;