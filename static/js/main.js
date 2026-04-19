document.addEventListener('DOMContentLoaded', () => {
    const ledVisual = document.getElementById('led-visual');
    const statusText = document.getElementById('status-text');
    const toggleBtn = document.getElementById('toggle-btn');
    const pinNumber = document.getElementById('pin-number');
    const envType = document.getElementById('env-type');

    // Fetch initial status
    async function updateStatus() {
        try {
            const response = await fetch('/api/led/status');
            const data = await response.json();
            
            updateUI(data.status);
            pinNumber.textContent = `GPIO ${data.pin}`;
            envType.textContent = data.is_pi ? 'Raspberry Pi' : 'Mock (Dev)';
            
            if (!data.is_pi) {
                envType.style.color = '#ffaa00';
            }
        } catch (error) {
            console.error('Error fetching status:', error);
            statusText.textContent = 'CONNECTION ERROR';
            statusText.style.color = '#ff4444';
        }
    }

    function updateUI(status) {
        if (status === 'on') {
            ledVisual.classList.remove('off');
            ledVisual.classList.add('on');
            statusText.textContent = 'ON';
        } else {
            ledVisual.classList.remove('on');
            ledVisual.classList.add('off');
            statusText.textContent = 'OFF';
        }
    }

    // Toggle logic
    toggleBtn.addEventListener('click', async () => {
        // Optimistic UI update
        const isCurrentlyOff = ledVisual.classList.contains('off');
        const nextStatus = isCurrentlyOff ? 'on' : 'off';
        
        // Add a temporary loading state
        toggleBtn.disabled = true;
        toggleBtn.style.opacity = '0.7';

        try {
            const response = await fetch('/api/led/toggle', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            updateUI(data.status);
        } catch (error) {
            console.error('Error toggling LED:', error);
            // Revert on error
            updateStatus();
        } finally {
            toggleBtn.disabled = false;
            toggleBtn.style.opacity = '1';
        }
    });

    // Initial load
    updateStatus();

    // Poll status every 5 seconds to keep synced if multiple users are connected
    setInterval(updateStatus, 5000);
});
