import { Location } from "../../lib/types/jobsApiTypes";

type PresenceProps = {
  isRemote: boolean;
  location: Location[];
};

export default function Presence({ isRemote, location }: PresenceProps) {
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