from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///../test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

@app.before_first_request
def before_first_request():
    try:
        db.create_all()
    except Exception as e:
        app.logger.error(str(e))

@app.route('/')
def index():
    return 'sawaddee ja'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
