import React from 'react'
import { css } from 'aphrodite'

import { scrollBars } from '../styles'

// Fetch pages
import Name from './Name'
import Stack from './Stack'
import Social from './Social'
import Hireme from './HireMe'

export default class Display extends React.Component {
  constructor(props) {
    super(props)

    this.state = { page: 0 }
  }

  componentDidMount() {
    sr.reveal(`.${scrollBars._name}`, { duration: 700, delay: 1000 })
  }

  nextPage = _ => this.setState({ page: this.state.page + 1 });

  prevPage = _ => this.setState({ page: this.state.page - 1 });

  pickDisplay() {
    switch (this.state.page) {
      case 0: return <Name />
      case 1: return <Stack />
      case 2: return <Social />
      case 3: return <Hireme />
    }
  }

  render() {
    return (
      <div>
        {this.pickDisplay()}
        <div className={css(scrollBars)}>
          <p>
            <a href='javascript:' onClick={this.state.page !== 0 && this.prevPage}>
              <img style={{ width: 30, height: 30 }} src='/static/arrow_up.svg' />
            </a>
          </p>
          <p>
            <a href='javascript:' onClick={this.state.page !== 3 && this.nextPage}>
              <img style={{ width: 30, height: 30 }} src='/static/arrow_down.svg' />
            </a>
          </p>
        </div>
      </div>
    );
  }
}
