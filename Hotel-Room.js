function hotelRooms(input) {
  let month = input[0];
  let sleepovers = Number(input[1]);

  let apartamentPrice;
  let studioPrice;

  let apartamentSleepovers;
  let studioSleepovers;

  switch (month) {
    case "May":
    case "October":
      studioPrice = 50;
      apartamentPrice = 65;
      studioSleepovers = sleepovers * studioPrice;
      apartamentSleepovers = sleepovers * apartamentPrice;
      if (sleepovers > 7 && sleepovers < 14) {
        studioSleepovers -= studioSleepovers * 0.05;
      } else if (sleepovers > 14) {
        studioSleepovers -= studioSleepovers * 0.3;

        apartamentSleepovers -= apartamentSleepovers * 0.1;
      }

      break;
    case "June":
    case "September":
      studioPrice = 75.2;
      apartamentPrice = 68.7;
      studioSleepovers = sleepovers * studioPrice;
      apartamentSleepovers = sleepovers * apartamentPrice;
      if (sleepovers > 14) {
        studioSleepovers -= studioSleepovers * 0.2;
        apartamentSleepovers -= apartamentSleepovers * 0.1;
      }

      break;
      break;
    case "July":
    case "August":
      studioPrice = 76;
      apartamentPrice = 77;
      studioSleepovers = sleepovers * studioPrice;
      apartamentSleepovers = sleepovers * apartamentPrice;
      if (sleepovers > 14) {
        apartamentSleepovers -= apartamentSleepovers * 0.1;
      }
      break;
    default:
      break;
  }

  console.log(`Apartment: ${apartamentSleepovers.toFixed(2)} lv.`);
  console.log(`Studio: ${studioSleepovers.toFixed(2)} lv.`);
}
hotelRooms(["May", "15"]);
