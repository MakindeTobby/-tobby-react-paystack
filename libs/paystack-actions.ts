/* eslint-disable */
// export let callPaystackPop = (paystackArgs: Record<string, any>): void => {
//   // @ts-ignore
//   const handler = window.PaystackPop && window.PaystackPop.setup(paystackArgs);
//   handler && handler.openIframe();
// };

type PaystackArgs<T> = Record<string, T>;


type CustomWindow = {
  PaystackPop: (arg: string) => void
} & Window & typeof globalThis;

declare var customWindow : CustomWindow;

export let callPaystackPop = (paystackArgs: PaystackArgs<T>): void => {
  const handler = customWindow.PaystackPop(paystackArgs);
 handler.openIframe();
};



