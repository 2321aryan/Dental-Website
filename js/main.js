document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    // Appointment Form Submission Logic
    const appointmentForm = document.getElementById('appointmentForm');
    
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(appointmentForm);
            const leadData = Object.fromEntries(formData.entries());
            
            // Add timestamp
            leadData.timestamp = new Date().toISOString();
            
            // Save to localStorage for follow-up (simulated backend)
            let leads = JSON.parse(localStorage.getItem('dentalLeads')) || [];
            leads.push(leadData);
            localStorage.setItem('dentalLeads', JSON.stringify(leads));
            
            // Show success message
            const btn = appointmentForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            
            btn.textContent = 'Appointment Requested ✓';
            btn.style.backgroundColor = '#28a745'; // Green success color
            
            setTimeout(() => {
                appointmentForm.reset();
                btn.textContent = originalText;
                btn.style.backgroundColor = '';
                
                alert('Thank you! Your appointment request has been received. Our team will contact you shortly to confirm the exact time.');
            }, 3000);
        });
    }
});
