// Sample event data (you would likely fetch this from a server)
const events = [
    { title: 'Virtual Conference', type: 'Virtual', date: '2023-09-15' },
    { title: 'Live Seminar', type: 'Live', date: '2023-10-10' }
  ];
  
  const eventList = document.getElementById('event-list');
  const createEventBtn = document.getElementById('create-event-btn');
  
  // Display events
  function displayEvents() {
    eventList.innerHTML = '';
    events.forEach(event => {
      const eventCard = document.createElement('div');
      eventCard.classList.add('event-card');
      eventCard.innerHTML = `
        <h2>${event.title}</h2>
        <p>Type: ${event.type}</p>
        <p>Date: ${event.date}</p>
      `;
      eventList.appendChild(eventCard);
    });
  }
  
  // Create a new event (dummy function)
  function createEvent() {
    const newEvent = {
      title: 'New Event',
      type: 'Virtual',
      date: '2023-11-01'
    };
    events.push(newEvent);
    displayEvents();
  }
  
  // Show content based on navigation link click
  function showContent(contentId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.style.display = 'none';
    });
    
    const selectedSection = document.getElementById(contentId);
    if (selectedSection) {
      selectedSection.style.display = 'block';
    }
  }
  
  // Event listeners for navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const contentId = link.getAttribute('data-content');
      showContent(contentId);
    });
  });
  
  // Event listener for creating a new event
  createEventBtn.addEventListener('click', createEvent);
  
  // Initial content display
  showContent('home');
  displayEvents();
  