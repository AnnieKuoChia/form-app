const NormalForm = ({ normalForms }) => {
    console.log("child", normalForms);
    return(
        <div className="normalForms">
            <h2 className="title">最新發佈</h2>
            <div className="FormsArea">
                {normalForms.map((normalForm, id) => (
                    <div key={normalForm.id} className="FormCard">
                        <h4 className="formName">{normalForm.name}</h4>
                        <p className="dateString">{normalForm.startTime}</p>
                        <p className="dateString">{normalForm.endTime}</p>
                        <p className="formInfo">{normalForm.info}</p>
                    </div>
                ))}
            </div>
            <div className="btn">load more</div>
        </div>
    );
};

export default NormalForm;