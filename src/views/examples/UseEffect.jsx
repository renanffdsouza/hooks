import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calFatorial(number){
    const n = parseInt(number)
    if(n<0) return -1
    if(n===0) return 1
    return calFatorial(n-1) * n
}
const UseEffect = (props) => {
    //ex1
    const [number,setNumber]= useState(1)
    const [fatorial,setFatorial] = useState(1)

    useEffect(function(){
        setFatorial(calFatorial(number))
    },[number])

    //ex2
    const [status,setStatus]= useState("Ímpar")
    useEffect(()=>{
        setStatus(number % 2 === 0 ? "Par":"Ímpar")
    },[number])
    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercicio01"/>
            <div className="center">
                <span className="text">Fatorial: </span>
                <span className="text red">{fatorial === -1 ? "Não existe" : fatorial}</span>
            </div>
            
            <div className="center">
                <input type="number" className="input" value={number} onChange={e=>setNumber(e.target.value)} />
            </div>

            <SectionTitle title="Exercicio02"/>
            <div className="center">
                <span className='text'>Status: </span>
                <span className="text red">{status}</span>
            </div>
        </div>
    )
}

export default UseEffect
