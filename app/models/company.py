from app import db, ma

class Company(db.Model):
    __tablename__ = 'companies'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(256), unique=True, nullable=False)
    employees = db.relationship('Employee', backref='company')

class CompanySchema(ma.ModelSchema):
    class Meta:
        model = Company
