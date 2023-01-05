type ResultsLineProps = {
  count: number;
  countAll: number;
  title: string | null;
  location: string | null;
};

// this is all pretty ugly
const getTopLine = (count: number, countAll: number): JSX.Element => {
  if (count === 0) return <span>No results found</span>;
  if (count === countAll) return <span>Viewing all <strong>{count}</strong> results</span>;
  return <span>Viewing <strong>{count}</strong> of <strong>{countAll}</strong> results</span>;
}

// I hate this function
const getBottomLine = (title: string | null, location: string | null): JSX.Element | null => {
  if (!title && !location) return null;

  if (title) {
    if (location) {
      return <span>for <strong>"{title}"</strong> in <strong>"{location}"</strong></span>;
    }
    return <span>for <strong>"{title}"</strong></span>;
  }
  return <span>in <strong>"{location}"</strong></span>;
}

export default function ResultsLine(props: ResultsLineProps): JSX.Element {
  const { count, countAll, title, location } = props;

  return (
    <div className="results-line">
      {getTopLine(count, countAll)}
      <br />
      {getBottomLine(title, location)}
    </div>
  );
}