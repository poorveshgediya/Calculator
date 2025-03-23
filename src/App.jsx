import style from './App.module.css';
import Input from './Components/input';
import Output from './Components/output';
import Button from './Components/button';
import { useState } from 'react';

function App() {

  const [inputvalue, setinputvalue] = useState("");

  const Buttonclick = (value) =>{
    if (value === '=') {
      try {
        setinputvalue(eval(inputvalue));
      } catch (error) {
        setinputvalue("Err");
      }
    } else if (value === 'C') {
      setinputvalue(''); 
    } else{
    setinputvalue((oldvalue) => oldvalue + value)
  }
  }
  return (  

    <div className={style.calculator}> 
      <h1>Calculator</h1>
      <Input value={inputvalue}/>
      <br />
      {/* <Output /> */}
      <Button data={'1'} onClick={() =>Buttonclick('1')} />
      <Button data={'2'} onClick={() =>Buttonclick('2')}/>
      <Button data={'3'} onClick={() =>Buttonclick('3')}/>
      <Button data={'C'} onClick={() =>setinputvalue('')}/>
      <Button data={'4'} onClick={() =>Buttonclick('4')}/>
      <Button data={'5'} onClick={() =>Buttonclick('5')}/>
      <Button data={'6'} onClick={() =>Buttonclick('6')}/>
      <Button data={'+'} onClick={() =>Buttonclick('+')}/>
      <Button data={'7'} onClick={() =>Buttonclick('7')}/>
      <Button data={'8'} onClick={() =>Buttonclick('8')}/>
      <Button data={'9'} onClick={() =>Buttonclick('9')}/>
      <Button data={'-'} onClick={() =>Buttonclick('-')}/>
      <Button data={'0'} onClick={() =>Buttonclick('0')}/>
      <Button data={'/'} onClick={() =>Buttonclick('/')}/>
      <Button data={'*'} onClick={() =>Buttonclick('*')}/>
      <Button data={'='} onClick={() =>Buttonclick('=')}/>
    </div>
  );
}

export default App;
