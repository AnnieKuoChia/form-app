const NormalForms = () => {
    // console.log("child", normalForms);
    return(
        <div className="normalForms">
            <h2 className="title">最新發佈</h2>
            <div className="FormsArea">
                <div className="FormCard">
                    <h4 className="formName">問卷名稱</h4>
                    <p className="dateString">上傳日：2021-06-17</p>
                    <p className="dateString">到期日：2021-12-31</p>
                    <p className="formInfo">問卷描述描述描述</p>
                </div>
                <div className="FormCard">
                    <h4 className="formName">問卷名稱</h4>
                    <p className="dateString">上傳日：2021-06-17</p>
                    <p className="dateString">到期日：2021-12-31</p>
                    <p className="formInfo">問卷描述描述描述</p>
                </div>
            </div>
            <div className="btn">load more</div>
        </div>
    )
}

export default NormalForms;