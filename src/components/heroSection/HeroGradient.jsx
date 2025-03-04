const HeroGradient = () => {
  return (
    <div>
      <div className="shadow-redMediumShadow absolute top-0 right-[400px] -z-10 animate-pulse opacity-30"></div>
      <div className="shadow-blackMediumShadow absolute top-[5%] left-0 -z-10 opacity-10"></div>
      <div className="shadow-redMediumShadow absolute top-0 right-0 -z-10 animate-pulse opacity-30"></div>
      <div className="shadow-blackMediumShadow absolute top-[10%] left-0 -z-10 opacity-10"></div>
    </div>
  );
};

export default HeroGradient;