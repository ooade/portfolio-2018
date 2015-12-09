import { StyleSheet } from 'aphrodite'

const underlineBold = {
  textDecoration: 'underline',
  fontWeight: 'bold'
}

const styles = StyleSheet.create({
  name: {
    marginTop: '18rem',
    fontSize: '3rem',
    textAlign: 'center',
    fontWeight: 'bold'
  },

  desc: {
    marginTop: '1rem',
    fontSize: '1.5rem',
    textAlign: 'center'
  },

  scrollBars: {
    fontSize: '2rem',
    textAlign: 'center',
    position: 'fixed',
    right: '5rem',
    top: '40vh'
  },

  stack: {
    marginTop: '12rem',
    textAlign: 'center',
  },

  h2: {
    ...underlineBold
  },

  h3: {
    ...underlineBold
  },

  h4: {
    ...underlineBold
  },

  h5: {
    marginTop: '2rem',
    marginBottom: '15rem'
  }
})

export const { name, desc, scrollBars, stack, h2, h3, h4, h5 } = styles;
