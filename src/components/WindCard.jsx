const WindCard = ({weather}) => {
    return (
        <div className="bg-gray-800/60 p-4 text-white rounded-lg text-center">
            <p className="text-lg font-semibold">Wind Information</p>
            <p className="text-sm">Speed: {weather.wind.speed} m/s</p>
            <p className="text-sm">Direction: {weather.wind.deg}°</p>
        </div>
    );
};

export default WindCard;