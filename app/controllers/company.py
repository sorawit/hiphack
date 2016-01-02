from flask_restful import Resource, fields, marshal_with

from app.models import Company, CompanySchema

class CompanyList(Resource):
    route = '/companies'

    def get(self):
        ''' Returns the list of all companies. '''
        results = Company.query.all()
        return CompanySchema(many=True).dump(results).data

    def post(self):
        return 'ggja'
