from flask import render_template, url_for, request

import Adafruit_DHT

# Retrieve data from DHT sensor
sensor = Adafruit_DHT.DHT22
pin = 4

# Initiate Flask server
from flask import Flask
app = Flask(__name__)

@app.route("/")
# Run html page
def web_interface():
    while True:
        humidity, temp_f = dht()
    return render_template("index.html", temp=temp_f, humidity=humidity)
    
# Read data from the DHT sensor
def dht():
    while True:
        humidity, temp_c = Adafruit_DHT.read_retry(sensor, pin)
        temp_f = temp_c * (9 / 5) + 32
        # Format values to xx.x
        humidity = "{:0.1f}".format(humidity)
        temp_f = "{:0.1f}".format(temp_f)
        
        if humidity is not None and temp_f is not None:
            return humidity, temp_f

# Run webserver (link will be IP address)
# Host number can be anything but wanted to match IP
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80, debug=True)   #IP -> 192.168.1.47
