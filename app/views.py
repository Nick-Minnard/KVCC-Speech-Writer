from flask import Blueprint, render_template, request, flash, jsonify, redirect, send_file, url_for
from flask_login import login_required, current_user
from .models import Speech
from . import db
import json, io
from .create_doc import create_speech_doc

views = Blueprint('views', __name__)

@login_required
@views.route('/', methods=['GET', 'POST'])
def home():
  """Home view / create new speech route"""
  if request.method == 'POST':
    title = request.form.get('title')
    if len(title) < 1 or title.strip() == "":
      flash('Invalid title was entered', category='error')
    else:
      # Create new speech
      new_speech = Speech(title=title, data="none", user_id=current_user.id)
      db.session.add(new_speech)
      db.session.commit()
      flash('New Speech Created!', category='success')
    return render_template("home.html", user=current_user)
  # Render the home template only if the user if logged in
  if request.method == 'GET':
    if current_user and current_user.is_authenticated:
      return render_template("home.html", user=current_user)
    else:
      return redirect(url_for("auth.login"))

@views.route('/site-info', methods=['GET'])
def site_info():
  """Site info / tutorial view"""
  return render_template('site_info.html', user=current_user)

@login_required
@views.route('/delete-speech', methods=['POST'])
def delete_speech():
  """Delete speech route"""
  speech = Speech.query.get(json.loads(request.data)['speechId'])
  if speech:
    if speech.user_id == current_user.id:
      db.session.delete(speech)
      db.session.commit()
  return jsonify({})

@login_required
@views.route('/update-speech-title', methods=['POST'])
def update_speech_title():
  """Update speech route"""
  speech_data = json.loads(request.data)
  new_title = speech_data['newTitle']
  speech = Speech.query.get(speech_data['speechId'])
  if speech:
    if speech.user_id == current_user.id:
      speech.title = new_title
      db.session.commit()
  return jsonify({})

@login_required
@views.route('/load-speech', methods=['POST'])
def load_speech():
  """Load speech route"""
  speech = json.loads(request.data)
  speechId = speech['speechId']
  speech = Speech.query.get(speechId)
  if speech:
    if speech.user_id == current_user.id:
      current_user.current_speech_id = speechId
      db.session.commit()
  return jsonify({})

@login_required
@views.route('/save-speech', methods=['POST'])
def save_speech():
  """Save speech route"""
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
@views.route('/export-speech', methods=['GET'])
def export_speech():
  """Export speech route"""
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
@views.route('/editor', methods=['GET'])
def editor():
  """Editor view"""
  if current_user:
    # Return to home if current speech doesn't exist
    if not Speech.query.get(current_user.current_speech_id):
      return redirect("/")
    speech = Speech.query.get(current_user.current_speech_id)
    return render_template("editor.html", user=current_user, speech=speech, stringified_data = json.dumps(speech.data))
