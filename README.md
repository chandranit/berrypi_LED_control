# Pi Glow | Raspberry Pi 3B+ LED Controller 💡

![Pi Glow Preview](https://github.com/chandranit/berrypi_LED_control/blob/main/static/preview.png?raw=true)

**Pi Glow** is a high-end, responsive web dashboard designed to control physical hardware (LEDs) connected to a Raspberry Pi 3B+. It bridges the gap between low-level GPIO control and modern web aesthetics using a minimal, high-performance tech stack.

## 🚀 Key Features
- **Premium Glassmorphism UI**: A sleek, dark-mode dashboard with real-time status syncing.
- **Hardware-Software Bridge**: Direct control of Raspberry Pi GPIO pins via a RESTful API.
- **Smart "Mock Mode"**: Automatically detects non-Pi environments (like Windows/Mac) and simulates hardware behavior for dev work.
- **Zero-Config Deployment**: Includes a `setup.sh` script to handle dependencies and permissions automatically.

## 🛠 Quick Start

### 1. Hardware Setup
- Connect an LED to **GPIO 17** (Pin 11) and **Ground** (Pin 6).
- *Tip: Always use a 220Ω resistor with the LED!*

### 2. Software Install
```bash
git clone https://github.com/chandranit/berrypi_LED_control.git
cd berrypi_LED_control
./setup.sh
```

### 3. Run
```bash
python3 app.py
```
Visit `http://localhost:5005` on your Pi or the Pi's IP address from another device.

## 📂 Project Structure
- `app.py`: Flask backend with GPIO abstraction.
- `static/`: Frontend assets (Glassmorphism CSS & Vanilla JS).
- `templates/`: HTML structures.
- `SETUP_GUIDE.md`: Atomic, beginner-friendly instructions for hardware wiring.

---
*Created with ❤️ for the Raspberry Pi community.*
