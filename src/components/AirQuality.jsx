const AirQuality = ({airPollution}) => {
    const values = airPollution.list[0].components;
    return (
        <div className="bg-gray-800 p-4 text-white rounded-lg text-center">
            <p>Air Pollution & Quality</p>
            {
                Object.entries(values).map(([key, value]) => (
                    <p key={key} className="text-sm">{key}: {value}</p>
                ))
            }
        </div>
    );
};

export default AirQuality;