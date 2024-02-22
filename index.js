import { createPilha, findItem, addItem, deleteAllItems, changePositionItem } from './pilha.js' // Chamando do outro arquivo

console.log("Meu arquivo index.js") // Print, mostrar dados
const pilha = createPilha(3) // Criando com tamanho X

addItem(pilha, "seu nome")
addItem(pilha, "teste")
changePositionItem(pilha, "seu nome", 2)