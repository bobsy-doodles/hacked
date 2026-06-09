// Countdown timer
let hours = 0;
let minutes = 14;
let seconds = 47;

function updateTimer() {
    if (seconds > 0) {
        seconds--;
    } else if (minutes > 0) {
        minutes--;
        seconds = 59;
    } else if (hours > 0) {
        hours--;
        minutes = 59;
        seconds = 59;
    }

    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    // Increment file count
    const fileCount = parseInt(document.getElementById('file-count').textContent.replace(/,/g, ''));
    document.getElementById('file-count').textContent = (fileCount + Math.floor(Math.random() * 50) + 10).toLocaleString();

    setTimeout(updateTimer, 1000);
}

// Update taskbar time
function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    document.getElementById('taskbar-time').textContent = `${displayHours}:${String(minutes).padStart(2, '0')} ${ampm}`;
}

// Handle button clicks
function callSupport() {
    const text = prompt('You can\'t actually call that number!\n\nBut this is a realistic prank.\n\nEnter your name:', '');
    if (text) {
        alert('😄 You got pranked!\n\nYour system is perfectly fine.\n\nAlways verify security warnings by checking your official Windows Defender app!');
        revealTruth();
    }
}

function payNow() {
    alert('🛑 STOP!\n\nThis is a PRANK/DEMO website.\n\nNever pay money for pop-up security alerts - they\'re almost always scams!\n\nIf you see something like this on your real computer, close it immediately and run a legitimate antivirus scan.');
    revealTruth();
}

function revealTruth() {
    document.querySelector('.windows-popup').style.opacity = '0.5';
    document.querySelector('.popup-content').innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <h1 style="color: #00c853; font-size: 32px;">😄 SURPRISE!</h1>
            <p style="font-size: 18px; color: #333; margin: 20px 0;">You fell for the prank! Your system is completely fine.</p>
            <div style="background: #e8f5e9; border: 2px solid #4caf50; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p style="color: #2e7d32; font-size: 14px; line-height: 1.6;">
                    <strong>Security Awareness Tip:</strong><br><br>
                    Real security alerts from Windows Defender are NOT usually full-screen pop-ups.<br>
                    Scammers use sites like this to trick people into paying money or installing malware.<br><br>
                    Always verify security warnings by:<br>
                    ✓ Checking Windows Defender directly<br>
                    ✓ Running an official antivirus scan<br>
                    ✓ Never trusting pop-up alerts from websites<br>
                    ✓ Never calling numbers from suspicious alerts
                </p>
            </div>
            <button onclick="location.reload()" style="padding: 12px 30px; background: #4caf50; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; font-weight: bold;">Restart Prank</button>
        </div>
    `;
}

// Prevent window close (adds to realism)
document.querySelector('.close-btn').addEventListener('click', function(e) {
    e.preventDefault();
    alert('The system is locked. You cannot close this window.');
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    updateTimer();
    updateTime();
    setInterval(updateTime, 1000);

    // Add keyboard warning
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            alert('The system is locked. Cannot exit in this mode.');
            e.preventDefault();
        }
    });
});
