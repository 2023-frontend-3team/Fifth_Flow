import { useSearchParams, useNavigate } from "react-router-dom";

const ThirdPage = () => {
  const navigate = useNavigate();

  let params = new URL(document.location).searchParams;

  let number = params.get("number");
  // get 지정한 키와 연관된 첫 번째 값을 반환

  console.log(parseInt(number));

  return (
    <>
      <div>ThirdPage</div>
      <div>{number}</div>
      <button
        onClick={() => {
          navigate(-2);
        }}
      >
        이전
      </button>
    </>
  );
};
export default ThirdPage;
