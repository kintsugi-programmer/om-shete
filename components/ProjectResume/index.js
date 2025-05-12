import React from "react";

const ProjectResume = ({ dates, type, position, bullets }) => {
  // Normalize bullets into an array once
  const bulletsLocal = React.useMemo(() => {
    if (typeof bullets === "string") {
      return bullets
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
    }
    if (Array.isArray(bullets)) {
      return bullets;
    }
    return [];
  }, [bullets]);

  return (
    <div className="mt-5 w-full flex mob:flex-col desktop:flex-row justify-between">
      <div className="text-lg w-2/5">
        <h2>{dates}</h2>
        <h3 className="text-base opacity-50">{type}</h3>
      </div>
      <div className="w-3/5">
        <h2 className="text-lg font-bold">{position}</h2>
        {bulletsLocal.length > 0 && (
          <ul className="list-disc pl-5">
            {bulletsLocal.map((bullet, idx) => (
              <li key={idx} className="text-sm my-1 opacity-70">
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectResume;
