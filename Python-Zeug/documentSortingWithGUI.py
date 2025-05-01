import os
import shutil
import tkinter as tk
from tkinter import filedialog

def ordner_auswaehlen():
    ordner = filedialog.askdirectory()
    print(f"Ausgewählter Ordner: {ordner}")
    
    if ordner:
        ordner_name.config(text=ordner)
        ordner_var.set(ordner)
    
def ordner_sortieren():
    ordner = ordner_var.get()
    
    if not ordner:
        print("Kein Ordner ausgewählt.")
        return
    
    datei_typ = {
    ".pdf": "PDF_Dateien",
    ".jpg": "Bilder",
    ".jpeg": "Bilder",
    ".png": "Bilder",
    ".docx": "Office_Dokumente",
    ".pptx": "Office_Dokumente",
    ".xlsx": "Office_Dokumente",
    ".zip": "Zip_Dateien",
    ".scala": "Scala_Dateien",
    ".py": "Python_Dateien",
}

    #Alle Dateien im Ordner auflisten
    dateien = os.listdir(ordner)


    for datei in dateien:
        
        dateipfad = os.path.join(ordner, datei)
        
        #Ignorieren falls ein Ordner
        if os.path.isdir(dateipfad):
            continue
        
        #Dateityp bestimmen
        root, ext = os.path.splitext(datei)
        ext = ext.lower()
        
        #Prüfen ob Dateityp im Dictonary vorhanden
        if ext in datei_typ:
            zielordner = os.path.join(ordner, datei_typ[ext])
            
            #Zielordner erstellen falls noch nicht vorhanden
            if not os.path.exists(zielordner):
                os.mkdir(zielordner)
            
            #Datei in Zielordner verschieben
            quellpfad = os.path.join(ordner, datei)
            zielpfad = os.path.join(zielordner, datei)
            
            try:
                shutil.move(quellpfad, zielpfad)
                print(f"'{datei}' erfolgreich verschoben.")
            except FileNotFoundError:
                print(f"Datei {datei} nicht gefunden")
            except OSError as e:
                print(f"Fehler beim verschieben von '{datei}', {e}")
        
#Fenster erstellen
fenster = tk.Tk()
fenster.title("Datei_Organizer")
fenster.geometry("400x200")

ordner_var = tk.StringVar()

tk.Label(fenster, text="Wähle einen Ordner zum Organisieren:", font=("Arial", 14)).pack(pady=10)

# Button zum Ordner auswählen
button = tk.Button(fenster, text="Ordner auswählen", command=ordner_auswaehlen)
button.pack(pady=10)

# Label zur Anzeige des Pfads (initial leer)
ordner_name = tk.Label(fenster, text="", fg="green", wraplength=400, justify="center")
ordner_name.pack(pady=10)

sorting_button = tk.Button(fenster, text="Sortieren", command=ordner_sortieren)
sorting_button.pack(pady=10)

# GUI starten
fenster.mainloop()