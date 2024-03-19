//criarFila(size)
//
//removerItem()
//

export function createQueue(size = 10){
    return [...new Array(size)]
}

export function addItemQueue(queue, item){
    if(queue.includes(undefined)){
        const index = queue.findIndex(element => element === undefined)
        queue[index] = item
        console.log(`"[${item}]" Foi inserido na fila, na posição -> "[${index}]"`)
        console.log(queue)
    }
}

// export function removeItemQueue(queue){
//     if(queue[0] !== undefined){
//         queue[0] = undefined
//         for(let i = 1; i < queue.length; i++){
//             queue[i-1] = queue[i]
//         }
//         queue[queue.length - 1] = undefined
//         return
//     }
//     console.error("A fila está vazia")
// }

export function removeItemQueue(queue){
    if(queue[0] !== undefined){
        queue.shift()
        return
    }
    console.error("A fila está vazia")
}

