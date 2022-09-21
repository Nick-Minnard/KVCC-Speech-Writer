# KVCC Speech Writing Website
# Author: Nick Minnard
# 
# 
# 
# TODO:
# - Alert confirm speech delete
# - Option functionalities
# - Exporting to word document
# - Passwords...
# - Hotkey implementation
# - Help window
# - Preserve speech title on phone screen layout


from website import create_app

app = create_app()

if __name__ == '__main__':
  app.run(debug=True) # debug mode keeps site running
