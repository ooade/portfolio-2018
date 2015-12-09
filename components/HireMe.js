import React from 'react'
import { css } from 'aphrodite'

import { stack, h3, h5 } from '../styles'

export default class Hireme extends React.Component {
  componentDidMount() {
    sr.reveal('h6, button', {
      duration: 700,
      rotate: { z: 20 },
      delay: 1400,
      easing: 'ease-in-out'
    })
  }

  render() {
    return (
      <div className={css(stack)}>
        <h3 className={css(h3)}> Thank you for your time. Guess what? </h3>
        <h5 className={css(h5)}> You're stuck with me because this site is served with a <a target='_blank' href='https://developers.google.com/web/fundamentals/getting-started/primers/service-workers'>service worker</a></h5>
        <h6> If i'm worth your time </h6>
        <a href='mailto:marhyorh@gmail.com'>
          <button className='button-primary'> Hit Me Up! </button>
        </a>
      </div>
    )
  }
}
