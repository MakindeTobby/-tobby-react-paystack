import React, { forwardRef, useContext, FunctionComponentElement } from 'react';
import PaystackProvider from './paystack-provider';
import { PaystackProps } from './types';
import PaystackContext from './paystack-context';

// type PaystackConsumerProps = {
//   children: (arg: Record<string, any>) => any;
//   onSuccess?: () => void;
//   onClose?: () => void;
// } & PaystackProps

type PaystackConsumerProps<T> = {
  children: (arg: Record<string, T>) => T;
  onSuccess?: () => void;
  onClose?: () => void;
} & PaystackProps;

const PaystackConsumerChild = ({
  children,
  ref,
}: {
  children: any;
  ref: any;
}): FunctionComponentElement<any> => {
  const { config, initializePayment, onSuccess, onClose } = useContext(PaystackContext);

  const completeInitializePayment = (): void => initializePayment({ config, onSuccess, onClose });
  return children({ initializePayment: completeInitializePayment, ref });
};

// eslint-disable-next-line react/display-name
// const PaystackConsumer = forwardRef(
//   (
//     { children, onSuccess: paraSuccess, onClose: paraClose, ...others }: PaystackConsumerProps,
//     ref: any,
//   ): JSX.Element => {
//     const onSuccess = paraSuccess ? paraSuccess : (): any => null;
//     const onClose = paraClose ? paraClose : (): any => null;
//     return (
//       <PaystackProvider {...others} onSuccess={onSuccess} onClose={onClose}>
//         <PaystackConsumerChild ref={ref}>{children}</PaystackConsumerChild>
//       </PaystackProvider>
//     );
//   },
// );

const PaystackConsumer <T>= forwardRef(
  (
  {children, onSuccess: paraSuccess, onClose: paraClose, ...others }: PaystackConsumerProps<T>,
    ref: any,
): JSX.Element => {
  const onSuccess = paraSuccess ? paraSuccess : (): void => { };
  const onClose = paraClose ? paraClose : (): void => { };

    // Define the type for the children function
    type ChildrenFunctionType = (arg: Record<string, T>) => JSX.Element;

    return (
    <PaystackProvider {...others} onSuccess={onSuccess} onClose={onClose}>
      <PaystackConsumerChild ref={ref}>
        {/* Pass the generic type T to the children function */}
        {(children as ChildrenFunctionType)}
      </PaystackConsumerChild>
    </PaystackProvider>
    );
});


    export default PaystackConsumer;
