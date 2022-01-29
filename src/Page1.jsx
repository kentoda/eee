import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  const history = useHistory();

  const onClickDeatailA = () => {
    return history.push("/page1/deatailA");
  };

  return (
    <>
      <h1>Page1です</h1>
      <Link to={{ pathname: "/page1/deatailA", state: arr }}>DeatailA</Link>
      <br />
      <Link to="/page1/deatailB">DeatailB</Link>
      <br />
      <button onClick={onClickDeatailA}>deatailA</button>
    </>
  );
};
