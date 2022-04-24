import { Provider } from "react-redux";
import { store } from "./store";
import { ImageViewer, ApprovedImage } from "./components";
import { MainContainer } from "./containers";

function App() {
  return (
    <Provider store={store}>
      <div>
        <ApprovedImage />
        <MainContainer>
          <ImageViewer />
        </MainContainer>
      </div>
    </Provider>
  );
}

export default App;
