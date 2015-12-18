from flask import Blueprint
from .. import db
from ..models import Company

api = Blueprint('api', __name__, url_prefix='/api')

@api.route('/ggja')
def ggja():
    return 'abc'

@api.route('/addc')
def addc():
    import random, string
    company_name = ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(5))
    company = Company(name=company_name)
    db.session.add(company)
    db.session.commit()
    return 'done'

@api.route('/showc')
def showc():
    return str(Company.query.all())
