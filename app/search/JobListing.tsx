import { Job } from "../../lib/types/jobsApiTypes";
import { currencyFormatter } from "../../lib/utils/currency-utils";

type JobListingProps = { job: Job };

export default function JobListing({ job }: JobListingProps) {
  const { id, title, location, summary, isRemote, pay } = job;

  const min = currencyFormatter.format(parseFloat(pay.min));
  const max = currencyFormatter.format(parseFloat(pay.max));

  const renderLocations = () => {
    if (location.length === 0) return null;
    if (location.length >= 10) {
      return <span className="bg-slate-300 px-3 py-0.5 rounded-full">{location.length} total locations</span>
    }
    return (
      <div className="flex flex-wrap gap-1">
        {location.map(l => (
          <span key={l.displayName} className="bg-slate-300 px-3 py-0.5 rounded-full">{l.city}</span>
        ))}
      </div>
    )
  }

  return (
    <div className="bg-slate-100 rounded px-4 py-2">
      <h2>{title}</h2>
      <p className="truncate">{summary}</p>
      {renderLocations()}
      <p>{min} - {max} / {pay.rate === 'h' ? 'hr' : 'yr'}</p>
      <p>{isRemote ? 'Remote' : 'In person'}</p>
    </div>
  );
}