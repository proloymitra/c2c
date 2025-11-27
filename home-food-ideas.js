// Home Food Ideas - Anonymous Community Sharing System
// Uses localStorage for client-side storage (no backend required)

// Initialize ideas from localStorage
let ideas = {
    breakfast: [],
    lunch: [],
    dinner: []
};

// Load ideas from localStorage on page load
function loadIdeas() {
    const stored = localStorage.getItem('homeFoodIdeas');
    if (stored) {
        ideas = JSON.parse(stored);
    } else {
        // Add some sample ideas to get started
        ideas = {
            breakfast: [
                {
                    text: "Masala dosa with coconut chutney - crispy, filling, and the whole family loves it!",
                    date: new Date().toISOString(),
                    author: "Anonymous Cook"
                },
                {
                    text: "Simple paratha with curd and pickle - when you're running late but need something substantial",
                    date: new Date(Date.now() - 86400000).toISOString(),
                    author: "Anonymous Cook"
                }
            ],
            lunch: [
                {
                    text: "Dal tadka with jeera rice - comfort food that never disappoints",
                    date: new Date().toISOString(),
                    author: "Anonymous Cook"
                },
                {
                    text: "Chole with rice and onion salad - protein-packed and delicious!",
                    date: new Date(Date.now() - 172800000).toISOString(),
                    author: "Anonymous Cook"
                }
            ],
            dinner: [
                {
                    text: "Palak paneer with roti - healthy, tasty, and kids actually eat their greens!",
                    date: new Date().toISOString(),
                    author: "Anonymous Cook"
                },
                {
                    text: "Egg curry with rice - quick to make, budget-friendly, and everyone asks for seconds",
                    date: new Date(Date.now() - 259200000).toISOString(),
                    author: "Anonymous Cook"
                }
            ]
        };
        saveIdeas();
    }
    renderAllIdeas();
}

// Save ideas to localStorage
function saveIdeas() {
    localStorage.setItem('homeFoodIdeas', JSON.stringify(ideas));
}

// Submit a new idea
function submitIdea(mealType) {
    const input = document.getElementById(`${mealType}-input`);
    const text = input.value.trim();
    
    if (!text) {
        alert('Please enter your food idea before sharing!');
        return;
    }
    
    if (text.length < 10) {
        alert('Please share a bit more detail about your idea!');
        return;
    }
    
    // Create new idea object
    const newIdea = {
        text: text,
        date: new Date().toISOString(),
        author: "Anonymous Cook"
    };
    
    // Add to beginning of array (newest first)
    ideas[mealType].unshift(newIdea);
    
    // Save to localStorage
    saveIdeas();
    
    // Clear input
    input.value = '';
    
    // Re-render the specific meal section
    renderIdeas(mealType);
    
    // Show success message
    showSuccessMessage(mealType);
}

// Show success message
function showSuccessMessage(mealType) {
    const section = document.getElementById(`${mealType}-ideas`);
    const message = document.createElement('div');
    message.style.cssText = 'background: #4CAF50; color: white; padding: 15px; border-radius: 8px; margin-bottom: 15px; text-align: center; font-weight: 600;';
    message.textContent = '✓ Your idea has been shared! Thank you for contributing! 🎉';
    
    section.insertBefore(message, section.firstChild);
    
    // Remove message after 3 seconds
    setTimeout(() => {
        message.remove();
    }, 3000);
}

// Render ideas for a specific meal type
function renderIdeas(mealType) {
    const container = document.getElementById(`${mealType}-ideas`);
    const mealIdeas = ideas[mealType];
    
    if (mealIdeas.length === 0) {
        container.innerHTML = `<div class="no-ideas">Be the first to share a ${mealType} idea! 🌟</div>`;
        return;
    }
    
    container.innerHTML = mealIdeas.map(idea => createIdeaCard(idea)).join('');
}

// Render all ideas
function renderAllIdeas() {
    renderIdeas('breakfast');
    renderIdeas('lunch');
    renderIdeas('dinner');
}

// Create HTML for an idea card
function createIdeaCard(idea) {
    const date = new Date(idea.date);
    const formattedDate = formatDate(date);
    
    return `
        <div class="idea-card">
            <div class="idea-text">${escapeHtml(idea.text)}</div>
            <div class="idea-meta">
                <span class="idea-author">— ${escapeHtml(idea.author)}</span>
                <span class="idea-date">${formattedDate}</span>
            </div>
        </div>
    `;
}

// Format date to readable format
function formatDate(date) {
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
        return 'Today';
    } else if (diffDays === 1) {
        return 'Yesterday';
    } else if (diffDays < 7) {
        return `${diffDays} days ago`;
    } else if (diffDays < 30) {
        const weeks = Math.floor(diffDays / 7);
        return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
    } else {
        return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    }
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Allow Enter key to submit (with Shift+Enter for new line)
document.addEventListener('DOMContentLoaded', function() {
    loadIdeas();
    
    // Add keyboard shortcuts
    ['breakfast', 'lunch', 'dinner'].forEach(mealType => {
        const input = document.getElementById(`${mealType}-input`);
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                submitIdea(mealType);
            }
        });
    });
});

// Analytics tracking
function trackEvent(action, category, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}

// Track idea submissions
const originalSubmitIdea = submitIdea;
submitIdea = function(mealType) {
    trackEvent('submit_idea', 'Community', mealType);
    return originalSubmitIdea(mealType);
};
