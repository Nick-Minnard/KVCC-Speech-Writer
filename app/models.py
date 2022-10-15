from . import db
from flask_login import UserMixin
import sqlalchemy_jsonfield
import datetime

NYCTimeDelta = datetime.timedelta(hours=-4)
NYC = datetime.timezone(NYCTimeDelta, name="NYC")

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
  updated = db.Column(db.DateTime(timezone=True), default=datetime.datetime.now(tz=NYC), onupdate=lambda: datetime.datetime.now(tz=NYC))
  created = db.Column(db.DateTime(timezone=True), default=datetime.datetime.now(tz=NYC))
  user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

  def get_updated(self):
    return self.updated.strftime("%Y-%m-%d %I:%M %p")

  def get_created(self):
    return self.created.strftime("%Y-%m-%d %I:%M %p")

class User(db.Model, UserMixin):
  id = db.Column(db.Integer, primary_key=True)
  email = db.Column(db.String(150), unique=True)
  password = db.Column(db.String(150))
  username = db.Column(db.String(150))
  current_speech_id = db.Column(db.Integer)
  speeches = db.relationship('Speech')
