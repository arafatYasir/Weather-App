import { countryCityMap } from "../data/cities";

const CountrySelector = ({ country, setCountry, city, setCity }) => {
    return (
        <div>
            <select
                className="p-2 border rounded mr-4"
                value={country}
                onChange={(e) => {
                    setCountry(e.target.value);
                    setCity(countryCityMap[e.target.value][0])
                }}
            >
                {
                    Object.keys(countryCityMap).map((country, idx) => (
                        <option className="text-black" key={idx}>{country}</option>
                    ))
                }
            </select>

            <select
                className="p-2 border rounded mr-4"
                value={city}
                onChange={(e) => {
                    setCity(e.target.value)
                }}
            >
                {
                    countryCityMap[country]?.map((city, idx) => (
                        <option className="text-black" key={idx}>{city}</option>
                    ))
                }
            </select>
        </div>
    );
};

export default CountrySelector;