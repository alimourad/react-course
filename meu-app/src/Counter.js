import React, {useEffect, useState} from 'react';

function Counter(props){

    //usando hooks
    const [count, setCount] = useState(()=>{
        const storedCount = localStorage.getItem('count');
        return storedCount !== null ? parseInt(storedCount) : props.count
    });

    // effects
    //atualiza apenas quando monta o componente
    useEffect(()=>{
        setCount(parseInt(localStorage.getItem("count")));

        //equivalente ao unmount
        return () => {

        }
    },[])

    //atualiza toda vez que os itens da lista são atualizados
    useEffect(()=>{
        document.title = count;
        localStorage.setItem("count", count.toString());
    },[count]);

    function add() {
        setCount(prevCount => prevCount + 1);
    }

    function clearStorage() {
        localStorage.clear();
        setCount(props.count !== null ? props.count : 0);
    }

    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={add}>Add</button>
            <button onClick={clearStorage}>Clear Storage</button>
        </div>
    );
}

// class Counter extends React.Component{

//     // No React, é necessário usar this para acessar as variáveis e métodos de instância do componente, 
//     // como o objeto state e o método add na sua classe Counter.

//     // No seu exemplo, você está definindo o método add dentro da classe e o está usando para atualizar o 
//     // estado count usando this.setState. Sem usar this, você não seria capaz de acessar o objeto state e 
//     // atualizar seu valor.

//     // Também é necessário usar this ao vincular o método add à instância do componente. 
//     // No construtor, você está usando this.add.bind(this) para vincular o método add ao contexto 
//     // this do componente. Isso é necessário para garantir que this dentro do método add sempre se 
//     // refira à instância do componente.

//     // Portanto, resumindo, você precisa usar this na sua classe Counter para acessar as variáveis 
//     // e métodos de instância do componente e para vincular métodos ao contexto this do componente.

//     constructor(props){
//         super(props);

//         this.state = { count: 1 }
//         this.add = this.add.bind(this)
//     }

//     add(){
//         this.setState( prevState => ({count: prevState.count + 1})); //coloca as ações numa fila e garante que não será pulado.
//     }

//     // shouldComponentUpdate(){
//     //     return true;
//     // }

//     // componentDidMount(){
//     //     //ação quando o componente for apresentado na tela.
//     //     //this.setState(JSON.parse(localStorage.getItem('state')))
//     // }

//     // componentWillUnmount(){

//     // }

//     render(){
//         return (<div>
//             <h1>Counter: {this.state.count}</h1>
//             <button onClick={this.add}>Add</button>
//             </div>)
//     }
// }

export default Counter