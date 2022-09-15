from . import db
from flask_login import UserMixin

class Speech(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(150))
  data = db.Column(db.Text)
  user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

class User(db.Model, UserMixin):
  id = db.Column(db.Integer, primary_key=True)
  email = db.Column(db.String(150), unique=True)
  first_name = db.Column(db.String(150))
  current_speech_id = db.Column(db.Integer)
  speeches = db.relationship('Speech')
