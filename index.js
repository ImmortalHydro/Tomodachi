document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chatForm');
    const messageInput = document.getElementById('messageInput');
    const chatBox = document.getElementById('chatBox');

    // Mock user for demo (in a real app, this would come from auth)
    const currentUser = 'User' + Math.floor(Math.random() * 1000);

    // Handle form submission
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const messageText = messageInput.value.trim();
        if (!messageText) return;

        // Create and display message
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `
            <span class="user">${currentUser}</span>
            <div class="text">${messageText}</div>
        `;
        chatBox.appendChild(messageElement);

        // Scroll to bottom
        chatBox.scrollTop = chatBox.scrollHeight;

        // Clear input
        messageInput.value = '';
    });

    // Auto-focus input on load
    messageInput.focus();
});
