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
              <i className='ion-chevron-up'/>
            </a>
          </p>
          <p>
            <a href='javascript:' onClick={this.state.page !== 3 && this.nextPage}>
              <i className='ion-chevron-down'/>
            </a>
          </p>
        </div>
      </div>
    );
  }
}
