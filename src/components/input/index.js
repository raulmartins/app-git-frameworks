import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container, Button } from './styles'
import * as cardActions from '../../store/action/loadCard'

const input = () => (
  <Container>
    <form>
      <input type="text" />
      <Button onClick={event => loadCard(event)}>OK</Button>
    </form>
  </Container>
)
const loadCard = (event) => {
  event.preventDefault()
}

const mapDispatchToProps = dispatch => bindActionCreators(cardActions, dispatch)

export default connect(mapDispatchToProps)(input)
