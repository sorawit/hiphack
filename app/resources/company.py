from flask import jsonify
from . import api
from ..models import *

@api.route('/company/new', methods=['POST'])
def addc():
    import random, string
    company_name = ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(5))
    company = Company(name=company_name)
    db.session.add(company)
    db.session.commit()
    return 'done'

@api.route('/company/gg')
def gg():
    return jsonify({'sdf':['sdf',123], 1: 20})

@api.route('/showc')
def showc():
    return str(Company.query.all())
