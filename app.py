from flask import Flask
from flask import render_template
import csv
import json


app = Flask(__name__)


@app.route('/')
def index():
    schools = []
    programs = []

    with open('schools.csv', newline='') as inputfile:
        for row in csv.reader(inputfile):
            schools.append(row[0])
    
    with open('programs.csv', newline='') as inputfile:
        for row in csv.reader(inputfile):
            programs.append(row[0])

    return render_template('index.html', schools=schools, programs=programs)


if __name__ == "__main__":
    app.run(debug=True)