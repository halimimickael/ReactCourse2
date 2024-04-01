import { useRef, useState } from 'react'

export default function Values() {

    const nameRef = useRef();
    const[phoneVal,setPhoneVal] = useState("");

    const onSub = (e) => {
        e.preventDefault();
        // console.log(nameRef.current.value);
        console.log(phoneVal);
    }

  return (
    <div>
        <form onSubmit={onSub} className='col-md-6'>
            <label >Name:</label>
            <input ref={nameRef} type="text" className="form-control mb-3" />
            <label >Phone:</label>
            <input onChange={(e)=> setPhoneVal(e.currentTarget.value)} type="tel" className="form-control" />
            <button className="btn btn-info mt-3">Send</button>
        </form>
    </div>
  )
}
