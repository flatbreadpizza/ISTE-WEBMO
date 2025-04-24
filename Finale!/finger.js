// Date/Time Updater
function updateDateTime() {
    const optionsDate = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'America/New_York'
    };
    const optionsTime = {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'America/New_York'
    };

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', optionsDate);
    const timeStr = now.toLocaleTimeString('en-US', optionsTime);

    document.getElementById('date').textContent = dateStr;
    document.getElementById('time').textContent = timeStr;
}

// Update every second
setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call
