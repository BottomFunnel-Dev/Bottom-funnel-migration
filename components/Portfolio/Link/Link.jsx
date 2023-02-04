import { cloneElement, isValidElement } from 'react';
import NextLink from 'next/link';

const ExternalLink = ({ child, href }) => {
  if (!isValidElement(child)) {
    throw new Error('Child must be a valid React element');
  }
  if (child.type !== 'a') {
    throw new Error('Child must be an <a> element');
  }
  return cloneElement(child, {
    href,
    target: '_blank',
    rel: 'noopener noreferrer',
  });
};

export const Link = ({ children, ...props }) => {
  if (props.href.toString().startsWith('/')) {
    return <NextLink {...props}>{children}</NextLink>;
  } else {
    return <ExternalLink child={children} href={props.href.toString()} />;
  }
};
