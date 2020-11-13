function choice(items){
    let res = Math.floor(Math.random() * items.length)
    return items[res];
}

function remove(items, item){
    let idx = items.indexOf(item);
    if(idx === -1){
        return undefined
    }
    items.splice(idx,1)
    return items;
}


export { choice, remove }