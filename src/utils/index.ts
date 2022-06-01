export const API_KEY = process.env.REACT_APP_API_KEY;
export const urlImage = "http://openweathermap.org/img/w/";
export const kelvin = 273.15;

const WEEK_DAYS = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo",
];
export const getDay = () => {
  let a = new Date().getDay();
  const n = WEEK_DAYS.length;
  let week: any = [];
  for (let i = a; i <= a + n; i++) {
    week.push(WEEK_DAYS[((i % n) + n) % n]);
  }
  return week;
};

export const CITIES = [
  { id: 1, name: "Buenos aires" },
  { id: 2, name: "Cordoba" },
  { id: 3, name: "Rosario" },
  { id: 4, name: "Mendoza" },
  { id: 5, name: "Concordia" },
];
