import { Provider } from "react-redux";
import { store } from "./store";
import { ImageViewer } from "./components";
import { MainContainer } from "./containers";

function App() {
  return (
    <Provider store={store}>
      <div>
        <MainContainer>
          <ImageViewer />
        </MainContainer>
      </div>
    </Provider>
  );
}

export default App;
