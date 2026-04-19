# 💡 Pi Glow: Your Ultimate LED Guide 🚀

Hello! This guide will help you turn on a real light (LED) using your Raspberry Pi. We will do this in four easy parts. Follow them one by one like a treasure map!

---

## 🛠 Part 1: The Magic Wires (Hardware)
Before we touch the computer, let's build the circuit. You will need:
- **1 Raspberry Pi 3**
- **1 LED light** (any color!)
- **1 Resistor** (the little stripey thing, 220 or 330 ohms is best)
- **2 Jumper wires**

### Step-by-Step Wiring:
1. **Find the Long Leg**: Look at your LED. One leg is longer than the other. The **Long Leg** is the "Plus" (+) and the **Short Leg** is the "Minus" (-).
2. **Connect the Plus (Long Leg)**: Use a wire to connect the **Long Leg** to **Pin 11** on your Raspberry Pi. (This is also called **GPIO 17**).
3. **Add the Resistor**: Connect one end of the resistor to the **Short Leg** of the LED.
4. **Connect the Minus (Short Leg)**: Use another wire to connect the *other* end of the resistor to **Pin 6** on your Raspberry Pi. (This is a "Ground" pin).

> [!IMPORTANT]
> Always use a resistor! It's like a helmet for your LED; it keeps it from getting too much power and "popping."

---

## 📂 Part 2: Moving the Code (Files)
Now we need to put the "brain" (the code) into the Raspberry Pi.

1. **Get the Files**: You can copy the folder `berrypi_LED_control` from your big computer to the Raspberry Pi using a USB stick or by sending it over the network.
2. **Open the Folder**: On your Raspberry Pi, open the black box called the "Terminal" and type:
   ```bash
   cd berrypi_LED_control
   ```

---

## 🪄 Part 3: The Secret Commands (Setup)
We need to tell the Raspberry Pi how to read the code. We only have to do this **once**.

1. **Prepare the Magic**: In the terminal, type this exactly:
   ```bash
   chmod +x setup.sh
   ```
2. **Start the Setup**: Now type this and wait for the green checkmarks:
   ```bash
   ./setup.sh
   ```
   *Note: If it asks for a password, type your Pi password (it might look like nothing is happening while you type, but it is!)*

3. **Nap Time**: Once it's done, restart your Raspberry Pi to make sure the new settings are ready.

---

## 🌈 Part 4: The Party Time (Running)
This is the fun part where we turn on the light!

1. **Go back to the folder**: Open the terminal again and type:
   ```bash
   cd berrypi_LED_control
   ```
2. **Wake up the App**: Type this command:
   ```bash
   python3 app.py
   ```
3. **Magic Link**: The screen will show a message like `Running on http://0.0.0.0:5005`. 
4. **Open your Browser**: Click the globe icon on your Pi to open the web browser.
5. **Type the Address**: In the long bar at the top, type:
   `http://localhost:5005`
6. **CLICK THE BUTTON!**: Press the big **TOGGLE** button on the screen. **Your real LED should turn ON and OFF!** 🎉

---

## ❓ Troubleshooting (If things don't go "Vroom")
- **Light won't turn on?** Try flipping the LED legs around. Remember, the long leg must go to Pin 11!
- **Error message?** Make sure you ran the `setup.sh` command in Part 3.

**You are now a Computer Wizard! 🧙‍♂️✨**
