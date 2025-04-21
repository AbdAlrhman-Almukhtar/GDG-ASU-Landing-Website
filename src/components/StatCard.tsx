import React from "react";

interface StatCardProps {
  icon: string;
  value: string;
  label: string;
  bg: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, bg }) => {
  const isImage =
    icon.includes("/") || icon.includes(".png") || icon.includes(".svg");

  return (
    <div className="bg-white rounded-2xl shadow p-6 w-64 flex flex-col items-center space-y-4">
      <div
        className={`w-24 h-24 rounded-full flex items-center justify-center text-3xl ${bg}`}
      >
        {isImage ? (
          <img src={icon} alt={label} className="w-16 h-16 object-contain" />
        ) : (
          icon
        )}
      </div>
      <div className="text-4xl font-bold text-gray-900">{value}</div>
      <div className="text-gray-500 text-md text-center">{label}</div>
    </div>
  );
};

export default StatCard;
