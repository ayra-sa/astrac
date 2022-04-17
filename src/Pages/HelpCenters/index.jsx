import HelpCenterList from "./HelpCentersSections/HelpCenterList";
import "./HelpCenter.css";
import HelpCenterFaq from "./HelpCentersSections/HelpCenterFaq";
import searchData from './Data Search/data.json'

const HelpCenter = () => {
  return (
    <>
      <main>
        <HelpCenterList data={searchData} />
        <HelpCenterFaq />
      </main>
    </>
  );
};

export default HelpCenter;
