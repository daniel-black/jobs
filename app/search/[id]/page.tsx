import { JobDetailed, JobsApiResponse } from "../../../lib/types/jobsApiTypes";
import { currencyFormatter } from "../../../lib/utils/currency-utils";
import { getBaseUrl } from "../../../lib/utils/general-utils";

export default async function JobPage({ params }: { params: { id: string } }) {
  const url = `${getBaseUrl()}/api/job?id=${params.id}`;
  const res = await fetch(url);

  if (!res.ok) {
    return (
      <div>Ah shit something went wrong with the request :(</div>
    );
  }

  const data = await res.json() as JobsApiResponse;
  const job = data.result as JobDetailed;

  let min = currencyFormatter.format(parseFloat(job.pay.min));
  let max = currencyFormatter.format(parseFloat(job.pay.max));

  return (
    <div className="py-10 px-5 space-y-3">
      <h1 className="text-2xl text-stone-700">{job.title}</h1>
      <p>{min} ~ {max} per {job.pay.rate === 'h' ? 'hour' : 'year'}</p>
      <p>starts {new Date(job.startDate).toLocaleDateString()}, ends {new Date(job.endDate).toLocaleDateString()}</p>
      <p>{job.summary}</p>
      {job.openings && <p>{job.openings} openings</p>}
      <div>
        {job.location.length === 1 ? (
          <p>{job.location[0].city}</p>
        ) : (
          <ul>
            {job.location.map(l => (
              <li key={l.city}>{l.city}</li>
            ))}
          </ul>
        )}
      </div>
      <div>
        {job.majorDuties.length > 1
          ? job.majorDuties.map(d => <li key={d}>{d}</li>)
          : <p>{job.majorDuties[0]}</p>
        }
      </div>
      <p>Department: {job.dept}</p>
      <p>Organization: {job.org}</p>
      <div>
        <p>Contacts:</p>
        {job.agency.email && <p>{job.agency.email}</p>}
        {job.agency.phone && <p>{job.agency.phone}</p>}
      </div>
      <p>{job.education}</p>
      <p>{job.qualifications}</p>
      <a href={job.usajobsUri} target='_blank'>Apply now</a>

      {/* Uncomment following line to see whole job object */}
      {/* <pre className="text-stone-400">{JSON.stringify(job, null, 2)}</pre> */}
    </div>
  );
}