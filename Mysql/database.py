import mysql.connector

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
