export const parkirMobil = (durasiParkir,total=0) => {
  return {
    type: "MOBIL",
    durasiParkir,
    total:durasiParkir*5000
  };
};

export const parkirMotor = (durasiParkir,total=0) => {
  return {
    type: "MOTOR",
    durasiParkir,
    total:durasiParkir*2000
  };
};
