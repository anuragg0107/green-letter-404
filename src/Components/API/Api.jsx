// import axios from "axios";

// const ApiUserData = () => {
//   return axios.get("http://localhost:3000/users");
// };
// export default ApiUserData;

// const ShopAllData = () => {
//   return axios.get("http://localhost:3000/data");
// };
import axios from "axios";

export async function getUser() {
  let res = await axios.post(`https://reqres.in/api/users`, {});
  return res.data;
}
