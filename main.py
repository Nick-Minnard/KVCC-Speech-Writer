# KVCC Speech Writing Website
# Author: Nick Minnard
# 
# 
# 
# TODO:
# - Alert confirm speech delete
# - Auto Prefix generation
# - Option functionalities
# - Saving to database from page
# - Exporting to word document
# - Passwords...
# - Hotkey implementation
# - Help window
# - Cancel action option


from website import create_app

app = create_app()

if __name__ == '__main__':
  app.run(debug=True) # debug mode keeps site running
