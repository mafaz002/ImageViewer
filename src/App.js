import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import CircularProgress from "@mui/material/CircularProgress";
import { store, persistor } from "./store";
import { EnhancedImageViewer, ApprovedImage } from "./components";
import { MainContainer } from "./containers";

function App() {
  return (
    <PersistGate loading={<CircularProgress />} persistor={persistor}>
      <Provider store={store}>
        <div>
          <ApprovedImage />
          <MainContainer>
            <EnhancedImageViewer />
          </MainContainer>
        </div>
      </Provider>
    </PersistGate>
  );
}

export default App;
