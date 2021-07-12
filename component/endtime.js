import Link from 'next/link'

const EndtimeForms = ({ endtimeForms }) => {
    console.log("child", endtimeForms);
    return(
        <div className="endtimeForms">
            <h2 className="title">即將截止</h2>
            <div className="FormsArea">
                {endtimeForms.map((endtimeForm, id) => (
                    <Link href={'/forms/' + endtimeForm.id} key={endtimeForm.id}>
                        <div className="FormCard">
                            <h4 className="formName">{endtimeForm.name}</h4>
                            <p className="dateString">{endtimeForm.startTime}</p>
                            <p className="dateString">{endtimeForm.endTime}</p>
                            <p className="formInfo">{endtimeForm.info}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default EndtimeForms;