import { useLocation, useHistory } from "react-router-dom";

export const Page1DeatailA = () => {
  const history = useHistory();
  const { state } = useLocation();
  console.log(state);

  const onClickbackButton = () => {
    return history.goBack();
  };
  return (
    <>
      <h1>Page1DeatailAページです</h1>
      <button onClick={onClickbackButton}>戻る</button>
    </>
  );
};
