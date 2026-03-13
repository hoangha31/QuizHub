import { getListTopic } from "../../services/topicService"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./index.css"

export default function Topic() {

    const [topics, setTopics] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getListTopic()
            setTopics(response);
        }

        fetchApi();
    }, [])

    return (
        <>
            <h2>Danh sach chu de</h2>
            {topics.length > 0 && (
                <table className="tbl">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Ten chu de</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {topics.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>
                                    <Link to={"/quiz/" + item.id}>Lam bai</Link>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            )}

        </>
    )
}