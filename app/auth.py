from flask import Blueprint, render_template, request, flash, redirect, url_for
from .models import User
from .app import db
from flask_login import login_user, login_required, logout_user, current_user

auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['GET', 'POST'])
def login():
  if request.method == 'POST':
    email = request.form.get('email')

    user = User.query.filter_by(email=email).first()
    if user:
      flash('Logged in successfully!', category='success')
      login_user(user, remember=True)
      return redirect(url_for('views.home'))
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
    first_name = request.form.get('first-name')

    user = User.query.filter_by(email=email).first()

    if user:
      flash('Account with this email already exists!', category='error')
    elif len(email) < 4:
      flash('Email must be greater than 3 characters', category='error')
    elif len(first_name) < 2:
      flash('First name must be greater than 1 character', category='error')
    else:
      new_user = User(email=email, first_name=first_name)
      db.session.add(new_user)
      db.session.commit()
      login_user(new_user, remember=True)
      flash('Account created!', category='success')
      return redirect(url_for('views.home'))

  return render_template("signup.html", user=current_user)
