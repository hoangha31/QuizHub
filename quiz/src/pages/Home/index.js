import { getCookie } from "../../helper/cookie"
import "./index.css"
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
export default function Home() {
    const isLogin = useSelector(state => state.loginReducer);
    return (
        <>
            {isLogin ? (<>
                <div className="home-dashboard">
                    <section className="home-dashboard__welcome">
                        <h1>Chào mừng trở lại, {getCookie("fullName") || "Sĩ tử"}! 👋</h1>
                        <p>Hôm nay bạn muốn chinh phục môn học nào?</p>
                    </section>


                    <div className="home-dashboard__quote">
                        <blockquote>
                            "Thành công là tổng hợp của những nỗ lực nhỏ bé, lặp lại ngày qua ngày."
                        </blockquote>
                    </div>

                    <section className="home-dashboard__topics">
                        <h2>Luyện tập theo môn học</h2>
                        <div className="topic-grid">
                            <div className="topic-card topic-card--bio">
                                <div className="topic-card__icon">🧬</div>
                                <h3>Sinh học</h3>
                                <p>Khám phá thế giới tự nhiên và di truyền.</p>
                                <NavLink to="/topic" className="btn-go">Luyện tập ngay</NavLink>
                            </div>

                            <div className="topic-card topic-card--hist">
                                <div className="topic-card__icon">📜</div>
                                <h3>Lịch sử</h3>
                                <p>Ngược dòng thời gian tìm hiểu các sự kiện trọng đại.</p>
                                <NavLink to="/topic" className="btn-go">Luyện tập ngay</NavLink>
                            </div>

                            <div className="topic-card topic-card--geo">
                                <div className="topic-card__icon">🌍</div>
                                <h3>Địa lý</h3>
                                <p>Tìm hiểu về bản đồ, khí hậu và tài nguyên.</p>
                                <NavLink to="/topic" className="btn-go">Luyện tập ngay</NavLink>
                            </div>
                        </div>
                    </section>


                    <section className="home-dashboard__history">
                        <div className="history-banner">
                            <div>
                                <h3>Kiểm tra tiến độ của bạn</h3>
                                <p>Xem lại kết quả các bài thi đã thực hiện để biết mình cần cải thiện phần nào.</p>
                            </div>
                            <NavLink to="/answers" className="btn-history">Xem lịch sử</NavLink>
                        </div>
                    </section>
                </div>

            </>) : (
                <>
                    <div className="home-guest">
                        <div className="home-guest__hero">
                            <h1>Ôn Thi Trắc Nghiệm - Bứt Phá Điểm Số 🚀</h1>
                            <p className="home-guest__desc">
                                Nền tảng luyện tập chuyên biệt cho các môn <strong>Sinh học, Lịch sử, Địa lý</strong>.
                                Giúp bạn hệ thống kiến thức, làm quen cấu trúc đề thi và tự tin đạt điểm cao.
                            </p>

                            <div className="home-guest__actions">
                                <NavLink to="/login" className="btn btn--primary">Bắt đầu ngay</NavLink>
                                <NavLink to="/register" className="btn btn--outline">Đăng ký miễn phí</NavLink>
                            </div>
                        </div>

                        <div className="home-guest__features">
                            <div className="feature-item">
                                <div className="feature-item__icon">📚</div>
                                <h3>Kho đề khổng lồ</h3>
                                <p>Hàng ngàn câu hỏi được biên soạn sát với đề thi minh họa của Bộ GD&ĐT.</p>
                            </div>
                            <div className="feature-item">
                                <div className="feature-item__icon">⏱️</div>
                                <h3>Luyện tập 24/7</h3>
                                <p>Làm bài mọi lúc, mọi nơi trên mọi thiết bị có kết nối Internet.</p>
                            </div>
                            <div className="feature-item">
                                <div className="feature-item__icon">📊</div>
                                <h3>Theo dõi tiến độ</h3>
                                <p>Hệ thống tự động chấm điểm và lưu lại lịch sử làm bài để bạn dễ dàng ôn tập lại.</p>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}