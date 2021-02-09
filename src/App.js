import ItemTable from "./ItemTable";
import { useState, useEffect } from "react";

function App() {
  //add useState for all state variables
  const [items, setItem] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  //load locationStorage
  useEffect(() => {
    const items = localStorage.getItem("items");
    if (items) {
      console.log(items);
      const stack = [...items];
      setItem(stack);
    }
    // ...
  }, []);
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  function addName() {
    const fake = [...items];
    fake.push({ name: name, age: age, gender: gender });
    setName("");
    setAge("");
    setItem(fake);
  }

  return (
    <div className="card" style={{ width: 400 }}>
      <div className="card-content">
        <p className="is-4 title has-text-centered">Add Pet</p>
        <div className="field">
          <label className="label">Name</label>
          <input
            className="input"
            type="text"
            placeholder="e.q Coco"
            value={name}
            onChange={(e) => setName(e.target.value)}
            //update related state based on event
          ></input>
        </div>

        <div className="field">
          <label className="label">Gender</label>
          <select
            className="input"
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            placeholder="Please select .."
          >
            <option value="" disabled selected hidden>
              -- Select Gender --
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="field">
          <label className="label">Age</label>
          <input
            className="input"
            type="number"
            onChange={(e) => setAge(e.target.value)}
            value={age}
            placeholder="e.q 5"
          ></input>
        </div>

        <button className="button is-danger is-fullwidth" onClick={addName}>
          Submit
        </button>

        <div className="mb-4"></div>

        {/* display tables for all persons */}
        <p className="is-4 title has-text-centered">Pet List</p>
        {/* sample table */}

        {/* <ItemTable name={"Coco"} gender={"Male"} age={"5"} /> */}
        {items.map((e) => (
          <ItemTable name={e.name} gender={e.gender} age={e.age} />
        ))}
        <p>Pherawat Wongsawad 620610802</p>
      </div>
    </div>
  );
}

export default App;
