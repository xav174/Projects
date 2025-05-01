import os
import shutil

current_directory = os.getcwd()
print(current_directory)

ordner_pfad = "/Users/xavierjiang/Downloads"
zielordner = os.path.join(ordner_pfad, "PDF_Dateien")
#Alle Dateien im Ordner auflisten
dateien = os.listdir(ordner_pfad)

#Ordner erstellen falls noch nicht vorhanden
if not os.path.exists(zielordner):
    os.mkdir(zielordner)
    print("Zielordner wurde erstellt")

#Dateien verschieben
for datei in dateien:
    if datei.lower().endswith(".pdf"):
        quellpfad = os.path.join(ordner_pfad, datei)
        zielpfad = os.path.join(zielordner, datei)
        
        try:
            shutil.move(quellpfad, zielpfad)
            print(f"'{datei}' erfolgreich verschoben.")
        except FileNotFoundError:
            print(f"Datei {datei} nicht gefunden")
        except OSError as e:
            print(f"Fehler beim verschieben von '{datei}', {e}")

            

        
        
        
