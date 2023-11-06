import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const numberArr = [
    {
      userId: 1,
    },
    {
      userId: 2,
    },
    {
      userId: 3,
    },
  ];

  const MovePage = () => {
    alert("버튼 클릭!!!!!!!!!!!!!!!");
    // state에 key값으로 numberArr배열을 저장.
    navigate("/sub", { state: { key: numberArr } });
  };

  return (
    <>
      <div>MainPage</div>
      <button
        onClick={MovePage}
        // onClick={() => {
        //   alert("버튼클릭");
        //   navigate("/sub");
        // }}
      >
        서브 페이지로 이동
      </button>
    </>
  );
};
export default MainPage;
