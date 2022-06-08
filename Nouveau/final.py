import RPi.GPIO as GPIO
from time import sleep
import sys

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

led1 = 4
led2 = 17
led3 = 27

GPIO.setup(led, GPIO.OUT)

def etat():
	state = GPIO.input(led)
	if state == 0:
		return "La led est etteinte !"
	if state == 1:
		return "La led est allumée !"

if inp == "on":
	GPIO.output(led, GPIO.HIGH)
	print('led allumée !')
elif inp == "off":
	GPIO.output(led, GPIO.LOW)
	print('led etteinte !')
elif inp == "getstate":
	print(etat())
else:
	print('faut mettre "on" ou "off" la')
