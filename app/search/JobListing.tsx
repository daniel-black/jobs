import { Job, Location } from "../../lib/types/jobsApiTypes";
import { currencyFormatter } from "../../lib/utils/currency-utils";

type JobListingProps = { job: Job };

export default function JobListing({ job }: JobListingProps) {
  const { id, title, location, summary, isRemote, pay } = job;

  const min = currencyFormatter.format(parseFloat(pay.min));
  const max = currencyFormatter.format(parseFloat(pay.max));

  return (
    <div className="bg-stone-100 shadow border border-stone-300 rounded-lg px-4 py-2 space-y-2">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-xl font-semibold text-stone-700">{title}</h2>
        <button className="px-3 py-0.5 rounded-full bg-emerald-200 text-emerald-800">apply</button>
      </div>
      <div className="border-t pt-2">
        <p>{min} - {max} / {pay.rate === 'h' ? 'hr' : 'yr'}</p>
        <Presence isRemote={isRemote} location={location} />
      </div>
    </div>
  );
}

type PresenceProps = {
  isRemote: boolean;
  location: Location[];
};

function Presence({ isRemote, location }: PresenceProps) {
  return (
    <div className="space-x-2">
      <span className={`pill ${isRemote ? 'bg-sky-200 text-sky-600': 'bg-violet-200 text-violet-600'}`}>
        {isRemote ? 'Remote' : 'In-person'}
      </span>
      {!isRemote && (
        <span className="text-sm text-stone-400">
          {location.length > 1 ? `${location.length} locations` : location[0].city}
        </span>
      )}
    </div>
  );
}