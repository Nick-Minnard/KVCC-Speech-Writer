from docx import Document

def create_speech_doc(speech):
  d = Document()
  d.add_heading(speech.title, 0)

  return d
