import React from 'react';

export default function Home() {
  return (
    <div className="main-wrapper">
        <section className="home-hero">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="badge-blue"><i className="fas fa-star"></i> Liên Đội Trường Tiểu Học Hồng Phong • Dự Án Giáo Dục Kỹ Năng 2026</div>
                    <h1 className="hero-title">CÙNG NHAU XÂY DỰNG<br/>TRƯỜNG HỌC AN TOÀN</h1>
                    <p className="hero-desc">Môi trường học đường hạnh phúc, thấu cảm và không bạo lực. Cô Tổng phụ trách AI đồng hành cùng học sinh, thầy cô và phụ huynh.</p>
                    
                    <div className="hero-message">
                        <i className="fas fa-bullhorn"></i> Thông điệp cốt lõi: "Tôn trọng - Lắng nghe - Đồng hành / Respect - Listen - Accompany"
                    </div>

                    <div className="hero-buttons">
                        <a href="#" className="btn-primary-large"><i className="fas fa-robot"></i> Trò chuyện với Cô Tổng phụ trách AI <i className="fas fa-arrow-right"></i></a>
                        <a href="#" className="btn-warning-large"><i className="fas fa-shield-alt"></i> Gửi phiếu hỗ trợ bí mật</a>
                    </div>
                    
                    <div className="hero-stats">
                        <span><i className="fas fa-lock"></i> Bảo mật danh tính 100%</span>
                        <span><i className="fas fa-link"></i> Kết nối trực tiếp 111 & Thầy Cô</span>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    <div className="home-ai-card">
                        <div className="avatar-circle-wrapper">
                            <img src="https://media.chatbase.co/images/05179374-2c49-43a9-a725-d71db3f0548a.png" alt="Cô Tổng phụ trách AI" className="avatar-img" />
                        </div>
                        
                        <div className="name-badge">
                            <span className="live-dot"></span> Cô Tổng phụ trách AI • Tiểu Học Hồng Phong
                        </div>
                        
                        <div className="view-toggles premium-toggles">
                            <button className="active">Mặt trước</button>
                            <button>Sau lưng</button>
                            <button>Toàn thân (360°)</button>
                        </div>

                        <div className="quote-container">
                            <div className="quote-header">
                                <i className="far fa-heart"></i> LIÊN ĐỘI TIỂU HỌC HỒNG PHONG
                            </div>
                            <p className="quote-text">"Chào em! Cô Tổng phụ trách AI luôn lắng nghe, tôn trọng và đồng hành cùng em."</p>
                            <p className="quote-subtext">"Hello! AI Pioneer Counselor is always here to listen, respect, and accompany you."</p>
                            <button className="btn-audio"><i className="fas fa-volume-up"></i> Trò chuyện song ngữ TV - TA</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="core-values">
            <div className="section-header">
                <h2>Giá Trị Cốt Lõi</h2>
                <p>Nền tảng của một ngôi trường hạnh phúc và an toàn</p>
            </div>
            <div className="values-grid">
                <div className="value-card">
                    <div className="value-icon"><i className="fas fa-hands-helping"></i></div>
                    <h3>Tôn Trọng (Respect)</h3>
                    <p>Tôn trọng sự khác biệt, không phán xét, không bạo lực ngôn từ hay thể chất.</p>
                </div>
                <div className="value-card">
                    <div className="value-icon"><i className="fas fa-ear-listen"></i></div>
                    <h3>Lắng Nghe (Listen)</h3>
                    <p>Luôn thấu hiểu cảm xúc của học sinh, tạo không gian an toàn để các em chia sẻ.</p>
                </div>
                <div className="value-card">
                    <div className="value-icon"><i className="fas fa-user-friends"></i></div>
                    <h3>Đồng Hành (Accompany)</h3>
                    <p>Hỗ trợ học sinh vượt qua khó khăn tâm lý, sát cánh cùng phụ huynh và nhà trường.</p>
                </div>
            </div>
        </section>

        <section className="ecosystem-section">
            <div className="section-header">
                <h2>Hệ Sinh Thái Giáo Dục An Toàn Học Đường</h2>
                <p>Khám phá các trung tâm rèn luyện kỹ năng số, học liệu chuẩn mực và công cụ bảo vệ học sinh toàn diện.</p>
            </div>
            
            <div className="ecosystem-grid">
                <div className="eco-card">
                    <div className="eco-icon"><i className="fas fa-book-reader"></i></div>
                    <h3>Kho Học Liệu Truyền Thông</h3>
                    <p>6 chuyên đề cốt lõi: Bạo lực thể chất, bạo lực tinh thần, an ninh mạng, tình bạn tích cực và kỹ năng tìm trợ giúp.</p>
                    <a href="#" className="eco-link">Xem tài liệu & infographic <i className="fas fa-arrow-right"></i></a>
                </div>
                
                <div className="eco-card">
                    <div className="eco-icon"><i className="fas fa-compass"></i></div>
                    <h3>Tình Huống & Rèn Luyện Kỹ Năng</h3>
                    <p>5 tình huống mô phỏng thực tế: Chế giễu ngoại hình, cô lập nhóm chat, phát tán video nhạy cảm, đe dọa thể chất.</p>
                    <a href="#" className="eco-link">Thực hành xử lý tình huống <i className="fas fa-arrow-right"></i></a>
                </div>
                
                <div className="eco-card">
                    <div className="eco-icon"><i className="far fa-question-circle"></i></div>
                    <h3>Ngân Hàng Câu Hỏi & Đề Thi</h3>
                    <p>Khảo sát trắc nghiệm phản hồi tức thì, giải thích chuẩn mực, bảng tổng hợp kết quả theo lớp không lộ điểm cá nhân.</p>
                    <a href="#" className="eco-link">Làm bài kiểm tra khảo sát <i className="fas fa-arrow-right"></i></a>
                </div>

                <div className="eco-card eco-card-primary">
                    <div className="eco-icon"><i className="fas fa-robot"></i></div>
                    <h3>Trợ Lý Ảo Cô Tổng phụ trách AI</h3>
                    <p>Giao tiếp bằng giọng nói tiếng Việt và văn bản, tư vấn tình huống an toàn, kết nối bảo mật đến thầy cô chủ nhiệm.</p>
                    <a href="#" className="eco-link">Trò chuyện ngay <i className="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </section>

        <section className="hotline-section">
            <section className="hotline-banner">
                <div className="hotline-header">
                    <div className="hl-left">
                        <i className="fas fa-phone-volume"></i>
                        <div>
                            <h2>Đường Dây Nóng Khẩn Cấp & Kênh Hỗ Trợ 24/7</h2>
                            <p>Khi gặp tình huống đe dọa trực tiếp đến tính mạng hoặc sức khỏe tinh thần, hãy liên hệ ngay!</p>
                        </div>
                    </div>
                    <button className="btn-warning-large">Gửi tin báo bảo mật cho trường</button>
                </div>
                <div className="hotline-cards">
                    <div className="hl-card">
                        <span className="hl-badge">Khẩn cấp quốc gia</span>
                        <div className="hl-number">111</div>
                        <h4>Tổng đài Quốc gia Bảo vệ Trẻ em</h4>
                        <p>Miễn phí 24/7, tiếp nhận tin báo khẩn cấp</p>
                    </div>
                    <div className="hl-card">
                        <span className="hl-badge">Khẩn cấp 24/7</span>
                        <div className="hl-number">113</div>
                        <h4>Đường dây nóng Cảnh sát phản ứng nhanh</h4>
                        <p>Xử lý bạo lực, xung đột đe dọa thể chất</p>
                    </div>
                    <div className="hl-card hl-dark">
                        <span className="hl-badge gray">Tại trường</span>
                        <div className="hl-number">024.3826.9999</div>
                        <h4>Phòng Tư vấn Tâm lý Học đường</h4>
                        <p>Thầy/Cô tư vấn trực tiếp tại trường (Phòng 102 - Nhà A)</p>
                    </div>
                    <div className="hl-card hl-dark">
                        <span className="hl-badge gray">Ban giám hiệu</span>
                        <div className="hl-number">024.3826.8888</div>
                        <h4>Tổ Giám thị & Ban Giám Hiệu</h4>
                        <p>Hỗ trợ an ninh trường lớp và xác minh vụ việc</p>
                    </div>
                </div>
            </section>
        </section>
    </div>
  );
}
