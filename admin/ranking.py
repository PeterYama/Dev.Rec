import pandas as pd
import numpy as np
import io


# to read from this file
# download and install python & anaconda
# set the virtual envrionment using the following command
# py -3 -m venv .venv
# select the Interpreter from Python: Select Interpreter 
# run the file by right click => Run Python FIle in terminal


# read the employee's Cvs file
df = pd.read_csv('core_dataset6.csv')

# test commands
# df["Employee Name"].unique()
# df.groupby(['Department']).mean()
# df.sort_values("Rank", inplace = False) 

# get the employees ranked by their skill set
df['Rank'] = df['Swift'].rank()
print(df)
