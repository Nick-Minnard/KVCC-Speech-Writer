from flask import Blueprint, render_template, request, flash, jsonify, redirect, send_file, url_for
from flask_login import login_required, current_user
from .models import Speech
from . import db
import json
from .create_doc import create_speech_doc
import io

views = Blueprint('views', __name__)

@login_required
@views.route('/', methods=['GET', 'POST'])
def home():
  if request.method == 'POST':
    title = request.form.get('title')

    if len(title) < 1 or title.strip() == "":
      flash('Invalid title was entered', category='error')
    else:
      new_speech = Speech(title=title, data="none", user_id=current_user.id)
      db.session.add(new_speech)
      db.session.commit()
      flash('New Speech Created!', category='success')

    return render_template("home.html", user=current_user)
    
  if request.method == 'GET':
    if current_user and current_user.is_authenticated:
      return render_template("home.html", user=current_user)
    else:
      return redirect(url_for("auth.login"))

@views.route('/site-info', methods=['GET', 'POST'])
def site_info():
  return render_template('site_info.html', user=current_user)

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

@login_required
@views.route('/save-speech', methods=['POST'])
def save_speech():
  speech = json.loads(request.data)
  speech_data = speech['speech_data']
  speech_id = speech['speech_id']
  speech = Speech.query.get(speech_id)
  if speech:
    if speech.user_id == current_user.id:
      speech.data = speech_data
      db.session.commit()
  return jsonify({})

@login_required
@views.route('/export-speech/')
def export_speech():
  speech = Speech.query.get(current_user.current_speech_id)
  if speech:
    if speech.user_id == current_user.id:
      document = create_speech_doc(speech)
      f = io.BytesIO()
      document.save(f)
      f.seek(0)
      return send_file(f, as_attachment = True, download_name=speech.title + '.docx')
  return jsonify({})

@login_required
@views.route('/editor', methods=['GET', 'POST'])
def editor():
  if current_user:
    if current_user.current_speech_id == None:
      return redirect("/")
    speech = Speech.query.get(current_user.current_speech_id)
    return render_template("editor.html", user=current_user, speech=speech, stringified_data = json.dumps(speech.data))
