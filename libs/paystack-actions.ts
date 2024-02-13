/* eslint-disable */
// export let callPaystackPop = (paystackArgs: Record<string, any>): void => {
//   // @ts-ignore
//   const handler = window.PaystackPop && window.PaystackPop.setup(paystackArgs);
//   handler && handler.openIframe();
// };





type PaystackArgs<T> = Record<string, T>;

type CustomWindow =  {
  PaystackPop: <T>(arg: T) => { openIframe: () => void };
} & Window

declare var customWindow: CustomWindow;

export const callPaystackPop = <T>(paystackArgs: PaystackArgs<T>): void => {
  const handler = customWindow.PaystackPop(JSON.stringify(paystackArgs));
  handler.openIframe();
};
