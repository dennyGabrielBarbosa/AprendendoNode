function extraiLinks(arrLinks) {
    return arrLinks.map((objetoLink) => Object.values(objetoLink) );
}

export default function listaValidada(listaDeLinks){
    return extraiLinks(listaDeLinks);
}