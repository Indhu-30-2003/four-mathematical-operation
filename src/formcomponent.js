import { useState } from "react"
function Form() {
    const [num1, setnum1] = useState("")
    const [num2, setnum2] = useState("")
    const [result, setresult] = useState("")

    function fsetnum(evt) {
        const number1 = evt.target.value
        setnum1(number1)
        console.log(number1)

    }
    function ssetnum(evt) {
        const number2 = evt.target.value
        setnum2(number2)
        console.log(number2)
    }
    function handleresult(evt) {
        evt.preventDefault()
        const finalresult = Number(num1) + Number(num2)
        
        setresult(finalresult)
        
    }
    function sub(evt) {
        evt.preventDefault()
        const finalresult = Number(num1) - Number(num2)
        setresult(finalresult)
        
    }
    function multi(evt) {
        evt.preventDefault()
        const finalresult = Number(num1) * Number(num2)
        setresult(finalresult)
        
    }
    function divide(evt) {
        evt.preventDefault()
        const finalresult = Number(num1) / Number(num2)
        setresult(finalresult)
       
    }
    function resetoption(){
        setresult("")
        setnum1("")
        setnum2("")
    }

    return (<>
        <h1 id="heading">Add/Sub/Multiply/Divide</h1>
        <div id="formcontainer">
        <form>
            <label htmlFor="input1">Number 1</label>
            <input value={num1} onChange={fsetnum} id="input1"></input><br></br>
            <label htmlFor="input2">Number 2</label>
            <input value={num2} onChange={ssetnum} id="input2"></input><br></br>
            <input type="submit" onClick={handleresult} id='add' value="Add"></input>
            <input type="submit" onClick={sub} id='subtract' value="Subtract"></input>
            <input type="submit" onClick={multi} id='multiply' value="Multiply"></input>
            <input type="submit" onClick={divide} id='divide' value="Divide"></input>
            <input type="reset" id="reset" onClick={resetoption}></input>


        </form>

        <h3 id="result">Result: {result}</h3>
        </div>
       </>
    )
}
export default Form