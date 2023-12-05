const productos = [
    {id:1, title:'acevichado',description:'makis acevichado',price:20, img:'./img/makis1.jpg'},
    {id:2, title:'tempura',description:'makis tempura',price:25, img:'./img/makis2.jpg'},
    {id:3, title:'carretillero',description:'makis carretillero',price:22, img:'./img/makis3.jpg'},
    {id:4, title:'spicy',description:'makis spicy',price:30, img:'./img/makis4.jpg'},
]

export const Getproducts = ()=>{
    return new Promise (resolve =>{
        setTimeout(()=>{
            resolve(productos)
        },2000)
    })
}