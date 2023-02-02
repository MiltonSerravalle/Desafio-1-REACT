let productos = [
    { id: '1' ,category: 'zapatillas' ,name: "producto 1" ,precio : 80000, foto: 'https://sevensport.vteximg.com.br/arquivos/ids/564941-1000-1000/VN0A3WMBVNE_1-1-.jpg?v=637962502236470000'},
    { id: '2' ,category: 'zapatillas' ,name: "producto 2" ,precio : 80000, foto: 'https://sevensport.vteximg.com.br/arquivos/ids/482479-1000-1000/DC9045-200_1.jpg?v=637818353781300000'},
    { id: '3' ,category: 'zapatillas' ,name: "producto 3" ,precio : 80000, foto: 'https://sevensport.vteximg.com.br/arquivos/ids/512905-1000-1000/DC2650-300_1.jpg?v=637867504546900000'},
    { id: '4' ,category: 'zapatillas' ,name: "producto 4" ,precio : 80000, foto: 'https://sevensport.vteximg.com.br/arquivos/ids/616329-1000-1000/gy0988_1-1-.jpg?v=638053320777670000'},
    { id: '5' ,category: 'remeras' ,name: "producto 6" ,precio : 80000, foto: 'https://sevensport.vteximg.com.br/arquivos/ids/296787-1000-1000/5103-80_1.jpg?v=637424345511670000'},
    { id: '6' ,category: 'remeras' ,name: "producto 5" ,precio : 80000, foto: 'https://sevensport.vteximg.com.br/arquivos/ids/392884-1000-1000/H06642_1.jpg?v=637618038059630000'}
] 

export const gFetch = () => {
return new Promise ((res, rej) => {
    setTimeout(()=> {
    res(productos)
    },2000) 
    })
}


