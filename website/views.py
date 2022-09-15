from flask import Blueprint, render_template, request, flash, jsonify, redirect, url_for
from flask_login import login_required, current_user
from .models import Speech
from . import db
import json

views = Blueprint('views', __name__)

@login_required
@views.route('/', methods=['GET', 'POST'])
def home():
  if request.method == 'POST':
    title = request.form.get('title')

    if len(title) < 1:
      flash('Speech title is too short', category='error')
    else:
      new_speech = Speech(title=title, data='', user_id=current_user.id)
      db.session.add(new_speech)
      db.session.commit()
      flash('New Speech Created!', category='success')

  return render_template("home.html", user=current_user)

@login_required
@views.route('/delete-speech', methods=['POST'])
def delete_speech():
  speech = json.loads(request.data)
  speechId = speech['speechId']
  speech = Speech.query.get(speechId)
  if speech:
    if speech.user_id == current_user.id:
      db.session.delete(speech)
      db.session.commit()
  return jsonify({})

@login_required
@views.route('/update-speech-title', methods=['POST'])
def update_speech_title():
  speech = json.loads(request.data)
  speechId = speech['speechId']
  new_title = speech['newTitle']
  speech = Speech.query.get(speechId)
  if speech:
    if speech.user_id == current_user.id:
      speech.title = new_title
      db.session.commit()
  return jsonify({})

@login_required
@views.route('/load-speech', methods=['GET', 'POST'])
def load_speech():
  speech = json.loads(request.data)
  speechId = speech['speechId']
  speech = Speech.query.get(speechId)
  if speech:
    if speech.user_id == current_user.id:
      current_user.current_speech_id = speechId
      db.session.commit()
  return jsonify({})

@login_required
@views.route('/editor', methods=['GET', 'POST'])
def editor():
  if current_user.current_speech_id == None:
    return redirect("/")
  speech = Speech.query.get(current_user.current_speech_id)
  return render_template("editor.html", user=current_user, speech=speech)
