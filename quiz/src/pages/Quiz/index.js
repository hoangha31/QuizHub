import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { getTopic } from "../../services/topicService"
import { getListQuestion } from "../../services/questionsService"
import { getCookie } from "../../helper/cookie"
import { createAnswer } from "../../services/quizService"
import "./index.scss"
export default function Quiz() {
    const params = useParams(); //de lay duoc params tren url
    const [dataTopic, setDataTopic] = useState([])
    const [dataQuestion, setDataQuestion] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getTopic(params.id);
            setDataTopic(response)
        }
        fetchApi();
    }, [])

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getListQuestion(params.id);
            setDataQuestion(response)
        }
        fetchApi();
    }, [])
    console.log(dataQuestion)

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e)

        let selectedAnswers = [];
        for (let i = 0; i < e.target.elements.length; i++) {
            console.log(e.target.elements[i])
            if (e.target.elements[i].checked) {
                const name = e.target.elements[i].name;
                const value = e.target.elements[i].value;

                selectedAnswers.push({
                    questionId: name,
                    answer: parseInt(value)
                })
            }
        }
        console.log(selectedAnswers)

        let options = {
            userId: parseInt(getCookie("id")),
            topicId: params.id,
            answers: selectedAnswers
        }

        const response = await createAnswer(options);
        console.log(response)
        if (response) {
            navigate(`/result/${response.id}`)
        }
    }
    return (
        <>
            <h2>Bai quiz chu de: {dataTopic && (<>{dataTopic.name}</>)}</h2>

            <div className="form-quiz">
                <form onSubmit={handleSubmit}>
                    {dataQuestion.map((item, index) => (
                        <div className="form-quiz__item" key={item.id}>
                            <p>Cau {index + 1}: {item.question} </p>
                            {item.answers.map((itemAns, indexAns) => (
                                <div className="form-quiz__answer" key={indexAns}>
                                    <input type="radio" name={item.id} value={indexAns} id={`quiz-${item.id}-${indexAns}`} />
                                    <label htmlFor={`quiz-${item.id}-${indexAns}`}>{itemAns}</label>
                                </div>
                            ))}
                        </div>
                    ))}
                    <button type="submit">Nộp bài</button>
                </form>
            </div>
        </>
    )
}
