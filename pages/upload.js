import Header from "../components/header";
import Footer from "../components/footer";
export default function Upload() {   
    return (
        <div className="main">
            <Header />
            <div className="container gray">
                <div className="uploadArea">
                    <h4 className="formName">上傳問卷</h4>
                    <p className="formInfo">了這為就英快而管節去一人保後解都美轉不我況，士年單說，片德流去本故該、天個資名出……大主兩乎？葉的校的工提藝筆全著輕雲深童賽不應可。區老裡，上他走創我表管兒壓、家入上力帶，事已計熱國城教，人市小叫月建認點動經家角？出土社天，美背老跟要賣看器銷看且受使，是數喜應地再然行子病面良在要多也以規次能日觀重至唱灣。海不如片同有有如我形著一水生，人獨亮社陸南？向大準定用出爸影的開，北學得家，什要沒工了生際再和裡種斯國又們有年臺影治住示然個，術們社。相重學完聲優有少書個府關管孩不的緊調人自……規的運站種中。展在寫麼裡集音用中神放家春車然期也因灣體孩！總一是看第設，出道友地明加在而石。<br/>調不式青至早輕時盡內錯從體出聯果……統了一聯安來又己緊代許備沒放來大，些世理得死樂如，同了北過目於果的元心戰單些生的腦灣這不工於、到方企們氣備一發所人不果元出教義成們家不意強學這快。<br/>活車故熱東行這不送住，題畫難裡顧夜老她賽場大可個知色底視我停施有格。</p>
                    <form>
                        <p className="formTitle">問卷名稱（限 20 字）</p>
                        <input type="text" name="form-name"></input>
                        <p className="formTitle dateTitle">截止日期</p>
                        <input type="date" name="form-endtime"></input>
                        <p className="formTitle">問卷說明（限 500 字）</p>
                        <textarea name="form-info" rows="30" cols="100"></textarea>
                        <p className="formTitle">問卷嵌入連結</p>
                        <input type="text" name="form-link"></input>
                        <input className="btn" type="submit" value="送出"></input>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}