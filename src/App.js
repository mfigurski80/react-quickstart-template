import React, { useState } from 'react';

const App = (props) => {

  const [greeting, setGreeting] = useState(
    'React quickstart template!'
  );

  return (
    <div>
      <h1>{greeting}</h1>
      <input
        type="text"
        value={greeting}
        onChange={event => setGreeting(event.target.value)}
      />
    </div>
  );
}

export default App;