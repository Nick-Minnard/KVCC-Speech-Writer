from flask import Blueprint, render_template, request, flash, redirect, url_for, current_app
from .models import User
from werkzeug.security import generate_password_hash, check_password_hash
from . import db
from flask_login import login_user, login_required, logout_user, current_user
from flask_mail import Mail, Message
import string, random

auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['GET', 'POST'])
def login():
  if request.method == 'POST':
    email = request.form.get('email')
    password = request.form.get('password')

    user = User.query.filter_by(email=email).first()
    if user:
      if check_password_hash(user.password, password):
        login_user(user, remember=True)
        return redirect(url_for('views.home'))
      else:
        flash('Incorrect password, try again', category='error')
    else:
      flash('Account with this email does not exist', category='error')

  return render_template("login.html", user=current_user)

@auth.route('/logout')
@login_required
def logout():
  logout_user()
  return redirect(url_for('auth.login'))

@auth.route('/signup', methods=['GET', 'POST'])
def signup():
  if request.method == 'POST':
    email = request.form.get('email')
    username = request.form.get('username')
    password1 = request.form.get('password1')
    password2 = request.form.get('password2')

    user = User.query.filter_by(email=email).first()

    if user:
      flash('Account with this email already exists!', category='error')
    elif len(email) < 4:
      flash('Email must be greater than 3 characters', category='error')
    elif len(username) < 2:
      flash('Username must be greater than 1 character', category='error')
    elif password1 != password2:
      flash('Passwords don\'t match', category='error')
    elif len(password1) < 7:
      flash('Password must be at least 7 characters', category='error')
    else:
      new_user = User(email=email, username=username, password=generate_password_hash(password1, method='sha256'))
      db.session.add(new_user)
      db.session.commit()
      login_user(new_user, remember=True)
      flash('Account created!', category='success')
      return redirect(url_for('views.home'))

  return render_template("signup.html", user=current_user)

@auth.route('/reset-password', methods=['GET', 'POST'])
def reset_password():
  if request.method == 'POST':
    password1 = request.form.get('password1')
    password2 = request.form.get('password2')

    if password1 != password2:
      flash('Passwords don\'t match', category='error')
    elif len(password1) < 7:
      flash('Password must be at least 7 characters', category='error')
    else:
      current_user.password = generate_password_hash(password1, method="sha256")
      db.session.commit()
      flash('Password reset!', category='success')
      return redirect(url_for('views.home'))

  return render_template("reset_password.html", user=current_user)

@auth.route('/forgot-password', methods=['GET', 'POST'])
def forgot_password():
  if request.method == 'POST':
    email = request.form.get('email')

    user = User.query.filter_by(email=email).first()

    if not user:
      flash('Account with this email doesn\'t exist!', category='error')
    else:                    
      lower = string.ascii_lowercase
      upper = string.ascii_uppercase
      num = string.digits
      symbols = string.punctuation
      char_set = lower + upper + num + symbols
      temp = random.sample(char_set,12)
      new_password = "".join(temp)

      mail = Mail(current_app)
      msg = Message()
      msg.subject = "Forgot Password"
      msg.recipients = [email]
      msg.sender = 'COM101speechwriter@gmail.com'
      msg.body = '''This is a recovery email. Use the below password to login into your account. From
      there you can reset your password once logged in or continue to use the one that has been generated for you: ''' + new_password
      mail.send(msg)

      user.password = generate_password_hash(new_password, method="sha256")
      db.session.commit()

      flash('Email sent!', category='success')
      return redirect(url_for('auth.login'))

  return render_template("forgot_password.html", user=current_user)
