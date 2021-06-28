import Header from "../component/header";
import Footer from "../component/footer";
export default function Form() {   
    return (
        <div className="main">
            <Header />
            <div className="section gray">
                <div className="iframe">
                    <iframe src='https://docs.google.com/forms/d/e/1FAIpQLSfxyTqWFQ-JYSqupN6hOWLbs9H3uQg3Ohb0ziMpe1whx3jwWw/viewform?embedded=true' width='640' height='377' frameborder='0' marginheight='0' marginwidth='0'>載入中…</iframe>
                </div>
            </div>
            <Footer />
        </div>
    )
}