const SkillsCard = ({
    name,
    textColor,
    bgColor,
    bgColorLight,
    icon,
    shadow,
}) => {
    return (
        <div>
            <div
                className={`relative h-52 w-40 sm:h-72 sm:w-52 ${bgColor} rounded-tr-lg cursor-pointer hover:scale-[1.005] hover:-translate-y-3 hover:shadow-app-base ${shadow} transition-transform duration-300 active:translate-y-0`}
            >
                <div className="absolute h-full w-full top-0 left-0 flex items-center justify-center">
                    <div
                        className={`h-28 aspect-square rounded-full ${bgColorLight} flex items-center justify-center p-4 select-none`}
                    >
                        <img src={icon} alt="" className="h-full w-full" />
                    </div>
                </div>
                <div
                    className={`absolute bottom-4 sm:bottom-10 text-center w-full text-lg ${textColor} font-semibold select-none`}
                >
                    {name}
                </div>
            </div>
        </div>
    );
};

export default SkillsCard;
