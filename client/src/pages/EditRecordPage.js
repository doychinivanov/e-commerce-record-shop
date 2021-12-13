import { useColorMode } from "../contexts/ColorModeCtx";
import { useParams } from "react-router-dom";

import NavBar from "../components/common/header/NavBar";
import EditRecord from "../components/recordMutations/EditRecord";
import Footer from "../components/common/footer/Footer";

const EditRecordPage = () => {
    const { theme } = useColorMode();
    const { id } = useParams();

    return (
        <>
          <NavBar theme={theme} />
          <div style={{ paddingTop: 50, paddingBottom: 15 }}>
            <EditRecord theme={theme} recordId={id} />
          </div>
          <Footer theme={theme} />
        </>
      );
}

export default EditRecordPage;