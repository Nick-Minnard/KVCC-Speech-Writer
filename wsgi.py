# KVCC Speech Writing Website
# Author: Nick Minnard
# 
# 
# 
# TODO:
# - Passwords...
# - Help window / Site info
# - Add auto saving
# - Styling
# - Word doc formatting


from website.app import create_app

app = create_app()

if __name__ == '__main__':
  app.run(debug=True) # debug mode keeps site running
