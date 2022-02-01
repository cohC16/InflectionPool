import React from "react";
import ExternalAuth from "./ExternalAuth";

// export default class Home extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
const Login = ({ setCurrentPage }) => {
  const setPage = (newPage) => {
    setCurrentPage(1);
  };
  return (
    <div>
      <p>Login component</p>
      <ul>
        <li>
          <ExternalAuth />
        </li>
        <li>
          <button onClick={setPage}>Login</button>
        </li>
      </ul>
    </div>
  );
};

export default Login;
