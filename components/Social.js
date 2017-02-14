import React from 'react'
import { css } from 'aphrodite'

import { stack, h3, h4 } from '../styles'

export default class Social extends React.Component {
  componentDidMount() {
    sr.reveal(`.${stack._name}`, {
      duration: 700,
      easing: 'ease-in-out'
    });

    sr.reveal(`.${h4._name}`, {
      duration: 200,
      delay: 2000,
      easing: 'ease-in-out'
    });

    sr.reveal('.l', {
      duration: 300,
      delay: 2700,
      easing: 'ease-in-out'
    }, 600);
  }

  render() {
    const social = {
      github: ['https://github.com/ooade', '#333'],
      twitter: ['https://twitter.com/_ooade', '#1da1f2'],
      facebook: ['https://facebook.com/ademola.o.adegbuyi', '#3b5998'],
      linkedin: ['https://ng.linkedin.com/in/ooade', '#0077b5']
    }

    return (
      <div className={css(stack)}>
        <h3 className={css(h3)}> Connect with me on </h3>
          { Object.keys(social).map((s, key) => {
            const [ link, color ] = social[s]
            return (
              <a href={link} target='_blank' key={key}>
                <button key={key} style={{ backgroundColor: color, color: '#fff', border: 'none', marginLeft: 10 }}> {s} </button>
              </a>
            )
          })}

        <h4 className={css(h4)} style={{ marginTop: 60 }}> Wait !!! </h4>
        <p className='l'> I'm not as boring as you think 😜 </p>
        <p className='l'> Check out my <a target='_blank' href='https://myanimelist.net/animelist/ademola'>anime list</a> </p>
      </div>
    )
  }
}
