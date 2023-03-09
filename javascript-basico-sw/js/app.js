
const LIST = [

    {
        id: 1,
        nome: 'Mestre Yoda',
        avatar: 'img/yoda.png'
    },
    
    {
        id: 2,
        nome: 'Luke Skywalker',
        avatar: 'img/luke.png'
    },
    
    {
        id: 3,
        nome: 'Princesa Leia',
        avatar: 'img/leia.png'
    },
    
    {
        id: 4,
        nome: 'Han Solo',
        avatar: 'img/hansolo.png'
    },
    
    {
        id: 5,
        nome: 'Darth Vader',
        avatar: 'img/vader.png'
    },
    
    {
        id: 6,
        nome: 'Chewbacca',
        avatar: 'img/chewbacca.png'
    },
    
    {
        id: 7,
        nome: 'R2D2',
        avatar: 'img/r2d2.png'
    },
    
    {
        id: 8,
        nome: 'C3pO',
        avatar: 'img/c3po.png'
    }
]












//Criando uma constante com nome APP, informando uma nova instância do VueJS
const App = new Vue({
    el: '#app',
    data: {
        title: 'Star Wars Lego',
        userName: 'Guilherme Venturim',
        characters: LIST
    }
})



