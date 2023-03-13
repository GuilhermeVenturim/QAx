

//Lista de itens
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
        characters: LIST,
        searchName: ''                                  //Valor impresso no campo de busca
    },
    methods: {
        like(userName) {
            alert(`O personagem ${userName} recebeu um like!`)
        },
        remove(id){
            const list = this.characters

            const result = list.filter(item => {
                return item.id !== id
            })

            this.characters = result
        },
        search() {

            if (this.searchName === '') {
                return alert('Digite o que deseja pesquisar no campo de busca.')
            }                                           //return é usado para não executar o bloco abaixo caso a condição seja aceita.
                                                        //"LIST" no fim da const "list" é usado para retornar a lista original (LIST). Sem isso, sempre que uma busca for realizada, a const "list" terá somente o item buscado, não podendo buscar outros itens da "LIST"
            const list = this.characters = LIST         //Carrega todos os itens da lista na const list.
                                                        //"this" refere-se a váriável (characters)

            const result = list.filter(item => {        //argumento "item" se refere a um item na lista
                return item.nome === this.searchName    //Uso de arrow function em Vuejs
            })

            if (result.length <= 0) {                   //Controle de fluxo
                alert('Nenhum registro encontrado.')
            } else {
                this.characters = result
            }

        }
    }
})



