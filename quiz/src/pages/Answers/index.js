import { useState, useEffect } from "react"
import { getAnswersByUserId } from "../../services/answersService"
import { getListTopic } from "../../services/topicService"
import { getCookie } from "../../helper/cookie"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import "./index.css"
export default function Answer() {
    const [dataAnswer, setDataAnswer] = useState([]);
    const params = useParams();
    useEffect(() => {
        const fetchApi = async () => {
            const answerByUserId = await getAnswersByUserId(params.id);
            const topics = await getListTopic();

            let result = [];

            for (let i = 0; i < answerByUserId.length; i++) {
                result.push({
                    ...topics.find(item => String(item.id) == String(answerByUserId[i].topicId)),
                    ...answerByUserId[i]
                })
            }
            console.log(result)
            setDataAnswer(result.reverse())
        }
        fetchApi();
    }, [])

    console.log(dataAnswer)

    return (
        <>
            <h2>Danh sach bai da luyen tap</h2>

            {/* {dataAnswer.length > 0 && ( */}
            <table className="tbl">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Ten chu de</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {dataAnswer.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>
                                <Link to={"/result/" + item.id}>Xem chi tiet</Link>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
            {/* )} */}
        </>
    )
}