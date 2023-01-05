import { Pay } from "../../lib/types/jobsApiTypes";
import { currencyFormatter } from "../../lib/utils/currency-utils";

type PaymentProps = {
  pay: Pay;
};

export default function Payment({ pay }: PaymentProps) {
  let min = currencyFormatter.format(parseFloat(pay.min));
  let max = currencyFormatter.format(parseFloat(pay.max));

  if (pay.rate === 'y') {
    min = min.split(',')[0] + 'K';
    max = max.split(',')[0] + 'K';
  }

  return (
    <div className="text-stone-400">
      <span className="text-stone-600 font-semibold italic">{min}</span>
      &nbsp;~&nbsp;
      <span className="text-stone-600 font-semibold italic">{max}</span>
      {' '}per&nbsp;
      <span className="text-stone-600 font-semibold italic">{pay.rate === 'h' ? 'hour' : 'year'}</span>
    </div>
  );
}