import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'


const initialState ={
    cart: [],
    products:[],
    user:null,
    number: 0
}
function reducer(state,action){
    switch(action.type){
        case "add2toNumber":
            return {...state,number: state.number +2}
        case "numberMult7":
            return {...state,number: state.number *7}
        case "numberDiv25":
            return {...state,number: state.number /25}
        case "numberAddN":
            return {...state,number: state.number + action.payload}
        case "parseInt":
            return {...state,number: parseInt(state.number)}
        case "login":
            return {...state,user:{name:action.payload}}
        default:
            return state
    }
}
const UseReducer = (props) => {
    const [state,dispatch] = useReducer(reducer,initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"

            />
            <div className="center">
                {state.user ?  <span className="text">{state.user.name}</span> : <span className="text">"Usuário invalido."</span> }
               
            </div>
            <div className="center">
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={()=> dispatch({type:'login',payload:'Jose'})}>Login</button>
                    <button className="btn" onClick={()=> dispatch({type:'add2toNumber'})}>+2</button>
                    <button className="btn" onClick={()=> dispatch({type:'numberMult7'})}>*7</button>
                    <button className="btn" onClick={()=> dispatch({type:'numberDiv25'})}>/25</button>
                    <button className="btn" onClick={()=> dispatch({type:'parseInt'})}>Int</button>
                    <button className="btn" onClick={()=> dispatch({type:'numberAddN',payload:-11})}>-11</button>
                    <button className="btn" onClick={()=> dispatch({type:'numberAddN',payload:+12})}>+12</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
