# Software_TFE
Software code for TFE data acquisistion webpage.

RPi terminal commands for software setup:
- sudo apt-get install python3-dev python3-pip
- (FOR DHT_test.py) sudo python3 -m pip install --upgrade pop setuptools wheel
- (For DHT_test.py) sudo pip3 install Adafruit_DHT
- (DEPRECATED) sudo apt-get install python3-flask 

Setting up Apache2 server:
- https://pimylifeup.com/raspberry-pi-apache/
- Copy main.html into /var/www/html after downloading Apache2
- To edit: type sudo nano /var/www/html/main.html
- To run: type IP address/main.html (i.e.: 123.456.78.9/main.html)

For remote access:
- Download RealVNC viewer (make an account for the lite version)
- Open RealVNC viewer, login and enter RPi info
