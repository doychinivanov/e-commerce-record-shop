import { useColorMode } from "../contexts/ColorModeCtx";

import NavBar from "../components/common/header/NavBar";
import CreateRecord from "../components/recordMutations/CreateRecord";
import Footer from "../components/common/footer/Footer";

const CreateRecordPage = () => {
  const { theme } = useColorMode();

  return (
    <>
      <NavBar theme={theme} />
      <div style={{ paddingTop: 50, paddingBottom: 15 }}>
        <CreateRecord theme={theme}/>
      </div>
      <Footer theme={theme} />
    </>
  );
};

export default CreateRecordPage;
