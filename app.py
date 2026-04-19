import os
from flask import Flask, render_template, jsonify, request

# Flag to determine if we are running on a Raspberry Pi
IS_PI = False
try:
    from gpiozero import LED
    IS_PI = True
except (ImportError, RuntimeError):
    # Mock LED for non-PI environments
    class LED:
        def __init__(self, pin):
            self.pin = pin
            self.is_lit = False
            print(f"Mock LED initialized on GPIO {pin}")

        def on(self):
            self.is_lit = True
            print("Mock LED: ON")

        def off(self):
            self.is_lit = False
            print("Mock LED: OFF")

        def toggle(self):
            self.is_lit = not self.is_lit
            print(f"Mock LED: {'ON' if self.is_lit else 'OFF'}")

app = Flask(__name__)

# Initialize hardware (Defaulting to GPIO 17)
LED_PIN = int(os.environ.get("LED_PIN", 17))
led = LED(LED_PIN)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/led/status', methods=['GET'])
def get_status():
    return jsonify({
        "status": "on" if led.is_lit else "off",
        "pin": LED_PIN,
        "is_pi": IS_PI
    })

@app.route('/api/led/toggle', methods=['POST'])
def toggle_led():
    led.toggle()
    return jsonify({
        "status": "on" if led.is_lit else "off",
        "message": f"LED is now {'ON' if led.is_lit else 'OFF'}"
    })

@app.route('/api/led/set', methods=['POST'])
def set_led():
    data = request.json
    state = data.get('state', '').lower()
    
    if state == 'on':
        led.on()
    elif state == 'off':
        led.off()
    else:
        return jsonify({"error": "Invalid state. Use 'on' or 'off'."}), 400
        
    return jsonify({
        "status": "on" if led.is_lit else "off",
        "message": f"LED turned {state.upper()}"
    })

if __name__ == '__main__':
    # Listen on all interfaces so it's accessible over the network
    app.run(host='0.0.0.0', port=5005, debug=True)
