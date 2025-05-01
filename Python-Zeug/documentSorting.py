import os
import shutil

datei_typ = {
    ".pdf": "PDF_Dateien",
    ".jpg": "Bilder",
    ".jpeg": "Bilder",
    ".docx": "Office_Dokumente",
    ".pptx": "Office_Dokumente",
    ".xlsx": "Office_Dokumente",
    ".zip": "Zip_Dateien",
    ".scala": "Scala_Dateien",
    ".py": "Python_Dateien",
    
}

ordner_pfad = "/Users/xavierjiang/Downloads"

#Alle Dateien im Ordner auflisten
dateien = os.listdir(ordner_pfad)


for datei in dateien:
    
    dateipfad = os.path.join(ordner_pfad, datei)
    
    #Ignorieren falls ein Ordner
    if os.path.isdir(dateipfad):
        continue
    
    #Dateityp bestimmen
    root, ext = os.path.splitext(datei)
    ext = ext.lower()
    
    #Prüfen ob Dateityp im Dictonary vorhanden
    if ext in datei_typ:
        zielordner = os.path.join(ordner_pfad, datei_typ[ext])
        
        #Zielordner erstellen falls noch nicht vorhanden
        if not os.path.exists(zielordner):
            os.mkdir(zielordner)
        
        #Datei in Zielordner verschieben
        quellpfad = os.path.join(ordner_pfad, datei)
        zielpfad = os.path.join(zielordner, datei)
        
        try:
            shutil.move(quellpfad, zielpfad)
            print(f"'{datei}' erfolgreich verschoben.")
        except FileNotFoundError:
            print(f"Datei {datei} nicht gefunden")
        except OSError as e:
            print(f"Fehler beim verschieben von '{datei}', {e}")

            

        
        
        
