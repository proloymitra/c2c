// Home Food Ideas - Supabase Integration
// Anonymous community sharing with real-time sync across all users

// Supabase Configuration
const SUPABASE_URL = 'https://wievonidztojjwatikoj.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpZXZvbmlkenRvamp3YXRpa29qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQyMzI5ODIsImV4cCI6MjA3OTgwODk4Mn0.yUzU34UqMDqq3eUPEzsMHloPz2zN52RTGE0Ag7npm5E';

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Load ideas from Supabase
async function loadIdeas() {
    try {
        const { data, error } = await supabase
            .from('home_food_ideas')
            .select('*')
            .order('created_at', { ascending: false });
        
        if (error) {
            console.error('Error loading ideas:', error);
            showErrorMessage('Failed to load ideas. Please refresh the page.');
            return;
        }
        
        // Group ideas by meal type
        const groupedIdeas = {
            breakfast: [],
            lunch: [],
            dinner: []
        };
        
        data.forEach(idea => {
            if (groupedIdeas[idea.meal_type]) {
                groupedIdeas[idea.meal_type].push({
                    id: idea.id,
                    text: idea.idea_text,
                    date: idea.created_at,
                    author: idea.author
                });
            }
        });
        
        // Render all sections
        renderIdeas('breakfast', groupedIdeas.breakfast);
        renderIdeas('lunch', groupedIdeas.lunch);
        renderIdeas('dinner', groupedIdeas.dinner);
        
    } catch (err) {
        console.error('Error:', err);
        showErrorMessage('Failed to connect to database. Please check your internet connection.');
    }
}

// Submit a new idea to Supabase
async function submitIdea(mealType) {
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
    
    // Disable button to prevent double submission
    const button = event.target;
    button.disabled = true;
    button.textContent = 'Sharing...';
    
    try {
        const { data, error } = await supabase
            .from('home_food_ideas')
            .insert([
                {
                    meal_type: mealType,
                    idea_text: text,
                    author: 'Anonymous Cook'
                }
            ])
            .select();
        
        if (error) {
            console.error('Error submitting idea:', error);
            alert('Failed to share your idea. Please try again.');
            button.disabled = false;
            button.textContent = 'Share Idea';
            return;
        }
        
        // Clear input
        input.value = '';
        
        // Show success message
        showSuccessMessage(mealType);
        
        // Reload ideas to show the new one
        await loadIdeas();
        
        // Track event
        trackEvent('submit_idea', 'Community', mealType);
        
    } catch (err) {
        console.error('Error:', err);
        alert('Failed to share your idea. Please check your internet connection.');
    } finally {
        button.disabled = false;
        button.textContent = 'Share Idea';
    }
}

// Show success message
function showSuccessMessage(mealType) {
    const section = document.getElementById(`${mealType}-ideas`);
    const message = document.createElement('div');
    message.style.cssText = 'background: #4CAF50; color: white; padding: 15px; border-radius: 8px; margin-bottom: 15px; text-align: center; font-weight: 600; animation: slideIn 0.3s ease;';
    message.textContent = '✓ Your idea has been shared with the community! Thank you! 🎉';
    
    section.insertBefore(message, section.firstChild);
    
    // Remove message after 3 seconds
    setTimeout(() => {
        message.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => message.remove(), 300);
    }, 3000);
}

// Show error message
function showErrorMessage(errorText) {
    const container = document.querySelector('.ideas-container');
    const message = document.createElement('div');
    message.style.cssText = 'background: #f44336; color: white; padding: 15px; border-radius: 8px; margin-bottom: 20px; text-align: center; font-weight: 600;';
    message.textContent = '⚠️ ' + errorText;
    
    container.insertBefore(message, container.firstChild);
    
    setTimeout(() => message.remove(), 5000);
}

// Render ideas for a specific meal type
function renderIdeas(mealType, ideas) {
    const container = document.getElementById(`${mealType}-ideas`);
    
    if (!ideas || ideas.length === 0) {
        container.innerHTML = `<div class="no-ideas">Be the first to share a ${mealType} idea! 🌟</div>`;
        return;
    }
    
    container.innerHTML = ideas.map(idea => createIdeaCard(idea)).join('');
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
        const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
        if (diffHours === 0) {
            const diffMinutes = Math.floor(diffTime / (1000 * 60));
            if (diffMinutes < 5) return 'Just now';
            return `${diffMinutes} minutes ago`;
        }
        if (diffHours === 1) return '1 hour ago';
        return `${diffHours} hours ago`;
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

// Set up real-time subscriptions
function setupRealtime() {
    // Subscribe to new ideas
    const subscription = supabase
        .channel('home_food_ideas_changes')
        .on('postgres_changes', 
            { 
                event: 'INSERT', 
                schema: 'public', 
                table: 'home_food_ideas' 
            }, 
            (payload) => {
                console.log('New idea received:', payload);
                // Reload all ideas to show the new one
                loadIdeas();
            }
        )
        .subscribe();
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', async function() {
    // Load initial ideas
    await loadIdeas();
    
    // Set up real-time updates
    setupRealtime();
    
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
    
    // Track page view
    trackEvent('page_view', 'Community', 'home_food_ideas');
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
