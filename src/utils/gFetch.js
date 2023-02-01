let productos = [
    { id: '1' ,category: 'zapatillas' ,name: "producto 1" ,precio : 80000, foto: '../assets/shoes/vans1.jpg'},
    { id: '2' ,category: 'zapatillas' ,name: "producto 2" ,precio : 80000, foto: '../assets/shoes/nike1.jpg'},
    { id: '3' ,category: 'zapatillas' ,name: "producto 3" ,precio : 80000, foto: '../assets/shoes/nike2.jpg'},
    { id: '4' ,category: 'zapatillas' ,name: "producto 4" ,precio : 80000, foto: '../assets/shoes/adidas1.jpg'},
    { id: '5' ,category: 'remeras' ,name: "producto 6" ,precio : 80000, foto: '../assets/tshirt/reAdidas1.jpg'},
    { id: '6' ,category: 'remeras' ,name: "producto 5" ,precio : 80000, foto: '../assets/tshirt/reThrasher.jpg'}
] 

export const gFetch = () => {
return new Promise ((res, rej) => {
    setTimeout(()=> {
    res(productos)
    },2000) 
    })
}


