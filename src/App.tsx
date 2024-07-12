import './App.css'
import Body from './components/Body'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  return (
    <div>
      <Header background="red" />
      <Body background="blue" />
      <Footer background="purple" />
    </div>
  )
}
export default App
