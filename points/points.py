import mysql.connector
import RPi.GPIO as GPIO
from time import sleep
from gpiozero import DistanceSensor
import asyncio

chrono = 60.0 -1 #secondes

sensor = DistanceSensor(echo=24, trigger=23)

def countData():
    mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="baskarcade"
    )
    mycursor = mydb.cursor()
    try:
        mycursor.execute("SELECT MAX(id) FROM points")
        var = mycursor.fetchone()
        rowcount = var[0]
        print(rowcount)
        
    finally:
        if mydb.is_connected():
            mycursor.close()
            mydb.close()    

def clearData():
    mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="baskarcade"
    )
    mycursor = mydb.cursor()
    try:
        sql = "TRUNCATE TABLE points"
        mycursor.execute(sql)
        mydb.commit()
        
    finally:
        if mydb.is_connected():
            mycursor.close()
            mydb.close()

def addData():
    mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="baskarcade"
    )
    mycursor = mydb.cursor()
    
    try:
        sql = "INSERT INTO points (nombre) VALUES (1)"
        mycursor.execute(sql)
        mydb.commit()
        
    finally:
        if mydb.is_connected():
            mycursor.close()
            mydb.close()


   
clearData()
        
while chrono > 0:
	distancez = sensor.distance * 100
	if(distancez <= 7):
	    addData()
	    print("point")
	    
	sleep(0.1)
	chrono = chrono - 0.1
	print("chrono: "+str(round(chrono, 1)))

		
