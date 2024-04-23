import db
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import io
#Plot the number of hours worked by employees vs number of employees working those hours
def create_hours_img():
    x_hours = np.array(db.get_hours())
    fig = plt.figure()
    plt.hist(x_hours)
    plt.xlabel("Num Hours Per Week")
    plt.ylabel("Num Employees")
    plt.title("Hours Per Week and Num Employees")
    img_buf = io.BytesIO()
    plt.savefig(img_buf, format="png")
    plt.close(fig)
    return img_buf

def create_contracts_img():
    #Plot ratio of permanent vs contracted employees
    contracts = db.get_contracts()
    perms = db.get_perms()
    labels = [f"Contract ({contracts})", f"Permanent ({perms})"]
    fig = plt.figure()
    plt.pie([contracts,perms], labels=labels)
    plt.title("Ratio of Contract to Permanent")
    img_buf = io.BytesIO()
    plt.savefig(img_buf, format="png")
    plt.close(fig)
    return img_buf
