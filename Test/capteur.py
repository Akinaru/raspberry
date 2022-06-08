from gpiozero import DistanceSensor


sensor = DistanceSensor(echo=24, trigger=23)
distance = sensor.distance * 100
print('distance:', round(distance), "cm")
