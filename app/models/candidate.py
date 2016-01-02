from app import db, ma

class Candidate(db.Model):
    __tablename__ = 'candidates'

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey('employees.id'))

class CandidateSchema(ma.ModelSchema):
    class Meta:
        model = Candidate
