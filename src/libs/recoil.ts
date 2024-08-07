"use client"
import { atom, selector } from "recoil";

const CounterAtom=atom({
    key:"counter",
    default:0
})


const CounterSelect=selector({
    key:"manipulate-atom",
    get:({get})=>{
        const manipulate=get(CounterAtom) 
        return manipulate*10
    }
})

export{
    CounterAtom,
    CounterSelect
}