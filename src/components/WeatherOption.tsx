
export const WeatherOption = (city: any) => {
  return (
    <option value={city.code}>{city.name}</option>
  )
}
