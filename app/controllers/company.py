from flask_restful import Resource, fields, marshal_with

from app.models import Company

company_fields = {
    'id': fields.Integer,
    'name': fields.String,
}

class CompanyList(Resource):
    route = '/companies'

    @marshal_with(company_fields)
    def get(self):
        ''' Returns the list of all companies. '''
        return Company.query.all()

    def post(self):
        return 'ggja'
