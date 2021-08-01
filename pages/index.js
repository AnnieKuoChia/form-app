import axios from "axios";
import Header from "../component/header";
import EndtimeForms from "../component/endtime";
import NormalForm from "../component/normal";
import Footer from "../component/footer";

export default function Home({
  endtimeForms,
  normalForms,
}) {
  console.log("endtimeForms", endtimeForms);
  console.log("normalForms", normalForms);
  return (
    <div className="main">
      <Header />
      <section className="container gray">
        <EndtimeForms endtimeForms={endtimeForms} />
      </section>
      <section className="container">
        <NormalForm normalForms={normalForms} />
      </section>
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await axios.get("https://hopin.servehttp.com/api/getallform?sort=endTime", {
    withCredentials: true,
  });
  const res2 = await axios.get("https://hopin.servehttp.com/api/getallform?sort=normal", {
    withCredentials: true,
  });
  const dataEndtime = res.data;
  const dataNormal = res2.data;
  return {
    props: {
      endtimeForms: dataEndtime,
      normalForms: dataNormal,
    },
  };
};
