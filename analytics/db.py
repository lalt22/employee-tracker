import mysql.connector
import os

# Get hours data
def get_hours():
    mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password="fl4m3nc0",
        database="employees"
    )
    cursor = mydb.cursor()
    hours = []
    query = ("SELECT hours_per_week FROM employees")
    cursor.execute(query)

    for result in cursor:
        hours.append(result[0])
    mydb.close()
    return hours

def get_contracts():

    mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password="fl4m3nc0",
        database="employees"
    )
    cursor = mydb.cursor()
    query = ("SELECT count(perm_or_contract) FROM employees WHERE perm_or_contract=\"contract\"")
    cursor.execute(query)
    mydb.close()
    return cursor.fetchone()[0]

def get_perms():
    mydb = mysql.connector.connect(
        host="localhost",
        user="root",
        password="fl4m3nc0",
        database="employees"
    )
    cursor = mydb.cursor()
    query = ("SELECT count(perm_or_contract) FROM employees WHERE perm_or_contract=\"permanent\"")
    cursor.execute(query)
    mydb.close()
    return cursor.fetchone()[0]
