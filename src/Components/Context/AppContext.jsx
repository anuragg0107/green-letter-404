import axios from "axios";
import { useState, useEffect } from "react";
import ApiUserData from "../API/Api";

const AppContext = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState([]);
  const [user, setUser] = useState([]);
  const [firstName, setFirstName] = useState("");

  const handleLogin = ({ email, password }) => {
    user.map((el) => {
      if (el.email === email && el.password === password) {
        setAuth(true);
        setFirstName(el.firstname);
        setLastName(el.lastname);
        setEmail(el.email);
        setToken(el.token);
        setPassword(el.password);
      }
    });
  };
  const handleLogout = () => {
    setAuth(false);
    setFirstName("");
    setLastName("");
    setUserData([]);
    setEmail("");
    setToken("");
  };

  const handleCreateAccout = () => {
    axios
      .post(`http://localhost:3000/users`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      })
      .then((res) => {
        setAuth(true);
        setFirstName(firstName);
        setLastName(lastName);
        setEmail(email);
        setToken(token);
      })
      .catch((err) => console.log(err));
  };

  const addToCart = (name, price, qty, image) => {
    setUserData([
      ...userData,
      { name: name, price: price, qty: qty, image: image }
    ]);
    console.log(userData);
  };

  useEffect(() => {
    ApiUserData().then((res) => setUser(res.data));
  }, [auth]);

  const value = {
    auth,
    handleLogin,
    firstName,
    lastName,
    userData,
    email,
    token,
    handleCreateAccout,
    addToCart,
    handleLogout
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export default AppContext;
