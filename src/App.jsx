import React, { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [nat, setNat] = useState("uzbek");
  const [desc, setDesc] = useState("");
  const [languages, setLanguages] = useState([]);
  const [users, setUsers] = useState([]);

  function handChangeName(event) {
    setUsername(event.target.value);
  }
  function handChangeEmail(event) {
    setEmail(event.target.value);
  }
  function handChangeNat(event) {
    setNat(event.target.value);
  }
  function handChangeDesc(event) {
    setDesc(event.target.value);
  }

  function handLanguageChange(event) {
    const { value, checked } = event.target;
    if (checked) {
      setLanguages(function (prevLanguages) {
        return [...prevLanguages, value];
      });
    } else {
      setLanguages(function (prevLanguages) {
        return prevLanguages.filter(function (lang) {
          return lang !== value;
        });
      });
    }
  }

  function handSave(event) {
    event.preventDefault();

    const userObj = {
      username: username,
      email: email,
      nat: nat,
      desc: desc,
      languages: languages,
      id: Date.now(),
    };

    const copied = [...users];
    copied.push(userObj);
    setUsers(copied);

    setUsername("");
    setEmail("");
    setNat("");
    setDesc("");
    setLanguages([]);
  }

  function handDelete(idUserr) {
    const edUsers = users.filter(function (userDelet) {
      return userDelet.id !== idUserr;
    });
    setUsers(edUsers);
  }

  function createCard(users) {
    return users.map(function (user) {
      return (
        <div className="card">
          <h2>{user.username}</h2>
          <h3>{user.email}</h3>
          <p>Nationality: {user.nat}</p>
          <p>Description: {user.desc}</p>
          <p>Languages: {user.languages.join(", ")}</p>
        </div>
      );
    });
  }

  return (
    <div className="container">
      <form>
        <input
          onChange={handChangeName}
          value={username}
          type="text"
          className="text"
          id=""
          placeholder="Enter name..."
        />
        <input
          onChange={handChangeEmail}
          value={email}
          type="email"
          className="email"
          id=""
          placeholder="Enter email..."
        />
        <select onChange={handChangeNat} value={nat} id="">
          <option value="uzbek">uzbek</option>
          <option value="english">english</option>
          <option value="russian">russian</option>
        </select>
        <textarea
          onChange={handChangeDesc}
          value={desc}
          className="textarea"
          id=""
          placeholder="Enter description.."
        ></textarea>
        <div className="checkboxes">
          <label>
            <input
              type="checkbox"
              value="English"
              checked={languages.includes("English")}
              onChange={handLanguageChange}
            />
            English
          </label>
          <label>
            <input
              type="checkbox"
              value="Uzbek"
              checked={languages.includes("Uzbek")}
              onChange={handLanguageChange}
            />
            Uzbek
          </label>
          <label>
            <input
              type="checkbox"
              value="Russian"
              checked={languages.includes("Russian")}
              onChange={handLanguageChange}
            />
            Russian
          </label>
        </div>
        <button onClick={handSave} className="add-btn">
          SAVE
        </button>
        <button
          className="delete-btn"
          onClick={function () {
            handDelete(userDelet.idUserr);
          }}
        >
          Delete
        </button>
      </form>
      <div className="block">{createCard(users)}</div>
    </div>
  );
}

export default App;
