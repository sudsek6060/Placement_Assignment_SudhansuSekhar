import React, { useState } from 'react'

import './App.css'

const Calculator = () => {
  const [value, setValue] = useState('');

  const insert = (num) => {
    setValue((e) => e + num)
  }

  const clear = () => {
    const x = value.slice(0, -1)
    setValue(x)
  }

  const allClear = () => {
    setValue('')
  }

  const equals = () => {
    const len = value.length;
    let result = 0;

    if (value.includes("+")) {
      const pre = +(value.slice(0, value.indexOf("+")));
      const pos = +(value.slice(value.indexOf("+") + 1, len))
      result = `${pre + pos}`

    } else if (value.includes("*")) {
      const pre = +(value.slice(0, value.indexOf("*")));
      const pos = +(value.slice(value.indexOf("*") + 1, len))
      result = `${pre * pos}`

    }
    else if (value.includes("-")) {
      const pre = +(value.slice(0, value.indexOf("-")));
      const pos = +(value.slice(value.indexOf("-") + 1, len))
      result = `${pre - pos}`

    }
    else if (value.includes("/")) {
      const pre = +(value.slice(0, value.indexOf("/")));
      const pos = +(value.slice(value.indexOf("/") + 1, len))
      result = `${pre / pos}`

    }
    else if (value.includes("%")) {
      const pre = +(value.slice(0, value.indexOf("%")));
      const pos = +(value.slice(value.indexOf("%") + 1, len))
      result = `${(pre / 100) * pos}`

    }
    setValue(result);
  }



  return (
    <div className="container">
      <form name="form">
        <div className="textview" name="textview" >{value}</div>
      </form>
      <table>
        <tbody>
          <tr>
            <td><input className="allclearButton" type="button" value="AC" onClick={() => allClear()} /></td>
            <td><input className="button" type="button" value="C" onClick={() => clear()} /></td>
            <td><input className="button" type="button" value="/" onClick={() => insert("/")} /></td>
            <td><input className="button" type="button" value="x" onClick={() => insert("*")} /></td>
          </tr>
          <tr>
            <td><input className="button" type="button" value="7" onClick={() => insert(7)} /></td>
            <td><input className="button" type="button" value="8" onClick={() => insert(8)} /></td>
            <td><input className="button" type="button" value="9" onClick={() => insert(9)} /></td>
            <td><input className="button" type="button" value="-" onClick={() => insert("-")} /></td>
          </tr>
          <tr>
            <td><input className="button" type="button" value="4" onClick={() => insert(4)} /></td>
            <td><input className="button" type="button" value="5" onClick={() => insert(5)} /></td>
            <td><input className="button" type="button" value="6" onClick={() => insert(6)} /></td>
            <td><input className="button" type="button" value="+" onClick={() => insert("+")} /></td>
          </tr>
          <tr>
            <td><input className="button" type="button" value="1" onClick={() => insert(1)} /></td>
            <td><input className="button" type="button" value="2" onClick={() => insert(2)} /></td>
            <td><input className="button" type="button" value="3" onClick={() => insert(3)} /></td>
            <td rowSpan="2"><input className="equalButton" type="button" value="=" onClick={() => equals()} /></td>
          </tr>
          <tr>
            <td><input className="button" type="button" value="%" onClick={() => insert("%")} /></td>
            <td><input className="button" type="button" value="0" onClick={() => insert(0)} /></td>
            <td><input className="button" type="button" value="." onClick={() => insert(".")} /> </td>

          </tr>
        </tbody>

      </table>
    </div>
  )
}

export default Calculator