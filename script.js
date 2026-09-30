// script.js
document.addEventListener('DOMContentLoaded', () => {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const refreshBtn = document.getElementById('refresh-chat');

    function getCurrentTime() {
        const now = new Date();
        return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    }

    // Cuộn xuống cuối khung chat
    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Thêm tin nhắn vào khung chat
    function addMessage(text, isUser = true) {
        if (!text.trim()) return;

        const time = getCurrentTime();
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${isUser ? 'user-message' : 'ai-message'}`;

        if (isUser) {
            msgDiv.innerHTML = `
                <div class="message-content">
                    <div class="msg-bubble">
                        <p>${text}</p>
                    </div>
                    <span class="msg-time-user">Em ${time}</span>
                </div>
                <img src="https://via.placeholder.com/40.png?text=U" alt="User" class="msg-avatar">
            `;
        } else {
            msgDiv.innerHTML = `
                <img src="https://via.placeholder.com/40.png?text=AI" alt="AI" class="msg-avatar">
                <div class="message-content">
                    <div class="msg-header">
                        <span class="sender-name">Cô Tổng phụ trách AI • Tiểu Học Hồng Phong</span>
                        <span class="msg-time">${time}</span>
                    </div>
                    <div class="msg-bubble">
                        <p>${text}</p>
                        <!-- Các nút phụ trợ có thể thêm động ở đây nếu cần -->
                    </div>
                </div>
            `;
        }

        chatMessages.appendChild(msgDiv);
        scrollToBottom();
    }

    // Xử lý gửi tin nhắn
    function handleSend() {
        const text = userInput.value;
        if (!text.trim()) return;

        // 1. Hiển thị tin nhắn người dùng
        addMessage(text, true);
        userInput.value = '';
        
        // 2. Chỗ này là nơi bạn sẽ GỌI API AI CỦA BẠN
        // Ví dụ: fetch('url_api_cua_ban', { method: 'POST', body: JSON.stringify({ message: text }) })
        //          .then(res => res.json())
        //          .then(data => addMessage(data.reply, false));
        
        // Mô phỏng AI trả lời sau 1 giây (để test UI)
        setTimeout(() => {
            const aiReply = "Chào em, cô đã nhận được tin nhắn: '" + text + "'. Đây là phản hồi mẫu vì hệ thống AI thật chưa được tích hợp. Em có thể thay thế phần này bằng code gọi API của mình nhé!";
            addMessage(aiReply, false);
        }, 1000);
    }

    sendBtn.addEventListener('click', handleSend);

    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    });

    // Làm mới hội thoại (Xóa các tin nhắn cũ, giữ lại tin nhắn chào mừng đầu tiên)
    refreshBtn.addEventListener('click', () => {
        const messages = chatMessages.querySelectorAll('.message');
        // Bắt đầu từ index 1 để giữ lại tin nhắn đầu tiên (chào mừng)
        for (let i = 1; i < messages.length; i++) {
            messages[i].remove();
        }
        scrollToBottom();
    });
    
    // Khởi tạo cuộn xuống cuối
    scrollToBottom();
});
