import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
const UseState = (props) => {
    const [count,setCount] = useState(0)
    const [name,Setname] = useState('')
    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTitle title='Exercicio01'/>
                <div className="center">
                    <span className="text">
                        {count}
                    </span>
                    <div>
                        <button className="btn" onClick={()=> setCount(count -1)}>-1</button>
                        <button className="btn" onClick={()=> setCount(count +1)}>+1</button>
                        <button className="btn" onClick={()=> setCount(currect => currect +1000)}>+1000</button>
                    </div>
                </div>


            <SectionTitle title='Exercicio02'/>
                <input type="text" className="input" value={name} onChange={e => Setname(e.target.value)}/>
                <span>{name}</span>

        </div>
    )
}

export default UseState
