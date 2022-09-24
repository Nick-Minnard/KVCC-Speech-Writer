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


from app import create_app

app = create_app()

if __name__ == '__main__':
  app.run() # debug mode keeps site running
