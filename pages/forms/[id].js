import Header from "../../component/header";
import Footer from "../../component/footer";
import axios from "axios";

export const getStaticPaths = async () => {
    const res = await axios.get("https://hopin.servehttp.com/api/getallform?sort=normal");
    const dataNormal = res.data;
    const paths = dataNormal.map(form => {
        return {
            params: { id: form.id.toString() }
        }
    })
    return {
        paths,
        fallback: false,
    }
};

export const getStaticProps = async (form) => {
    const id = form.params.id;
    const res = await axios.get("https://hopin.servehttp.com/api/getallform?sort=normal" + id);
    const dataNormal = res.data;
    return {
      props: {
        normalForms: dataNormal,
      },
    };
};

const Details = ({normalForms}) => {
    return(
        <div className="main">
            <Header />
            <div className="section gray">
                <div className="infoArea">
                    <h4 className="formName">{normalForms.name}</h4>
                    <p className="dateString">上傳日：{normalForms.startTime}</p>
                    <p className="dateString">到期日：{normalForms.endTime}</p>
                    <p className="formInfo">{normalForms.info}</p>
                </div>
                <div className="btn">填寫問卷</div>
            </div>
            <Footer />
        </div>
    );
}

export default Details;