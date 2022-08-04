import React from "react";
import Die from "./Die"
import { nanoid } from "nanoid"
import Confetti from 'react-confetti'

export default function App() {
    const [dice, setDice] = React.useState(allNewDice());

    const [tenzies,setTenzies] = React.useState(false);

    React.useEffect(()=>{
        const allheld = dice.every(item=>item.isheld);
        const firstValue = dice[0].value;
        const allSamevalue=dice.every(item=>item.value===firstValue);
        if(allheld&&allSamevalue){
            setTenzies(true);
        }
    },[dice]);
    
    function generateNewDice() {
        return {
            value: Math.floor(Math.random() * 6) + 1,
            isheld: false,
            id: nanoid()
        }
    }

    function allNewDice() {
        const newValues = [];
        for (let i = 0; i < 10; i++) {
            newValues.push(generateNewDice())
        }
        return newValues;
    }

    function rollDice() {
        if(!tenzies){
            setDice(oldDice => oldDice.map(die => {
                return die.isheld ?
                    die :
                    generateNewDice()
            }));
        }else{
            setDice(allNewDice);
            setTenzies(false);
        }
    }

    function holdDice(id) {
        // console.log(id);
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ?
                { ...die, isheld: !die.isheld } :
                die
        }))
    }

    function playNewGame(){
        setDice(allNewDice);
    }

    const diceElements = dice.map(item => (
        <Die
            key={item.id}
            id={item.id}
            value={item.value}
            isheld={item.isheld}
            holdDice={() => holdDice(item.id)}
        />
    ))

    return (
        <main>
            {tenzies&&<Confetti/>}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">
                Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
            </p>
            <div className={"dice-container"}>
                {diceElements}
            </div>
            <button
                onClick={rollDice}
                className="roll-dice"
            >{tenzies?"New Game":"Roll"}</button>
        </main>
    )
}