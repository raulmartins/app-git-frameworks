import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0px;
`

export const Card = styled.div`
  background: #fff;
  margin: 10px;
  width: 300px;
  height: 400px;
  border: solid 1px rgba(237, 104, 237, 1);
  border-radius: 15px;

  -webkit-box-shadow: 13px 7px 53px -16px rgba(237, 104, 237, 1);
  -moz-box-shadow: 13px 7px 53px -16px rgba(237, 104, 237, 1);
  box-shadow: 13px 7px 53px -16px rgba(237, 104, 237, 1);
`
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    height: 50px;
  }
`
export const Title = styled.text`
  font-family: sans-serif;
  font-size: 20px;
  color: #676445;
  font-weight: bold;
`

export const Subtitle = styled.text`
  font-family: sans-serif;
  font-size: 15px;
  color: #999;
  font-weight: normal;
`

export const Body = styled.div`
  display: flex;

  ul {
    width: 100%;
  }
  li {
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 20px 50px;

    &:nth-child(2n-1) {
      background: rgba(237, 104, 237, 0.3);
    }
  }

  strong {
    color: #000;
  }
`
export const Value = styled.text`
  margin: 2px;
  font-weight: bold;
`
export const Description = styled.text`
  color: #999999;
  font-style: italic;
  font-weight: normal;
  font-size: 12px;
`
