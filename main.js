
function App(){
    const [counters, setCounters] = React.useState([
        {id:1 , numbers:9},
        {id:2 , numbers:7},
        {id:3 , numbers:2},
        {id:4 , numbers:3},
        {id:5 , numbers:5},
    ])

    const sum = counters.reduce((acc,cur)=>{return acc+cur.numbers},0)
    const updateCounter = (id,n)=>{
        console.log(id)
        let idx =counters.findIndex(el => el.id === id)
        console.log('counters array no', idx)
        const newCounters = [...counters]
       if(newCounters[idx].numbers <= 0 && n === -1)
        {return}
        newCounters[idx].numbers +=n

        console.log(newCounters)
        setCounters(newCounters)
    }

    const addCounter =()=>{
        setCounters([...counters, {id:counters.length+1 , numbers:0}])
    }

    const removeConter =(id)=>{
        // let idx =counters.findIndex(el => el.id === id)
        // const newCounters = [...counters]
        // newCounters.splice(idx,1)
        // setCounters(newCounters)

        setCounters(prev => prev.filter( el => el.id !== id))
    }

    return (
    <div className='app'>
        <h1 className="show-sum">Sum = {sum} </h1>
	    <button onClick={addCounter} className="btn-add">Add Counter</button>
        <hr/>
        {counters.map(el =>(
            <Counter key={el.id} item={el} updateCounter={updateCounter} removeConter={removeConter}/>
        ))}
    </div>
    )
}

function Counter(props){
    const{item, updateCounter,removeConter} = props
    return(
    <div className="counter">
        <button onClick={()=>updateCounter(item.id,-1)} className="btn btn-inc">-</button>
        <h3 className="number">{item.numbers}</h3>
        <button onClick={()=>updateCounter(item.id,1)} className="btn btn-inc">+</button>
        <button onClick={()=>updateCounter(item.id,-item.numbers)} className="btn btn-inc">C</button>
        <button onClick={()=>removeConter(item.id)} className="btn btn-inc">X</button>
    </div>
    )
}



ReactDOM.createRoot(document.querySelector('#root'))
.render(<App/>)