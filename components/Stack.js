import React from 'react'
import { css } from 'aphrodite'

import { stack, h2 } from '../styles'

export default class Stack extends React.Component {
  componentDidMount() {
    sr.reveal('.stack-item', {
      duration: 700,
      rotate: { z: 10 },
      easing: 'ease-in-out'
    }, 300)
  }

  render() {
    const stacks = ['MongoDB', 'ExpressJS', 'ReactJS', 'PreactJS', 'Firebase'];

    return (
      <div className={css(stack)}>
        <h2 className={css(h2)}> MY STACK </h2>
        <ul>
          { stacks.map((d, i) => <li className='stack-item' key={i}> {d} </li>) }
        </ul>
      </div>
    )
  }
}
