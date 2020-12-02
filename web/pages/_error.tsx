import { NextPageContext } from 'next';

interface ErrorProps {
  statusCode: number
}

const Error = ({ statusCode }: ErrorProps): JSX.Element => (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
);

Error.getInitialProps = ({ res, err }: NextPageContext): ErrorProps => {
  let statusCode: number;
  if (res) {
    statusCode = res.statusCode;
  } else if (err) {
    statusCode = err.statusCode;
  } else {
    statusCode = 404;
  }
  return { statusCode };
};

export default Error;
