const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  

function buscaCortePorId(id) {
    let corteBuscado = barbearia.cortes
    
    for(let i = 0; i < corteBuscado.length; i++){
        if(corteBuscado[i].id === id){
            return corteBuscado[i]
            
        }   
    }
    return "Corte não encontrado"
}

function buscaBarbaPorId(id) {
    let barbaBuscada = barbearia.barbas
    
    for(let i = 0; i < barbaBuscada.length; i++){
        if(barbaBuscada[i].id === id){
            return barbaBuscada[i]
            
        }   
    }
    return "Barba não encontrada"
}

function verificaStatusBarbearia() {
    if(barbearia.estaAberto){
        return "Estamos abertos"
    }
    return "Estamos fechados"
}

function retornaTodosCortes() {
    return barbearia.cortes
}

function retornaTodasBarbas() {
    return barbearia.barbas
}


function criaPedido(nomeCliente, corteId, barbaId) {
    let pedido = {}
    pedido.nome = nomeCliente
    pedido.pedidoCorte = buscaCortePorId(corteId).tipo
    pedido.pedidoCortePreco = buscaCortePorId(corteId).valor
    pedido.pedidoBarba = buscaBarbaPorId(barbaId).tipo
    pedido.pedidoBarbaPreco = buscaBarbaPorId(barbaId).valor

    
    return pedido
}

function atualizarServico(lista, id, valor, tipo) {
    let listaProcurada = lista
    
    for(let i = 0; i < listaProcurada.length; i++){
        if(listaProcurada[i].id === id){
            listaProcurada[i].valor = valor
            listaProcurada[i].tipo = tipo
        }
    }
    return listaProcurada
}


function calculaTotal(pedido) {
    let contaTotal = pedido.pedidoCortePreco + pedido.pedidoBarbaPreco
    return contaTotal
}

