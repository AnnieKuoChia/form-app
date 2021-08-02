import Header from "../../component/header";
import Footer from "../../component/footer";
import axios from "axios";
import Link from 'next/link'

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

const Details = ({normalForms}) => {
    console.log("normalForms", normalForms);
    return(
        <div className="main">
            <Header />
            <div className="section gray">
                <div className="infoArea">
                    <h4 className="formName">{normalForms[0].name}</h4>
                    <p className="dateString">上傳日：{normalForms[0].startTime}</p>
                    <p className="dateString">到期日：{normalForms[0].endTime}</p>
                    <p className="formInfo">{normalForms[0].info}</p>
                </div>
                <Link href={'/forms/' + normalForms[0].id} key={normalForms[0].id}>
                    <div className="btn">填寫問卷</div>
                </Link>
            </div>
            <Footer />
        </div>
    );
}

export default Details;