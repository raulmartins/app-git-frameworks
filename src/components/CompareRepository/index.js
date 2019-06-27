import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  Content, Card, Header, Title, Subtitle, Body, Value, Description,
} from './styles'

const CompareRepository = ({ repositories }) => (
  <Content>
    {repositories.map(repository => (
      <Card key={repository.id}>
        <Header>
          <img src={repository.owner.avatar_url} alt="teste" />
          <Title>{repository.name}</Title>
          <Subtitle>{repository.owner.login}</Subtitle>
        </Header>
        <Body>
          <ul>
            <li>
              <Value>{repository.stargazers_count}</Value>
              <Description>Stars</Description>
            </li>
            <li>
              <Value>{repository.forks_count}</Value>
              <Description>Forks</Description>
            </li>
            <li>
              <Value>{repository.open_issues}</Value>
              <Description>Open Issues</Description>
            </li>
            <li>
              <Value>{repository.size}</Value>
              <Description>size</Description>
            </li>
            <li>
              <Value>{repository.updated_at}</Value>
              <Description>Last commit</Description>
            </li>
          </ul>
        </Body>
      </Card>
    ))}
  </Content>
)

CompareRepository.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.text,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues: PropTypes.number,
      size: PropTypes.number,
      updated_at: PropTypes.string,
    }),
  ).isRequired,
}

const mapStateToProps = state => ({
  repositories: state.CompareRepository,
})
export default connect(mapStateToProps)(CompareRepository)
