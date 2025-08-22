import { getAllAirplanesOptions } from "@/actions/airplanes";

export const FilterAirlane = async () => {
  const airlanes = await getAllAirplanesOptions();

  return (
    <div className="flex flex-col gap-4">
      <p className="font-semibold">Airlines</p>
      {airlanes.map((airlane, index) => (
        <label
          key={airlane.id + index}
          htmlFor={airlane.id}
          className="font-semibold flex items-center gap-[10px] text-white"
        >
          <input
            type="checkbox"
            name="airlines"
            id={airlane.id}
            value={airlane.id}
            className="w-[18px] h-[18px] appearance-none checked:border-[3px] checked:border-solid checked:border-flysha-black rounded-[6px] checked:bg-flysha-light-purple ring-2 ring-flysha-off-purple checked:ring-white"
          />
          {airlane.name}
        </label>
      ))}
    </div>
  );
};
