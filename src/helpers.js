function choice(items){
    let res = Math.floor(Math.random() * items.length)
    return items[res];
}

function remove(items, item){
    let idx = items.findIndex(item);
    if(idx === -1){
        return undefined
    }
    let removed = items.splice(idx,1)
    return removed;
}


export { choice, remove }