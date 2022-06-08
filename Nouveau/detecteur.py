from gpiozero import DistanceSensor
import RPi.GPIO as GPIO
from time import sleep

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

led1 = 4
led2 = 17
led3 = 27

GPIO.setup(led1, GPIO.OUT)
GPIO.setup(led2, GPIO.OUT)
GPIO.setup(led3, GPIO.OUT)
sensor = DistanceSensor(echo=24, trigger=23)


while True:

	distance = sensor.distance * 100
	if(distance <= 15):
		if(distance >10):
			GPIO.output(led1, GPIO.HIGH)
			GPIO.output(led2, GPIO.LOW)
			GPIO.output(led3, GPIO.LOW)
	if(distance <= 10):
		if(distance > 5):
			GPIO.output(led1, GPIO.HIGH)
			GPIO.output(led2, GPIO.HIGH)
			GPIO.output(led3, GPIO.LOW)
	if(distance <= 5):
		if(distance > 0):
			GPIO.output(led1, GPIO.HIGH)
			GPIO.output(led2, GPIO.HIGH)
			GPIO.output(led3, GPIO.HIGH)
	if(distance > 15):
		GPIO.output(led1, GPIO.LOW)
		GPIO.output(led2, GPIO.LOW)
		GPIO.output(led3, GPIO.LOW)	
	sleep(0.2)
