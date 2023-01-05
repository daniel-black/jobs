import { getBaseUrl } from "../../../lib/utils/general-utils";

export default async function JobPage({ params }: { params: { id: string } }) {
  const url = `${getBaseUrl()}/api/job?id=${params.id}`;
  const res = await fetch(url);
  const data = await res.json();

  return (
    <div>
      job id: {params.id}
      <br />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}