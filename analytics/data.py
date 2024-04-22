import db
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

x_hours = np.array(db.get_hours())
plt.hist(x_hours)
plt.xlabel("Num Hours Per Week")
plt.ylabel("Num Employees")
plt.savefig('hours.png')
file = open('hours.png', mode="rb")



