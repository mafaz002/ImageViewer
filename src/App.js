import { ImageViewer } from "./components/Image";
import { MainLayout } from "./components/Layout";

function App() {
  return (
    <div>
      <MainLayout>
        <ImageViewer />
      </MainLayout>
    </div>
  );
}

export default App;
