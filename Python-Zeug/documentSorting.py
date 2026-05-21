import os
import shutil
import sys

# Das komplette Lexikon aller Dateitypen, die wir kennen
alle_datei_typen = {
    ".pdf": "PDF_Dateien",
    ".jpg": "Bilder",
    ".jpeg": "Bilder",
    ".png": "Bilder",
    ".docx": "Office_Dokumente",
    ".pptx": "Office_Dokumente",
    ".xlsx": "Office_Dokumente",
    ".pages": "Office_Dokumente",
    ".zip": "Zip_Dateien",
    ".scala": "Scala_Dateien",
    ".py": "Python_Dateien",
}

# 1. Pfad bestimmen
if len(sys.argv) > 1:
    ordner_pfad = sys.argv[1]
else:
    ordner_pfad = os.getcwd()

if not os.path.exists(ordner_pfad):
    print(f"Fehler: Der Pfad '{ordner_pfad}' existiert nicht.")
    sys.exit(1)

# 2. Interaktives Menü für den Nutzer
print(f"\nZielordner: {ordner_pfad}")
print("-" * 40)
print("Was möchtest du heute aufräumen?")
print("1. Alles sortieren (inkl. 'Sonstiges')")
print("2. Nur Bilder")
print("3. Nur PDF-Dateien")
print("4. Nur Office-Dokumente")
print("5. Abbrechen")
print("-" * 40)

auswahl = input("Bitte wähle eine Option (1-5): ")

# 3. Filter-Logik: Welche Zielordner sind diesmal erlaubt?
erlaubte_kategorien = []

if auswahl == "1":
    # Alle Kategorien aus dem Dictionary (ohne Duplikate)
    erlaubte_kategorien = list(set(alle_datei_typen.values())) 
elif auswahl == "2":
    erlaubte_kategorien = ["Bilder"]
elif auswahl == "3":
    erlaubte_kategorien = ["PDF_Dateien"]
elif auswahl == "4":
    erlaubte_kategorien = ["Office_Dokumente"]
elif auswahl == "5":
    print("Vorgang abgebrochen.")
    sys.exit(0)
else:
    print("Ungültige Auswahl! Skript wird beendet.")
    sys.exit(1)

print("\nStarte Sortiervorgang...\n")

# 4. Dateien lesen und sortieren
try:
    dateien = os.listdir(ordner_pfad)
except OSError as e:
    print(f"Fehler beim Lesen des Ordners: {e}")
    sys.exit(1)

verschobene_dateien = 0

for datei in dateien:
    if datei == os.path.basename(__file__):
        continue
        
    dateipfad = os.path.join(ordner_pfad, datei)
    
    if os.path.isdir(dateipfad):
        continue
    
    _, extension = os.path.splitext(datei)
    extension = extension.lower()
    
    # 5. Prüfen, wohin die Datei gehört
    if extension in alle_datei_typen:
        ziel_ordner_name = alle_datei_typen[extension]
        
        # WICHTIG: Wenn der Zielordner nicht in unserer Auswahl ist, überspringen wir die Datei!
        if ziel_ordner_name not in erlaubte_kategorien:
            continue 
    else:
        # Wenn der Dateityp unbekannt ist, fassen wir ihn nur an, wenn "Alles" (1) gewählt wurde
        if auswahl != "1":
            continue
        ziel_ordner_name = "Sonstiges"
        
    # Zielordner erstellen und Datei verschieben
    zielordner = os.path.join(ordner_pfad, ziel_ordner_name)
    
    if not os.path.exists(zielordner):
        os.makedirs(zielordner, exist_ok=True)
    
    quellpfad = dateipfad
    zielpfad = os.path.join(zielordner, datei)
    
    try:
        shutil.move(quellpfad, zielpfad)
        print(f"Verschoben: '{datei}' -> [{ziel_ordner_name}]")
        verschobene_dateien += 1
    except Exception as e:
        print(f"Fehler bei '{datei}': {e}")

print("-" * 40)
print(f"Fertig! Es wurden {verschobene_dateien} Dateien verschoben.")