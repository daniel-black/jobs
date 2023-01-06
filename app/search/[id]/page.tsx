import { JobDetailed, JobsApiResponse } from "../../../lib/types/jobsApiTypes";
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

  return (
    <div className="py-10 px-5">
      <h1 className="text-2xl text-stone-700">{job.title}</h1>
      <br />
      <pre>{JSON.stringify(job, null, 2)}</pre>
    </div>
  );
}