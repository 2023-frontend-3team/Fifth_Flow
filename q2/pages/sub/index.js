import { useSearchParams } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

const SubPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  //setSearchParams 인자에 객체나 문자열을 넣으면 url 상태를 변경하는 함수
  const navigate = useNavigate();
  const location = useLocation();

  // let num = location.state.key.map((el) => el.userId);

  return (
    <>
      <div>SubPage</div>
      <div>
        {/* useLocation으로 mainPage에서 보낸 state의 key값(numberArr)을 가져와서 map으로 배열을 받아옴. */}
        {location.state.key.map((el) => (
          <b>
            받아온 number : {el.userId}
            {/* [0]:1, [1]:2, [2]:3 */}
            <button
              onClick={() => {
                navigate("/third");
                setSearchParams({ number: el.userId });
                // 클릭했을때 3번째 창으로 넘어가고 ,
                // url 주솟값에 ?number= el.userId 형태로 보내진다
              }}
            >
              상세보기
            </button>
            <br />
          </b>
        ))}
      </div>
    </>
  );
};
export default SubPage;
