export type Currency = 'NGN' | 'GHS' | 'USD' | 'ZAR' | 'KES' | 'XOF';

export type PaymentChannels =
  | 'bank'
  | 'card'
  | 'qr'
  | 'ussd'
  | 'mobile_money'
  | 'eft'
  | 'bank_transfer'
  | 'payattitude';

type Bearer = 'account' | 'subaccount';

type phone = number | string;

type PaystackCustomFields ={
  display_name: string;
  variable_name: string;
  value: any;
}

type PaystackMetadata = {
  custom_fields: PaystackCustomFields[];
}

type PaystackMetadata ={
  [key: string]: any;
}

export type callback = (response?: any) => void;

export type PaystackProps ={
  publicKey: string;
  email: string;
  amount: number;
  firstname?: string;
  lastname?: string;
  phone?: phone;
  reference?: string;
  metadata?: PaystackMetadata;
  currency?: Currency | string;
  channels?: PaymentChannels[] | string[];
  label?: string;
  plan?: string;
  quantity?: number;
  subaccount?: string;
  transaction_charge?: number;
  bearer?: Bearer;
  'data-custom-button'?: string;
  split_code?: string;
  split?: Record<string, any>;
}

export type InitializePayment = (options: {
  onSuccess?: callback;
  onClose?: callback;
  config?: Omit<PaystackProps, 'publicKey'>;
}) => void;

export type HookConfig = Omit<Partial<PaystackProps>, 'publicKey'> &
  Pick<PaystackProps, 'publicKey'>;
