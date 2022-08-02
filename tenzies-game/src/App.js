import React from "react";
import Die from "./Die"

export default function App(){
    const value = 1
    return (
        <main>
            <div className="dice-container">
                <Die 
                    value={value}
                />
                <Die 
                    value={value}
                />
                <Die 
                    value={value}
                />
                <Die 
                    value={value}
                />
                <Die 
                    value={value}
                />
                <Die 
                    value={value}
                />
                <Die 
                    value={value}
                />
                <Die 
                    value={value}
                />
                <Die 
                    value={value}
                />
                <Die 
                    value={value}
                />
            </div>
        </main>
    )
}