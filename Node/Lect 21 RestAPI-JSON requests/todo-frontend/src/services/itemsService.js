export const addItemToServer = async (task, date) => {
    const response = await fetch("http://localhost:3001/api/todo",
    {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        }, 
        body : JSON.stringify({task, date})
    })
    const item = await response.json();
    return mapServerItemToLocaltem(item);
}


export const getItemsFromServer = async () => {
    const response = await fetch("http://localhost:3001/api/todo");
    const item = await response.json();
    return item.map(mapServerItemToLocaltem);
}

export const markItemCompleted = async (id) => {
    const response = await fetch(`http://localhost:3001/api/todo/${id}/completed`, {
        method : "PUT"
    });
    const items = await response.json();
    return mapServerItemToLocaltem(items);
}


export const deleteItem = async (id) => {
    await fetch(`http://localhost:3001/api/todo/${id}`, {
        method : "DELETE"
    });
    return id;

}

const mapServerItemToLocaltem = (serverItem) => {
    return {
        id : serverItem._id,
        name : serverItem.task,
        dueDate : serverItem.date,
        completed : serverItem.completed,
        createdAt : serverItem.createdAt,
        updatedAt : serverItem.updatedAt
    };
}