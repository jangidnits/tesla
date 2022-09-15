import React from 'react'
import Header from './Header'
import Section from './Section'

function Tesla() {
  return (
    <>
    <Header/>
    <Section title={"Model A"} disc={'order online for touchless delivery'} button1={'Custom Order'} button2={'Existing Inventory'} img={'model-3.jpg'}/>

    <Section title={"Model B"} disc={'order online for touchless delivery'} button1={'Custom Order'} button2={'Existing Inventory'} img={'model-s.jpg'}/>

    <Section title={"Model C"} disc={'order online for touchless delivery'} button1={'Custom Order'} button2={'Existing Inventory'} img={'model-x.jpg'}/>

    <Section title={"Model D"} disc={'order online for touchless delivery'} button1={'Custom Order'} button2={'Existing Inventory'} img={'model-y.jpg'}/>

    <Section title={"Model E"} disc={'order online for touchless delivery'} button1={'Custom Order'} button2={'Existing Inventory'} img={'game.jpg'}/>

    <Section title={"Model F"} disc={'order online for touchless delivery'} button1={'Custom Order'} button2={'Existing Inventory'} img={'solar-panel.jpg'}/>

    <Section title={"Accessories"} disc={'order online for touchless delivery'}  button2={'Order Now'} img={'accessories.jpg'}/>
    </>
    
  )
}

export default Tesla