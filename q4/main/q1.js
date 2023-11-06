import Modal from "./component/Modal.js";
import NonActive from "./component/NonActive.js";

const MainPage = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const changeModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <div>
      <button
        style={{ color: modalVisible ? "green" : "red" }}
        onClick={changeModal}
      >
        {modalVisible ? "숨기기" : "보이기"}
      </button>

      {modalVisible ? <Modal /> : <NonActive />}
    </div>
  );
};

export default MainPage;
