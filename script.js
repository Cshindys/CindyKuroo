// ... existing code ...

// NEW FUNCTION: Switches between Interview and Timeline views
function switchView(viewName) {
    // 1. Get Elements
    const interviewSection = document.getElementById('view-interview');
    const timelineSection = document.getElementById('view-timeline');
    const btnInterview = document.getElementById('btn-interview');
    const btnTimeline = document.getElementById('btn-timeline');

    // 2. Reset everything (Hide all, remove active class)
    if(interviewSection) {
        interviewSection.style.display = 'none';
        interviewSection.classList.remove('active');
    }
    if(timelineSection) {
        timelineSection.style.display = 'none';
        timelineSection.classList.remove('active');
    }
    if(btnInterview) btnInterview.classList.remove('active');
    if(btnTimeline) btnTimeline.classList.remove('active');

    // 3. Activate selected view
    if (viewName === 'interview') {
        if(interviewSection) {
            interviewSection.style.display = 'block';
            setTimeout(() => interviewSection.classList.add('active'), 10);
        }
        if(btnInterview) btnInterview.classList.add('active');

    } else if (viewName === 'timeline') {
        if(timelineSection) {
            timelineSection.style.display = 'block';
            setTimeout(() => timelineSection.classList.add('active'), 10);
            
            // --- NEW FIX START: Force Timeline Events to Appear ---
            // This ensures events are visible even if the scroll observer missed them
            const hiddenEvents = timelineSection.querySelectorAll('.timeline-event');
            hiddenEvents.forEach(evt => evt.classList.add('visible'));
            // --- NEW FIX END ---
        }
        if(btnTimeline) btnTimeline.classList.add('active');
    }
}

// ... rest of your code ...
