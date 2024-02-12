import React, { ReactNode } from 'react';
import usePaystackPayment from './use-paystack';
import { callback, PaystackProps } from './types';

type PaystackButtonProps = {
  text?: string;
  className?: string;
  children?: ReactNode;
  onSuccess?: callback;
  onClose?: callback;
} & PaystackProps

const PaystackButton = ({
  text,
  className,
  children,
  onSuccess,
  onClose,
  ...config
}: PaystackButtonProps): JSX.Element => {
  const initializePayment = usePaystackPayment(config);

  return (
    <button
      className={className}
      onClick={(): void => initializePayment({ config, onSuccess, onClose })}
    >
      {text || children}
    </button>
  );
};

export default PaystackButton;
