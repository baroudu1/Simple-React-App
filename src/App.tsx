import { useState, useEffect, ChangeEvent } from "react";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";
import { getCollections } from "./utils/fetch.utils";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export type User = {
  id: string;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

function App() {
  const [obj, setObj] = useState<User[]>([]);
  const [searched, setSearched] = useState(obj);

  useEffect(() => {
    console.log("useEffect");
    const fetchData = async () => {
      const users = await getCollections<User[]>("https://jsonplaceholder.typicode.com/users")
      setObj(users);
      setSearched(users);
    }
    fetchData();
  }, []);

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) :void => {
    let search = e.target.value;
    let filtered = obj.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearched(filtered);
  };

  return (
    <div className="App container ">
      <h1 className="h-h1">Users App</h1>
      <SearchBox
        type={"search"}
        placeholder={"User search..."}
        onChange={onChangeSearch}
      />
      <div className="row">
        {searched.map((item) => (
          <CardList
            className="col-sm-12 col-md-6 col-lg-3"
            key={item.id}
            user={item}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
