const InfoCard = ({ className, title, value, icon = "" }) => {
  return (
    <div className={`p-4 space-y-4 items-center ${className}`}>
      <div className="flex items-center gap-2">
        <i className="text-xl text-secondary-700">{icon}</i>
        <span className="text-sm text-secondary-700">{title}</span>
      </div>
      <p className="text-xs text-secondary-700">{value}</p>
    </div>
  );
};

export default InfoCard;
