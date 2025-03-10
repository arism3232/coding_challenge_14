// Task2- Adding Support Tickets Dynamically
function addSupportTicket(customerName, issueDescription, priorityLevel) {
    const ticket = document.createElement('div');
    ticket.setAttribute('class', 'support-ticket');
    const heading = document.createElement('h3');
    heading.textContent = customerName;
    const paragraph = document.createElement('h3');
    paragraph.textContent = issueDescription;
    const label = document.createElement('span');
    label.textContent = priorityLevel;
    const resolveButton = document.createElement('button');
    resolveButton.textContent = 'Resolve';
    ticket.appendChild(heading);
    ticket.appendChild(paragraph);
    ticket.appendChild(label);
    ticket.appendChild(resolveButton);
    if (priorityLevel ==='High') {
        ticket.classList.add('high-priority')
    };
    document.getElementById('ticketContainer').appendChild(ticket);
    // Task4- Implementing Ticket Resolution with Event Bubbling
    resolveButton.addEventListener('click', function(event) {
        console.log('Ticket is selected');
        event.stopPropagation
        ticket.removeChild();
    });
};
addSupportTicket('Nuri', 'Broken Phone', 'High');
addSupportTicket('Nuhash', 'Broken Laptop', 'High');
addSupportTicket('Nushi', 'Extension Cord Needed', 'Low');

// Task3- Converting NodeLists to Arrays for Bulk Updates
function highlightingHighPriorityTickets() {
    const hpTicket = document.querySelectorAll('.high-priority');
    const ticketArray = Array.from(hpTicket);
    ticketArray.forEach(ticket => {
        ticket.style.backgroundColor = 'tomato';
    });
}
highlightingHighPriorityTickets();