import { useState } from 'react'

const Searchbar = () => {
  const [gender, setGender] = useState('hombre')

  return (
    <div>
      <div>
        Hola
        {gender === 'hombre'
          ? ' amigo'
          : gender === 'mujer'
          ? ' amiga'
          : ' persona'}
      </div>

      <button onClick={() => setGender('hombre')}>Hombre</button>
      <button onClick={() => setGender('mujer')}>Mujer</button>
      <button onClick={() => setGender('')}>No binario</button>
    </div>
  )
}

export default Searchbar
