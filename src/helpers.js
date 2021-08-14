// async function updateData() {
//     localStorage.setItem(item);
// }
import { v4 } from 'uuid';

export function storageExists() {
    let x = localStorage.getItem('category');
    if (x) {
        return true;
    } else {
        return false;
    }
}

export function getStorageItems() {
    let i = JSON.parse(localStorage.getItem('category'));
    if (i === null) {
        let x = [
            {
                name: "Personal",
                icon: { type: 'color', value: 'info' } ,
                id: v4(),
                tasks: [],
            },
            {
                name: "Work",
                icon: { type: 'color', value: 'warning' } ,
                id: v4(),
                tasks: [],
            },
        ];
        localStorage.setItem('category', JSON.stringify(x));
    }
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

export function getIcon(category) {
    let icon;
    if (category.icon.type === 'color') {
        let className = `bi bi-app me-2 text-${category.icon.value}`
        icon = <i className={className}></i>;
    } else {
        icon = <span className="me-2">{String.fromCodePoint(category.icon.value)}</span>;
    }

    return icon;
}

export function toTitleCase(word) {
    let i = word.toLowerCase();
    let cap_of_first_al = i[0].toUpperCase();
    return cap_of_first_al + i.slice(1);
}