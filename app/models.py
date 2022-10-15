from . import db
from flask_login import UserMixin
import sqlalchemy_jsonfield
from datetime import datetime
from pytz import timezone

tz = timezone("US/Eastern")

class Speech(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(150))
  data = db.Column(
    sqlalchemy_jsonfield.JSONField(
      enforce_string=True,
      enforce_unicode=False
    ),
    nullable=False
  )
  updated = db.Column(db.DateTime(timezone=True), default=datetime.now(tz=tz), onupdate=lambda: datetime.now(tz=tz))
  created = db.Column(db.DateTime(timezone=True), default=datetime.now(tz=tz))
  user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

  def get_updated(self):
    return self.updated.strftime("%Y-%m-%d %H:%M:%S")

  def get_created(self):
    return self.created.strftime("%Y-%m-%d %H:%M:%S")

class User(db.Model, UserMixin):
  id = db.Column(db.Integer, primary_key=True)
  email = db.Column(db.String(150), unique=True)
  password = db.Column(db.String(150))
  username = db.Column(db.String(150))
  current_speech_id = db.Column(db.Integer)
  speeches = db.relationship('Speech')
