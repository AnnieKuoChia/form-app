// import axios from "axios";
import Header from "../components/header";
import EndtimeForms from "../components/endtime";
import NormalForms from "../components/normal";
import Footer from "../components/footer";

export default function Home({
  endtimeForms,
  res,
}) {
  
  console.log("endtimeForms", endtimeForms);
  console.log("res", res);
  
  return (
    <div className="main">
      <Header />
      <section className="container gray">
        <EndtimeForms />
      </section>
      <section className="container">
        <NormalForms/>
      </section>
      <Footer />
    </div>
  )
}

// export const getStaticProps = async () => {
//   const res = await axios.get("https://hopin.servehttp.com/api/getallform?sort=endTime");
//   const dataEndtime = res.data;

//   return {
//     props: {
//       endtimeForms: dataEndtime,
//       res: res
//     },
//   };
// };
