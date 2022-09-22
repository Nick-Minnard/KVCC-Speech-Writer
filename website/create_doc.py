import docx

def create_speech_doc(speech):
  d = docx.Document()
  d.add_heading(speech.title, 0)

  return d
