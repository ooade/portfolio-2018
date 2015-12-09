import React from 'react'
import { css } from 'aphrodite'

import { name, desc } from '../styles'

export default class Name extends React.Component {
  componentDidMount() {
    window.sr = ScrollReveal()
    sr.reveal(`.${name._name}`, { duration: 1000 })
    sr.reveal(`.${desc._name}`, { duration: 700, delay: 300 })
  }

  render() {
    return (
      <div>
        <div className={css(name)}>
          ADEMOLA ADEGBUYI
        </div>
        <div className={css(desc)}>
          FullStack Software Engineer
        </div>
      </div>
    )
  }
}
