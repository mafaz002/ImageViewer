import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from "./store";
import { ImageViewer, ApprovedImage } from "./components";
import { MainContainer } from "./containers";

function App() {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <div>
          <ApprovedImage />
          <MainContainer>
            <ImageViewer />
          </MainContainer>
        </div>
      </Provider>
    </PersistGate>
  );
}

export default App;
