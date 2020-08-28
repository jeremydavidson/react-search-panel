import React from 'react'

import SearchPanel from 'react-search-panel'

const App = () => {
  const handleChange = () => {

  }

  return (
         <SearchPanel
  placeholder='Search items'
  onChange={handleChange}
/>
  );
}

export default App
