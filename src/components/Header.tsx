import { FC } from 'react'
import Style from '../model/styles'
import Searchbar from './Searchbar'

const Header: FC<Style> = ({ background }) => {
  return (
    <header style={{ background: background }}>
      <Searchbar />
    </header>
  )
}

export default Header
