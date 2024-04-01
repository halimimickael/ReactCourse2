import  { useState } from 'react'

export default function Counter() {

    const [counter,setCounter] = useState(4);

    const onAdd1 = () => {
        setCounter(counter + 1);
    }

  return (
    <div>
        <h2>Counter : {counter}</h2>
        <button onClick={onAdd1}>Add 1</button>
        <button onClick={() => {
            setCounter(counter -1)
        }}>reduce 1</button>
    </div>
  )
}
