import React from "react";
import Die from "./Die"
import { nanoid } from "nanoid"

export default function App() {
    const [dice, setDice] = React.useState(allNewDice());
    function allNewDice() {
        const newValues = [];
        for (let i = 0; i < 10; i++) {
            const randomnum = Math.floor(Math.random() * 6) + 1
            newValues.push({
                value: randomnum,
                isheld: true,
                id: nanoid()
            })
        }
        return newValues;
    }

    function rollDice() {
        setDice(allNewDice());
    }
    
    function holdDice(id){
        console.log(id);
    }

    const diceElements = dice.map(item => (
        <Die 
            key={item.id} 
            id={item.id}
            value={item.value} 
            isheld={item.isheld}
            holdDice={()=>holdDice(item.id)}
        />
    ))

    return (
        <main>
            <div className={"dice-container"}>
                {diceElements}
            </div>
            <button
                onClick={rollDice}
                className="roll-dice"
            >Roll</button>
        </main>
    )
}