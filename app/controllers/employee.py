from flask_restful import Resource

class EmployeeList(Resource):
    route = '/employees'

    def get(self):
        return {'swit': 'd ja'}
