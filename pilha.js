// Criar ela com tamanho
export function createPilha(tamanhoDaPilha = 10) { // Verifico se tem valor,senão, use 10
    // Criar uma array com o tamanho que pediram
    return [...new Array(tamanhoDaPilha)] // Desestruturação
}

// Inserir item
export function addItem(pilha, item) {

    if(pilha.includes(undefined)){
        const index = pilha.findIndex(element => element === undefined)
        pilha[index] = item
        console.log(`"${item}" foi adicionado, na posição "${index}" da pilha`)
        console.log(pilha)
        return
    }else{
        pilha.unshift(item)
        console.log(`"${item}" foi adicionado, na posição "${index}" da pilha`)
        return
    }
}

// Retirar item
export function removeItem(pilha){
    if(pilha.includes(undefined){
        pilha[indexOf(undefined) - 1] = undefined
        return
    }

    pilha[pilha.length - 1] = undefined
    return
}

//Procurar item
export function findItem(pilha, item){
   if(pilha.inclues(item)){
       console.log(pilha.indexOf(item)
       return
    }
    
    console.error("Item não foi encontrado")
    return
}

//Deletar todos os itens
export function deleteAllItems(pilha){
    for(let i = 0; i < pilha.length; ++i){
        pilha[i] = undefined
    }
    console.log("todos os itens da pilha foram deletados com sucesso", pilha)
    return
}

//Mudar posição do item
export function changePositionItem(pilha, item, psN){ //psV = posição velha | psN = posição nova 
    let psV = pilha.indexOf(item)

    if(psN === null || psN === undefined){
        console.log("Posição não especificada")
        return null
    }
    if(psN > pilha.length){
        console.log("Tamanho maior que a pilha")
        return null
    }
    if(psN === psV){
        console.log("O item já está nesta posição")
        return null

    }
    if(pilha[psN] !== undefined){
        console.log("Já existe algo nesta posição")
        return null
    }

    pilha[psN] = pilha[psV]
    pilha[psV] = undefined

    return (
    console.log(`Sucesso! "${item}" foi transferido da posição "${psV}" para a posição "${psN}"`) +
    console.log(pilha)
    )
}

//Checar se está vazia
export function isEmpty(pilha){
    if(pilha[0] !== undefined){
        return false
    }
    
    return true
}

