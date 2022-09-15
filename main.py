# KVCC Speech Writing Website
# Author: Nick Minnard
# 
# 
# 
# To Do List:
# - Brain Storm
# - Compare to previous version
# - Create basic flask site with user auth
# - Alert confirm speech delete
# - No Introduction Labels
# - HR separating sections

from website import create_app

app = create_app()

if __name__ == '__main__':
  app.run(debug=True) # debug mode keeps site running
