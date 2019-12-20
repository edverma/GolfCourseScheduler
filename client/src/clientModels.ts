import {Tenant, ShiftType, ShiftTime, UserRole, UserType, Gender} from "../../enums.js";

export class TenantShift {
  tenant: Tenant;
  type: ShiftType;
  time: ShiftTime;
  order: Number;
}

export class ScheduleShift {
  shift: TenantShift;
  start_time: string;
  end_time: string;
  start_datetime: Date;
  end_datetime: Date;
  amount: Number;
  needed: boolean;
  employee_id: User;
}

export class ScheduleRequirementsImproved {
  _id: Object;
  dateStrings: string [] = [];
  dateDates: Date[] = [];
  shifts: ScheduleShift[][] = [];
  eventNames: string[] = [];
}

export class Availability {
  weekday: number;
  time_ranges: string[][] = [];
}

export class User {
  _id: Object;
  tenant: number;
  fname: string;
  lname: string;
  role: UserRole;
  gender: Gender;
  shift_types: [ShiftType];
  preferred_shifts: Number;
  availability: [Availability];
  email: string;
  password: string;
  token: string;
}
