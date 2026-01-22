export const calculateDaysRemaining = (expiryDate) => {
    const today = new Date(); //heute
    today.setHours(0, 0, 0, 0); //Setzt die Uhrzeit auf Null damit wir nur die Kalendar Tage vergleichen

    const expiry = new Date(expiryDate); //Ablaufdatum
    expiry.setHours(0, 0, 0, 0);

    //berechne die Differenz in Millisekunden
    const diffInMs = expiry - today;

    //Umrechnung in Tage
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

    return diffInDays;
  };