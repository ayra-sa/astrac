import HelpCenterList from "./HelpCentersSections/HelpCenterList";
import "./HelpCenter.css";
import HelpCenterFaq from "./HelpCentersSections/HelpCenterFaq";

const HelpCenter = () => {
  return (
    <>
      <main>
        <HelpCenterList />
        <HelpCenterFaq />
      </main>
    </>
  );
};

export default HelpCenter;
