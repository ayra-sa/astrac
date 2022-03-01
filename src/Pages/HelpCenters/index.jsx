import AllOfYour from "../../Components/AllOfYour/AllOfYour";
import Faq from "../../Components/Faq/Faq";
import HelpCenterList from "./HelpCentersSections/HelpCenterList";
import Search from "../../Components/Search/Search";
import "./HelpCenter.css";
import HelpCenterFaq from "./HelpCentersSections/HelpCenterFaq";

const HelpCenter = () => {
  return (
    <>
      <Search />
      <main>
        <HelpCenterList />
        <HelpCenterFaq />
      </main>
    </>
  );
};

export default HelpCenter;
