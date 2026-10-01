import React from 'react';

export default function Header() {
  return (
    <header className="site-header">
        <div className="header-container">
            <div className="logo-area">
                <img src="/logo.jpg" alt="Logo" className="logo" onError={(e) => e.target.style.display='none'} />
                <div className="brand-text">
                    <span className="brand-subtitle">LIÊN ĐỘI TRƯỜNG TIỂU HỌC HỒNG PHONG</span>
                    <span className="brand-title">CÙNG NHAU XÂY DỰNG TRƯỜNG HỌC AN TOÀN</span>
                </div>
            </div>
            
            <nav className="main-nav">
                <a href="/" className="nav-item active">
                    <div className="nav-icon"><i className="fas fa-home"></i></div>
                    <span>Trang Chủ</span>
                </a>
                <a href="#" className="nav-item">
                    <div className="nav-icon"><i className="fas fa-robot"></i></div>
                    <span>Trợ Lý Ảo AI</span>
                </a>
                <a href="#" className="nav-item">
                    <div className="nav-icon"><i className="fas fa-book-open"></i></div>
                    <span>Kho Học Liệu</span>
                </a>
                <a href="#" className="nav-item">
                    <div className="nav-icon"><i className="far fa-compass"></i></div>
                    <span>Tình Huống Kỹ Năng</span>
                </a>
                <a href="#" className="nav-item">
                    <div className="nav-icon"><i className="far fa-question-circle"></i></div>
                    <span>Ngân Hàng Câu Hỏi</span>
                </a>
                <a href="#" className="nav-item">
                    <div className="nav-icon"><i className="fas fa-users"></i></div>
                    <span>Khu Vực Giáo Viên</span>
                </a>
            </nav>

            <div className="header-actions">
                <a href="#" className="btn-hotline"><i className="fas fa-phone-alt"></i> Hotline 111</a>
                <div className="user-profile">
                    <span>Học sinh Tiểu học</span>
                    <i className="fas fa-chevron-down"></i>
                </div>
            </div>
        </div>
    </header>
  );
}

