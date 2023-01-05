import { Job } from "../../lib/types/jobsApiTypes";
import Payment from "./Payment";
import Presence from "./Presence";

type JobListingProps = { job: Job };

export default function JobListing({ job }: JobListingProps) {
  const { id, title, location, summary, isRemote, pay } = job;

  return (
    <div className="bg-stone-100 shadow border border-stone-300 rounded-lg px-4 py-2 space-y-2">
      <div className="flex justify-between items-start w-full">
        <h2 className="text-xl font-bold text-stone-700">{title}</h2>
      </div>
      <div className="border-t pt-2">
        <Payment pay={pay} />
        <Presence isRemote={isRemote} location={location} />
      </div>
    </div>
  );
}
