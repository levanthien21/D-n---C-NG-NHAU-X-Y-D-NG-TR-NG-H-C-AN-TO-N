document.addEventListener('DOMContentLoaded', () => {
    const chatBody = document.getElementById('chat-body');
    const chatInput = document.getElementById('chat-input');
    const btnSend = document.getElementById('btn-send');
    const btnRefresh = document.getElementById('btn-refresh');

    function getCurrentTime() {
        const now = new Date();
        return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    }

    function scrollToBottom() {
        chatBody.scrollTop = chatBody.scrollHeight;
    }

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

    btnSend.addEventListener('click', handleSend);

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    });

    btnRefresh.addEventListener('click', () => {
        const messages = chatBody.querySelectorAll('.message');
        for (let i = 1; i < messages.length; i++) {
            messages[i].remove();
        }
        scrollToBottom();
    });
    
    scrollToBottom();
});
