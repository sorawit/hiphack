from app import db, ma

class Employee(db.Model):
    __tablename__ = 'employees'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(256), unique=True, nullable=False)
    password = db.Column(db.String(256), nullable=False)
    company_id = db.Column(db.Integer, db.ForeignKey('companies.id'))
    candidates = db.relationship('Candidate', backref='owner')

class EmployeeSchema(ma.ModelSchema):
    class Meta:
        model = Employee
