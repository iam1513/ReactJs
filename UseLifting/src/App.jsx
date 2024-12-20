import { useState } from 'react'
import Card from './Card'


function App() {

  const [name, setName] = useState('')

  // Changing,creating and managing state using Parent only
  return (
    <div>
      {/* Pass setName so that the changes in child will directly reflect in parent and also  changes will happen in sync */}
      <Card title="Card1" name={name} setName={setName} />
      <Card title="Card2" name={name} setName={setName} />
    </div>
  )
}

export default App
