import { NextPage } from 'next'
import { styled } from 'styled-components'

type ButtonProps = {
  color: string
  backgroundColor: string
}

const Button = styled.button<ButtonProps>`
  color: ${(props) => props.color};
  background: ${(props) => props.backgroundColor};
  border: 2px solid ${(props) => props.color};

  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 8px;
  cursor: pointer;
`

// const Badge = styled.span`
//   padding: 8px 16px;
//   font-weight: bold;
//   text-align: center;
//   color: white;
//   background: red;
//   border-radius: 16px;
// `

const Page: NextPage = () => {
  // return <Badge>Hello World!</Badge>
  return (
    <div>
      <Button color='#FF0000' backgroundColor='transparent'>
        Hello
      </Button>
      <Button color='#white' backgroundColor='#1E90FF'>
        World
      </Button>
    </div>
  )
}

export default Page
