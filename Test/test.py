import RPi.GPIO as GPIO
from time import sleep
import sys

inp = sys.argv[1]
pin = int(sys.argv[2])

if(pin != 4):
	if(pin != 17):
		if(pin != 27):
			print("le pin n'est pas bon!")
	

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

led = pin

GPIO.setup(led, GPIO.OUT)

def etat():
	state = GPIO.input(led)
	if state == 0:
		return "La led est etteinte !"
	if state == 1:
		return "La led est allumée !"
		
if inp == "on":
	GPIO.output(led, GPIO.HIGH)
	print("La led est allumée !")
elif inp == "off":
	GPIO.output(led, GPIO.LOW)
	print("La led est etteinte !")
elif inp == "getstate":
	print(etat())
else:
	print('faut mettre "on" ou "off" la')
