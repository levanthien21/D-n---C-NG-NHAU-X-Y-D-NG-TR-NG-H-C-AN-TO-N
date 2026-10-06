document.addEventListener('DOMContentLoaded', () => {
    const chatBody = document.getElementById('chat-body');
    const chatInput = document.getElementById('chat-input');
    const btnSend = document.getElementById('btn-send');
    const btnRefresh = document.getElementById('btn-refresh');

    function getCurrentTime() {
        const now = new Date();
        return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    }

    function scrollToBottom() { if(chatBody) chatBody.scrollTop = chatBody.scrollHeight; }

    function addMessage(text, isUser = true) {
        if (!text.trim()) return;

        const time = getCurrentTime();
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${isUser ? 'user-message' : 'ai-message'}`;

        if (isUser) {
            msgDiv.innerHTML = `
                <div class="msg-content">
                    <div class="msg-bubble user-bubble">
                        <div class="user-meta">Em ${time}</div>
                        <div class="user-text">${text}</div>
                    </div>
                </div>
                <div class="msg-avatar"><img src="https://ui-avatars.com/api/?name=Em&background=E5E7EB&color=333&rounded=true" alt="User"></div>
            `;
        } else {
            msgDiv.innerHTML = `
                <div class="msg-avatar"><img src="avatar.jpg" alt="AI"></div>
                <div class="msg-content">
                    <div class="msg-meta">
                        <span class="msg-author">Cô Tổng phụ trách AI • Tiểu Học Hồng Phong</span>
                        <span class="msg-time">${time}</span>
                    </div>
                    <div class="msg-bubble ai-bubble">
                        <p>${text}</p>
                    </div>
                </div>
            `;
        }

        chatBody.appendChild(msgDiv);
        scrollToBottom();
    }

    function handleSend() {
        const text = chatInput.value;
        if (!text.trim()) return;

        // User message
        addMessage(text, true);
        chatInput.value = '';
        
        // AI Response simulation
        setTimeout(() => {
            const aiReply = "Cô đã nhận được: '" + text + "'. Bạn hãy tích hợp API để xử lý tiếp nhé!";
            addMessage(aiReply, false);
        }, 1000);
    }

    if(btnSend) if (btnSend) btnSend.addEventListener('click', handleSend);

    if(chatInput) if (chatInput) chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    });

    if(btnRefresh) if (btnRefresh) btnRefresh.addEventListener('click', () => {
        const messages = chatBody.querySelectorAll('.message');
        for (let i = 1; i < messages.length; i++) {
            messages[i].remove();
        }
        if (chatBody) scrollToBottom();
});
    
    if (chatBody) scrollToBottom();
});


// AVATAR INTERACTIONS
let is360Mode = false;
        let currentFrame = 0;
        let isDragging = false;
        let startX = 0;

        function changeAvatar(view, btn) {
            is360Mode = false;
            const img = document.getElementById('main-avatar');
            img.style.cursor = 'default';
            if (view === 'front') img.src = 'avatar_front.jpg';
            if (view === 'back') img.src = 'avatar_back.jpg';
            
            const buttons = document.querySelectorAll('.view-toggles button');
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        }

        function activate360(btn) {
            is360Mode = true;
            currentFrame = 0;
            const img = document.getElementById('main-avatar');
            img.src = 'frame_0.jpg';
            img.style.cursor = 'ew-resize';
            
            const buttons = document.querySelectorAll('.view-toggles button');
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        }

        const avatarWrapper = document.querySelector('.avatar-circle-wrapper');
        
        if (avatarWrapper) avatarWrapper.addEventListener('mousedown', (e) => {
            if (!is360Mode) return;
            isDragging = true;
            startX = e.clientX;
            e.preventDefault(); // Prevent native image dragging
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDragging || !is360Mode) return;
            
            const deltaX = e.clientX - startX;
            if (Math.abs(deltaX) > 25) { // Sensitivity
                if (deltaX > 0) {
                    currentFrame = (currentFrame - 1 + 4) % 4; // Swipe right -> rotate left
                } else {
                    currentFrame = (currentFrame + 1) % 4; // Swipe left -> rotate right
                }
                document.getElementById('main-avatar').src = 'frame_' + currentFrame + '.jpg';
                startX = e.clientX;
            }
        });

        window.addEventListener('mouseup', () => { isDragging = false; });
        
        // Touch events for mobile support
        if(avatarWrapper) if (avatarWrapper) avatarWrapper.addEventListener('touchstart', (e) => {
            if (!is360Mode) return;
            isDragging = true;
            startX = e.touches[0].clientX;
        });
        window.addEventListener('touchmove', (e) => {
            if (!isDragging || !is360Mode) return;
            const deltaX = e.touches[0].clientX - startX;
            if (Math.abs(deltaX) > 25) {
                if (deltaX > 0) {
                    currentFrame = (currentFrame - 1 + 4) % 4;
                } else {
                    currentFrame = (currentFrame + 1) % 4;
                }
                document.getElementById('main-avatar').src = 'frame_' + currentFrame + '.jpg';
                startX = e.touches[0].clientX;
            }
        });
        window.addEventListener('touchend', () => { isDragging = false; });

        function showToast(message) {
            const toast = document.getElementById('toast');
            toast.textContent = message;
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 4000);
        }

        function refreshChat() {
            // Copy /reset to clipboard
            navigator.clipboard.writeText('/reset').then(() => {
                showToast('✅ Đã copy lệnh! Hãy ấn vào ô chat, Dán (Ctrl + V) và Gửi đi nhé.');
            }).catch(err => {
                showToast('❌ Vui lòng tự gõ lệnh "/reset" vào ô chat và Gửi.');
            });
            
            // Visual feedback
            const btn = document.querySelector('.btn-refresh i');
            btn.classList.add('fa-spin');
            setTimeout(() => btn.classList.remove('fa-spin'), 1000);
        }

        // Speech Synthesis for Greeting using ResponsiveVoice (Guaranteed Female Voice)
        function playGreeting() {
            // Visual feedback
            const btn = document.querySelector('.quote-voice');
            const originalBg = btn.style.background;
            btn.style.background = '#dbeafe';
            setTimeout(() => { btn.style.background = originalBg; }, 300);

            const text = "Chào em! Cô là Cô Tổng phụ trách AI của Liên đội Trường Tiểu học Hồng Phong. Cô luôn ở đây để lắng nghe, tôn trọng và đồng hành cùng em trong một không gian an toàn và không phán xét. Hôm nay em có điều gì băn khoăn cần cô chia sẻ không?";
            
            if (typeof responsiveVoice !== 'undefined') {
                responsiveVoice.cancel();
                responsiveVoice.speak(text, "Vietnamese Female", {
                    pitch: 1.1,
                    rate: 1.05,
                    volume: 1
                });
            } else {
                // Absolute fallback
                fallbackTTS(text);
            }
        }

        // Fallback in case offline
        function fallbackTTS(fullText) {
            if ('speechSynthesis' in window) {
                window.speechSynthesis.cancel();
                const utterance = new SpeechSynthesisUtterance(fullText);
                utterance.lang = 'vi-VN';
                utterance.rate = 1.05;
                utterance.pitch = 1.8;
                
                const voices = window.speechSynthesis.getVoices();
                const viVoices = voices.filter(v => v.lang.includes('vi'));
                
                if (viVoices.length > 0) {
                    const preferred = ['hoaimy', 'linh', 'google', 'female', 'mai', 'trang', 'thu'];
                    const exclude = ['an', 'hung', 'nam', 'male'];
                    
                    let selectedVoice = viVoices.find(v => {
                        let n = v.name.toLowerCase();
                        return preferred.some(p => n.includes(p)) && !exclude.some(e => n.includes(e));
                    });
                    
                    if (!selectedVoice) selectedVoice = viVoices[0];
                    utterance.voice = selectedVoice;
                }
                window.speechSynthesis.speak(utterance);
            }
        }
        
        // Pre-load voices for fallback
        if ('speechSynthesis' in window) {
            window.speechSynthesis.onvoiceschanged = function() {
                window.speechSynthesis.getVoices();
            };
        }
    


// =========================================
// LIBRARY FILTER LOGIC & SEARCH
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    const tagPills = document.querySelectorAll('.tag-pill');
    const libCards = document.querySelectorAll('.lib-card');
    const searchInput = document.querySelector('.search-input-wrapper input');
    const filterSelect = document.querySelector('.filter-dropdown select');

    if (tagPills.length > 0 && libCards.length > 0) {
        
        function filterCards() {
            // Get active tag
            const activePill = document.querySelector('.tag-pill.active');
            // Decode safely or just check index 0 which is "All"
            const isAllTags = activePill ? activePill.textContent.includes('Tất cả') : true;
            const tagFilter = activePill ? activePill.textContent.trim().toLowerCase() : '';
            
            // Get search query
            const searchQuery = searchInput ? searchInput.value.trim().toLowerCase() : '';
            
            // Get select dropdown
            const classFilter = filterSelect ? filterSelect.value.trim().toLowerCase() : '';
            const isAllClasses = classFilter.includes('tất cả');

            libCards.forEach(card => {
                let showCard = true;

                // 1. Tag Filter
                if (!isAllTags) {
                    const badgeText = card.querySelector('.lib-badge.blue').textContent.trim().toLowerCase();
                    if (badgeText !== tagFilter) {
                        showCard = false;
                    }
                }

                // 2. Search Filter
                if (searchQuery !== '') {
                    const titleText = card.querySelector('h3').textContent.toLowerCase();
                    const descText = card.querySelector('.lib-desc').textContent.toLowerCase();
                    if (!titleText.includes(searchQuery) && !descText.includes(searchQuery)) {
                        showCard = false;
                    }
                }

                // 3. Class Filter
                if (!isAllClasses && classFilter !== '') {
                    const metaText = card.querySelector('.lib-card-meta').textContent.toLowerCase();
                    // Class 1 -> Khối 1
                    if (!metaText.includes(classFilter) && !metaText.includes('toàn trường')) {
                        showCard = false;
                    }
                }

                card.style.display = showCard ? 'flex' : 'none';
            });
        }

        // Event: Tag Click
        tagPills.forEach(pill => {
            pill.addEventListener('click', () => {
                tagPills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                filterCards();
            });
        });

        // Event: Search Input
        if (searchInput) {
            searchInput.addEventListener('input', filterCards);
        }

        // Event: Dropdown Change
        if (filterSelect) {
            filterSelect.addEventListener('change', filterCards);
        }
    }
});

// =========================================
// GLOBAL BUTTON INTERACTIONS
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    // Helper to attach event
    function attachToastClick(selector, message) {
        document.querySelectorAll(selector).forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                showToast(message);
            });
        });
    }

    // Library page buttons
    attachToastClick('.btn-green-solid', '✅ Hệ thống: Đang mở cửa sổ Thêm học liệu mới...');
    attachToastClick('.btn-orange-solid', '☎ Hệ thống: Đang kết nối bảo mật đến Cán bộ tư vấn...');
    
    // Admin Toggle
    const adminToggle = document.querySelector('.btn-admin-toggle');
    if (adminToggle) {
        let isAdmin = true;
        adminToggle.addEventListener('click', () => {
            isAdmin = !isAdmin;
            if (isAdmin) {
                adminToggle.innerHTML = '<i class="fas fa-sliders-h"></i> Đang bật Quản trị / Sửa';
                adminToggle.style.background = '#eff6ff';
                adminToggle.style.color = '#3b82f6';
                document.querySelectorAll('.lib-card-actions').forEach(el => el.style.display = 'flex');
                showToast('🔓 Hệ thống: Đã BẬT chế độ Quản trị viên (Hiện nút sửa/xóa).');
            } else {
                adminToggle.innerHTML = '<i class="fas fa-user-graduate"></i> Chế độ Học sinh (Xem)';
                adminToggle.style.background = '#f1f5f9';
                adminToggle.style.color = '#475569';
                document.querySelectorAll('.lib-card-actions').forEach(el => el.style.display = 'none');
                showToast('🔒 Hệ thống: Đã TẮT chế độ Quản trị viên (Chế độ Học sinh).');
            }
        });
    }

    // Card Edit/Delete
    attachToastClick('.lib-card-actions .btn-icon:not(.text-red)', '✏ Hệ thống: Mở công cụ chỉnh sửa bài viết...');
    attachToastClick('.lib-card-actions .text-red', '❌ Cảnh báo: Bạn cần quyền Quản trị cấp cao để Xóa!');
    attachToastClick('.lib-explore', '📖 Hệ thống: Đang tải nội dung rèn luyện kỹ năng tương tác...');

    // Home page buttons
    attachToastClick('.btn-primary-large', '🤖 Hệ thống: Đang khởi động kết nối Trợ lý ảo AI...');
    attachToastClick('.btn-warning-large', '🛡 Hệ thống: Chuyển hướng an toàn đến Biểu mẫu Báo cáo bí mật...');
    attachToastClick('.eco-link', '📚 Hệ thống: Đang chuyển đến chuyên mục tương ứng...');
});

// Additional Button Interactions for New Pages
document.addEventListener('DOMContentLoaded', () => {
    function attachToastClick(selector, message) {
        document.querySelectorAll(selector).forEach(el => {
            el.addEventListener('click', (e) => {
                if(e.target.tagName !== 'INPUT') { // Don't block radio buttons
                    e.preventDefault();
                    showToast(message);
                }
            });
        });
    }

    // Situations Page
    attachToastClick('.tab-btn', '🔄 Đang chuyển sang tình huống khác...');
    attachToastClick('.btn-outline-blue', '✏ Hệ thống: Mở công cụ chỉnh sửa tình huống...');
    attachToastClick('.btn-outline-red', '❌ Cảnh báo: Cần quyền Quản trị để Xóa tình huống!');
    attachToastClick('.toggle-btn', '🔄 Đang xoay mô hình 3D của Cô Tổng phụ trách...');
    attachToastClick('.msg-link', '🔊 Đang bật chế độ phát âm thanh Song ngữ...');
    attachToastClick('.btn-outline-red-full', '🚨 Đang mở kết nối khẩn cấp đến Đường dây nóng 111!');
    attachToastClick('.expand-header', '📖 Đang mở rộng nội dung Phân tích đa chiều...');
    attachToastClick('.situation-footer .btn-blue-solid', '⏩ Đang chuyển sang Tình huống kế tiếp...');
    attachToastClick('.situation-footer .btn-text-blue', '💬 Đang gửi yêu cầu tư vấn đến Cô Tổng phụ trách AI...');

    // Question Bank Page
    attachToastClick('.hero-tab', '📊 Đang chuyển đổi giao diện bảng điều khiển...');
    attachToastClick('.filter-pill', '🔍 Đang lọc danh sách câu hỏi theo Khối lớp...');
    attachToastClick('.qc-footer .btn-blue-solid', '✅ Đã ghi nhận câu trả lời! Đang chấm điểm...');
    attachToastClick('.qc-actions .btn-icon:not(.text-red)', '✏ Hệ thống: Mở công cụ chỉnh sửa câu hỏi...');
    attachToastClick('.qc-actions .text-red', '❌ Cảnh báo: Cần quyền Quản trị để Xóa câu hỏi!');
});

// =========================================
// SITUATIONS PAGE LOGIC
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tabs-left .tab-btn');
    const situations = document.querySelectorAll('.situation-main');
    const nextBtn = document.getElementById('next-sit-btn');
    const xpValue = document.querySelector('.xp-value');
    let currentSit = 1;
    let totalXP = 0;

    if (tabBtns.length > 0 && situations.length > 0) {
        
        function showSituation(index) {
            // Update tabs
            tabBtns.forEach((btn, i) => {
                if (i === index - 1) btn.classList.add('active');
                else btn.classList.remove('active');
            });
            
            // Update content
            situations.forEach((sit, i) => {
                if (i === index - 1) sit.style.display = 'block';
                else sit.style.display = 'none';
            });
            
            currentSit = index;
            
            // Hide next button if last situation
            if (currentSit === 5) {
                nextBtn.innerHTML = 'Hoàn thành bài tập <i class="fas fa-check"></i>';
            } else {
                nextBtn.innerHTML = 'Tình huống kế tiếp <i class="fas fa-arrow-right"></i>';
            }
        }

        // Tab click
        tabBtns.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                showSituation(index + 1);
            });
        });

                // Toggle Expanded Analysis Panel
        const expandHeaders = document.querySelectorAll('.expand-header');
        expandHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const panel = header.closest('.expandable-panel');
                const body = panel.querySelector('.expand-body');
                const icon = header.querySelector('.fa-chevron-down');
                if (body) {
                    if (body.style.display === 'none') {
                        body.style.display = 'block';
                        icon.style.transform = 'rotate(180deg)';
                        header.style.background = '#f1f5f9';
                    } else {
                        body.style.display = 'none';
                        icon.style.transform = 'rotate(0deg)';
                        header.style.background = 'transparent';
                    }
                }
            });
        });

        // AI Avatar Rotation
        const aiAvatarImg = document.querySelector('.ai-avatar-circle img');
        const toggleBtns = document.querySelectorAll('.ai-toggles .toggle-btn');
        if (aiAvatarImg && toggleBtns.length > 0) {
            const views = ['avatar_front.jpg', 'avatar_back.jpg', 'avatar_full.jpg'];
            toggleBtns.forEach((btn, index) => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    aiAvatarImg.src = views[index];
                    toggleBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                });
            });
        }

        // Next button click
        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (currentSit < 5) {
                    showSituation(currentSit + 1);
                    window.scrollTo({top: 300, behavior: 'smooth'});
                } else {
                    showToast('🎉 Chúc mừng! Em đã hoàn thành toàn bộ 5 tình huống!');
                }
            });
        }

                // Keep track of which situations have granted XP
        const xpEarned = new Set();

        // Handle answer selection
        situations.forEach((sit, index) => {
            const correctAns = sit.querySelector('.options-list').getAttribute('data-correct');
            const options = sit.querySelectorAll('input[type="radio"]');
            
            options.forEach(radio => {
                radio.addEventListener('change', (e) => {
                    // Remove previous styling
                    sit.querySelectorAll('.option-item').forEach(item => {
                        item.classList.remove('correct', 'incorrect');
                    });
                    
                    const selectedItem = e.target.closest('.option-item');
                    const selectedVal = e.target.value;
                    
                    if (selectedVal === correctAns) {
                        selectedItem.classList.add('correct');
                        
                        // Grant XP only once per situation
                        if (!xpEarned.has(index)) {
                            xpEarned.add(index);
                            totalXP += 100;
                            if(xpValue) xpValue.textContent = totalXP + ' / 500 XP';
                            showToast('✅ Lựa chọn tuyệt vời! Em được cộng 100 Điểm Rèn Luyện.');
                        } else {
                            showToast('✅ Lựa chọn chính xác!');
                        }
                    } else {
                        selectedItem.classList.add('incorrect');
                        showToast('❌ Lựa chọn chưa an toàn. Hãy suy nghĩ lại nhé!');
                    }
                });
            });
        });
    }
});

