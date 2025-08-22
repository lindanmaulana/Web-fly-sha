import { Skeleton } from "@/components/ui/skeleton"

export const LoadingFilterAirlane = () => {
    return (
         <div className="flex flex-col gap-4">
      <p className="font-semibold">Airlines</p>
      {[0, 1, 3].map((val) => (
        <label
          key={val }
          htmlFor={val.toString()}
          className="font-semibold flex items-center gap-[10px] text-white"
        >
         <Skeleton className="size-[25px] rounded" />
         <Skeleton className="w-[150px] h-5 rounded" />
        </label>
      ))}
    </div>
    )
}