import React from "react";
import Die from "./Die"

export default function App() {
    const [dice, setDice] = React.useState(allNewDice());
    function allNewDice() {
        const newValues = [];
        for(let i = 0;i<10;i++){
            newValues.push(Math.floor(Math.random()*6)+1)
        }
        return newValues;
    }
    function rollDice(){
        setDice(allNewDice());
    }
    console.log(dice);
    const diceElements=dice.map(item=> <Die value={item}/>)

    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button
                onClick={rollDice}
            >Roll</button>
        </main>
    )
}