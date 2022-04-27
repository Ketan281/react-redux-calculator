import React from 'react'
import { increaseValue,decreaseValue, divide } from '../redux/action-creator'
import { useSelector,useDispatch } from 'react-redux'
import { add,sub,multiply } from '../redux/action-creator'
//const [temp,setTemp] = React.useState(0)
const Index = () => {
    const myState = useSelector(state=>state.ourState.count);
    const myState1 = useSelector(state=>state.ourState.count1)
    const dispatch = useDispatch()
    const [val,setVal] = React.useState(0)
    
// const handleAdd = () =>{
// setVal(Number(e.target.value));
// }
    console.log("+++ myState +++",myState)
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <h1>hello</h1>
        <button style={{
            backgroundColor: "crimson",
            color: "white",
            padding:"10px 30px"
        }} 
        onClick={()=>dispatch(increaseValue())}>Increment</button>
        <p>{myState}</p>
        <button  style={{
            backgroundColor: "crimson",
            color: "white",
            padding:"10px 30px"
        }}
        onClick={()=>dispatch(decreaseValue())} >Decrement</button>
        <br/>
        <input placeholder='Enter value'  value = {val} onChange={(e)=>setVal(Number(e.target.value))}/>
        <br/>
        <h1>value:{myState1}</h1>
        <button onClick={
            ()=>{
                dispatch(add(val))
            }
        }>ADD</button>
                <button onClick={
            ()=>{
                dispatch(sub(val))
            }
        }>SUBSTRACT</button>
                 <button onClick={
            ()=>{
                dispatch(multiply(val))
            }
        }>MULTIPLY</button>
        <button onClick={
            ()=>{
                dispatch(divide(val))
            }
        }>DIVIDE</button>
        </div>
  )
}
export default Index