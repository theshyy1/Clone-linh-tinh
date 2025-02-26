export interface IUser {
  id: number;
  name: string;
  avatar?: string;
  position: string;
  email: string;
  department: string;
  phone?: number | string;
  status: "Active" | "Pending" | "Suspended";
  portfolio?: number | string;
  role: "Employee" | "Owner";
  location: {
    country?: string;
    city?: string;
    address?: string;
  };
  isFocus: boolean;
  account_type: "Individual" | "Company";
}

export interface FormUserValues {
  id?: number;
  name: string;
  avatar?: string;
  position: string;
  email: string;
  department: string;
  status: "Active" | "Pending" | "Suspended";
  portfolio?: number | string;
  role: "Employee" | "Owner";
  location: {
    country?: string;
    city?: string;
    address?: string;
  };
  isFocus: boolean;
  phone?: number | string;
  account_type: "Individual" | "Company";
}
