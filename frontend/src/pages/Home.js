import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

const Home = () => {
  const [person, setPerson] = useState({ name: "", id: "" });

  const userLogin = useSelector((state) => state.userLogin);
  const { userDetails = {} } = userLogin;
  const { access = "" } = userDetails;

  useEffect(() => {
    if (access) {
      const { username, user_id } = jwt_decode(access);
      setPerson({ ...person, name: username, id: user_id });
    }
  }, [access, person]);

  return (
    <>
      <h2>Hello - {person.name}, Welcome</h2>
      <h3>Your are ID number - {person.id}</h3>
    </>
  );
};

export default Home;
