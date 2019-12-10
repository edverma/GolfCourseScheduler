import {Tenant, ShiftType, ShiftTime, UserRole, UserType} from "../../enums.js";

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
  employee: User;
}

export class ScheduleRequirementsImproved {
  dateStrings: string [] = [];
  dateDates: Date[] = [];
  shifts: ScheduleShift[][] = [];
  eventNames: string[] = [];
}

export class Availability {
  weekday: number;
  timeRanges: string[][] = [];
}

export class User {
  fname: string;
  lname: string;
  role: UserRole;
  shiftTypes: [ShiftType];
  preferredShifts: Number;
  availability: [Availability];
}
