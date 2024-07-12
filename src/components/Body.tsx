import { FC } from 'react'
import Style from '../model/styles'

const Body: FC<Style> = ({ background }) => {
  return <div style={{ background: background }}>Este es mi body</div>
}

export default Body
