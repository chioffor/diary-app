// async function updateData() {
//     localStorage.setItem(item);
// }

export function storageExists() {
    let x = localStorage.getItem('category');
    if (x) {
        return true;
    } else {
        return false;
    }
}

export function getStorageItems() {
    return JSON.parse(localStorage.getItem('category'));
}

export function getIndex(item, list_) {
    return list_.indexOf(item);
}

export function updateStorage(index, data) {
    let x = getStorageItems();
    x[index].tasks.push(data);
    localStorage.setItem('category', JSON.stringify(x));    
}

export function getTasks(categoryObj) {
    return categoryObj.tasks;
}