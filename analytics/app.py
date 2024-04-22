from fastapi.responses import Response, StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
import fastapi
import db
import numpy as np
import io
import matplotlib
import matplotlib.pyplot as plt
matplotlib.use('agg')


app = fastapi.FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"]
)


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
    labels = ["Contract", "Permanent"]
    fig = plt.figure()
    plt.pie([contracts,perms], labels=labels)
    plt.title("Ratio of Contract to Permanent")
    img_buf = io.BytesIO()
    plt.savefig(img_buf, format="png")
    plt.close(fig)
    return img_buf

@app.get("/hours")
def show_hours():
    file = create_hours_img()
    # file.seek(0)
    return Response(file.getvalue(), media_type="image/png")


@app.get("/contracts")
def show_contracts():
    file = create_contracts_img()
    # file.seek(0)
    return Response(file.getvalue(), media_type="image/png")
    
@app.get("/test")
def hello():
    return "hello"