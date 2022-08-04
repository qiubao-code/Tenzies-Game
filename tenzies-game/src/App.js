import React from "react";
import Die from "./Die"
import { nanoid } from "nanoid"

export default function App() {
    const [dice, setDice] = React.useState(allNewDice());

    function generateNewDice(){
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
        setDice(oldDice => oldDice.map(die => {
            return die.isheld ? 
                die : 
                generateNewDice()
        }));
    }

    function holdDice(id) {
        // console.log(id);
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                { ...die, isheld: !die.isheld } : 
                die
        }))
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