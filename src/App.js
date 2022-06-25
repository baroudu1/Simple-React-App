import { useState, useEffect } from 'react'
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  let [obj, setObj] = useState([])
  let [searched, setSearched] = useState([])

  useEffect(() => {
    console.log('useEffect')
    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => {
      setObj(data)
      setSearched(data)
    })
  }, [])

  const onChangeSearch = (e) => {
    let search = e.target.value
    let filtered = obj.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    setSearched(filtered)
  }

  return (

    <div className="App container ">
      <h1 className='h-h1'>Users App</h1>
      <SearchBox onChangeSearch={onChangeSearch} />
      <div className="row">
        {
          searched.map((item) => <CardList className='col-md-3' key={item.id} user={item} />)
        }
      </div>
    </div>
  );
}

export default App;
