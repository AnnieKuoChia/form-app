import Link from 'next/link'

const NormalForm = ({ normalForms }) => {
    console.log("child", normalForms);
    return(
        <div className="normalForms">
            <h2 className="title">最新發佈</h2>
            <div className="FormsArea">
                {normalForms.map((normalForm, id) => (
                    <Link href={'/forms/' + normalForm.id} key={normalForm.id}>
                        <div className="FormCard">
                            <h4 className="formName">{normalForm.name}</h4>
                            <p className="dateString">{normalForm.startTime}</p>
                            <p className="dateString">{normalForm.endTime}</p>
                            <p className="formInfo">{normalForm.info}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="btn">load more</div>
        </div>
    );
};

export default NormalForm;