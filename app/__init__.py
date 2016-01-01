from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api

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

api = Api(app)

from controllers import resources
for resource in resources:
    api.add_resource(resource, resource.route)
