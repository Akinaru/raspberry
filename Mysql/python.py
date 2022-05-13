import mysql.connector
import sys

status = sys.argv[1]
argument = sys.argv[2]

try:
  mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="baskarcade"
  )
  
  mycursor = mydb.cursor()
  sql = "INSERT INTO valeur (status, argument) VALUES (%s, %s)"
  val = (status, argument)
  mycursor.execute(sql, val)
  
  mydb.commit()
  print("donnee save: " + status + " & " + argument)
finnaly:
  if mydb.is_connected():
    mycursor.close()
    mydb.close()
  
