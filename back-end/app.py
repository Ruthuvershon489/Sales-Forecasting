from flask import Flask, request
app = Flask(__name__)
from flask_cors import CORS
import pandas as pd

import numpy as ny
import matplotlib.pyplot as plt
import warnings
warnings. filterwarnings('ignore')
import statsmodels.api as sm
from unicodedata import decomposition
from statsmodels.tsa.stattools import adfuller
from statsmodels.tsa.arima_model import ARIMA
from sklearn.metrics import mean_squared_error

CORS(app)

@app.route('/', methods=['POST', 'GET'])
def main():
    period = request.form["period"]
    to_predict = int(period)
    #print(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>",period)
    #print(type(to_predict))
    for file in request.files.getlist('file'):
        data = pd.read_csv(file, parse_dates=['date'], index_col=['date'])
    print(data.head())
    

    # machine learning part
    ts = data['totalsellbylitre'].resample('MS').sum()
    print(ts.head())
    decomposition = sm.tsa.seasonal_decompose(ts, model='additive')
    # fig = decomposition.plot()
    # plt.show()
    adftest = adfuller(ts)
    print("The pvalue of adfuller test is: ", adftest[1])
    ts.dropna(inplace=True)
    print(len(ts))

    # train the dataset and testing
    train = ts[:42]
    test = ts[42:]
    print("length of train & ts - 1", len(train), (len(ts) - 1))
    model = ARIMA(train, order=(5, 0, 4)).fit()
    pred = model.predict(start = len(train), end = (len(ts) - 1))
    print(pred.head())
    error = ny.sqrt(mean_squared_error(test, pred))
    print("________________",error)
    print("test mean & sqrt", test.mean(), ny.sqrt(test.var()))

    # plotting the train, test & future predicted values
        # train.plot(legend = True, label = 'Train', figsize = (10, 6))
        # test.plot(legend = True, label = 'Test')
        # pred.plot(legend = True, label = 'PredictionARIMA')
        # plt.show()

    # future prediction with ARIMA
    final_model = ARIMA(ts, order = (5, 0, 4)).fit()
    prediction = final_model.predict(len(ts), len(ts) + to_predict)
    
    # print thr values in terminal
    print("Predicted values of future \n", prediction)

    # save the csv file in assets folder
    file_path = 'C:/Users/91938/OneDrive/Desktop/Ruthu KAAR/new/sales/src/assets'
    prediction = pd.DataFrame(prediction, columns=['predictions']).to_csv(file_path + '/prediction.csv')

    return "Hello world"

if __name__ == "__main__":
    app.run(debug=True)