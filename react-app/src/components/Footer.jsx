import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
        <div className="footer-container">
            <div className="footer-col brand-col">
                <div className="footer-logo">
                    <div className="shield-icon"><i className="fas fa-shield-alt"></i></div>
                    <h3>CÙNG NHAU XÂY DỰNG TRƯỜNG HỌC AN TOÀN</h3>
                </div>
                <p>
                    Nền tảng giáo dục số ứng dụng Trí tuệ Nhân tạo phục vụ truyền thông, rèn luyện kỹ năng và phòng, chống bạo lực học đường dành cho học sinh Tiểu học, giáo viên chủ nhiệm, cán bộ tư vấn và phụ huynh.
                </p>
                <div className="footer-badges">
                    <span className="badge-green"><i className="fas fa-lock"></i> Bảo mật danh tính</span>
                    <span className="badge-red"><i className="fas fa-heart"></i> Vì một thế hệ học đường hạnh phúc</span>
                </div>
            </div>

            <div className="footer-col links-col">
                <h4>CHỨC NĂNG CHÍNH</h4>
                <ul>
                    <li><a href="#">Trợ lý ảo Cô Tổng phụ trách AI (3D)</a></li>
                    <li><a href="#">Kho học liệu truyền thông 6 chủ đề</a></li>
                    <li><a href="#">5 Tình huống rèn luyện kỹ năng</a></li>
                    <li><a href="#">Ngân hàng câu hỏi trắc nghiệm</a></li>
                    <li><a href="#">Cổng điều phối giáo viên & tư vấn</a></li>
                </ul>
            </div>

            <div className="footer-col contact-col">
                <h4>ĐƯỜNG DÂY NÓNG KHẨN CẤP</h4>
                <ul className="hotline-list">
                    <li className="highlight">
                        <i className="fas fa-phone-volume"></i> Tổng đài Quốc gia Trẻ em: 111
                    </li>
                    <li>
                        <i className="fas fa-phone-alt"></i> Cảnh sát phản ứng nhanh: 113
                    </li>
                    <li>
                        <i className="fas fa-building"></i> Phòng Tư vấn: Phòng Công tác Đội.
                    </li>
                </ul>
            </div>
        </div>

        <div className="footer-bottom">
            <div className="footer-container">
                <div className="copyright">
                    &copy; 2026 Dự Án Ứng Dụng Trí Tuệ Nhân Tạo Phòng Chống Bạo Lực Học Đường Tiểu Học. Toàn bộ quyền được bảo lưu.
                </div>
            </div>
        </div>
    </footer>
  );
}
