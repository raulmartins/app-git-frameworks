import React from 'react'

import { Container } from './styles'

const input = () => (
  <Container>
    <form onSubmit={() => {}}>
      <input type="text" />
      <button type="submit">OK</button>
    </form>
  </Container>
)

export default input
