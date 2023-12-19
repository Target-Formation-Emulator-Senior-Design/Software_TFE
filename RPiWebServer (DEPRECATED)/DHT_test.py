import Adafruit_DHT

sensor = Adafruit_DHT.DHT22
pin = 4

while True:
    humidity, temp_c = Adafruit_DHT.read_retry(sensor, pin)
    temp_f = temp_c * (9 / 5) + 32
    humidity = "{:0.1f}".format(humidity)
    temp_f = "{:0.1f}".format(temp_f)
    if humidity is not None and temp_f is not None:
        print("Temp: {0:} F\tHumidity: {1:}%".format(temp_f, humidity))
    else:
        print("Failed to retreive sensor data")
    
