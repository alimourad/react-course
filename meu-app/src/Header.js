import React from 'react';
import './App.css';

function Header(props){

    return(
        <header className="header">
            <h1>{props.name}</h1>
            <ul className="menu">
                {props.list.map(link=><li>{link}</li>)}
            </ul>
        </header>
    );

}

// class Header extends React.Component{

//     // constructor(props){
//     //     super(props);
//     // }

//     render(){
//         const { name, list } = this.props;
//         return(
//             <header className="header">
//                 <h1>{name}</h1>
//                 <ul className="menu">
//                     {list.map(link=>(<li>{link}</li>))}
//                 </ul>
//             </header>
//         );
//     }

//     //The issue with this class is that you are trying to destructure this.args, 
//     //which is not a valid property in the React.Component class. 
//     //Instead, you should use this.props to access the props that are passed to the component.

// }

export default Header;