import { toast } from 'react-toastify';

interface Props {
  shortUrlKey: string
  onReset: () => void
}

export const GeneratedUrl = ({ shortUrlKey, onReset }: Props) => {
  const url = `${window.origin}/${shortUrlKey}`;

  async function copyToClipboard() {
    await navigator.clipboard.writeText(url);
    toast('Copied to clipboard', {
      type: 'success',
      position: 'top-center',
    });
  }

  return (
    <>
      <div className="my-6">
        Your new url is{' '}
        <a className="text-white" href={url} target="_blank" rel="noreferrer">
          {url}
        </a>
        .{' '}
        <span className="whitespace-nowrap">
          Click{' '}
          <button className="text-success font-bold" onClick={copyToClipboard}>
            here
          </button>{' '}
          to copy.
        </span>
      </div>
      <button className="btn btn-primary" onClick={onReset}>
        Go back
      </button>
    </>
  );
};
