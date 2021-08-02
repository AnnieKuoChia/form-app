import Header from "../../component/header";
import Footer from "../../component/footer";
import axios from "axios";

export const getStaticPaths = async () => {
    const res = await axios.get("https://hopin.servehttp.com/api/getallform?sort=normal", {
        withCredentials: true,
    });
    const dataNormal = res.data;
    const paths = dataNormal.map(form => {
        return {
            params: { id: form.id.toString() }
        }
    })
    return {
        paths,
        fallback: false,
        // 
    }
};

export const getStaticProps = async (form) => {
    const id = form.params.id;
    const res = await axios.get("https://hopin.servehttp.com/api/getoneform/" + id, {
        withCredentials: true,
    });
    const data = res.data;
    return {
      props: {
        normalForms: data,
      },
    };
};

const Forms = ({normalForms}) => {
    console.log("normalForms", normalForms);
    return(
        <div className="main">
            <Header />
            <div className="section gray">
                <div className="infoArea">
                    <h4 className="formName">{normalForms[0].name}</h4>
                    <div className="iframe">
                        <iframe src={normalForms[0].link} width='640' height='600' frameBorder='0' marginHeight='0' marginWidth='0'>載入中…</iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Forms;