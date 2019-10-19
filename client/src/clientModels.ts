enum Tenant {
  UGA
}

enum ShiftType {
  SHOP,
  CARTS,
  RANGE,
  RANGE_REGISTER,
  STARTER,
  TOURNAMENT_CARTS
}

enum ShiftTime {
  AM,
  PM
}

export class TenantShift {
  tenant: Tenant;
  type: ShiftType;
  time: ShiftTime;
}

export class ScheduleShift {
  shift: TenantShift;
  date: Date;
  time: string;
  amount: Number;
  needed: boolean;
}

export class ScheduleRequirementsImproved {
  dateStrings: string [] = [];
  dateDates: Date[] = [];
  shifts: ScheduleShift[] = [];
  eventNames: string[] = [];
}


export class ScheduleRequirements {
  dateStrings: string [] = [];
  dateDates: Date[] = [];

  needShopAM: boolean[] = [true, true, true, true, true, true, true];
  needShopPM: boolean[] = [true, true, true, true, true, true, true];
  needCartsAM: boolean[] = [true, true, true, true, true, true, true];
  needCartsPM: boolean[] = [true, true, true, true, true, true, true];
  needRangeAM: boolean[] = [true, true, true, true, true, true, true];
  needRangePM: boolean[] = [true, true, true, true, true, true, true];
  needRangeRegisterAM: boolean[] = [true, true, true, true, true, true, true];
  needRangeRegisterPM: boolean[] = [true, true, true, true, true, true, true];
  needStarterAM: boolean[] = [true, true, true, true, true, true, true];
  needStarterPM: boolean[] = [true, true, true, true, true, true, true];
  needTournamentCartsAM: boolean[] = [false, false, false, false, false, false, false];
  needTournamentCartsPM: boolean[] = [false, false, false, false, false, false, false];

  timesShopAM: string[] = ['07:00', '07:00', '07:00', '07:00', '07:00', '07:00', '07:00'];
  timesShopPM: string[] = ['13:30', '13:30', '13:30', '13:30', '13:30', '13:30', '13:30'];
  timesCartsAM: string[] = ['07:00', '07:00', '07:00', '07:00', '07:00', '07:00', '07:00'];
  timesCartsPM: string[] = ['13:30', '13:30', '13:30', '13:30', '13:30', '13:30', '13:30'];
  timesRangeAM: string[] = ['06:30', '06:30', '06:30', '06:30', '06:30', '06:30', '06:30'];
  timesRangePM: string[] = ['13:30', '13:30', '13:30', '13:30', '13:30', '13:30', '13:30'];
  timesRangeRegisterAM: string[] = ['06:30', '06:30', '06:30', '06:30', '06:30', '06:30', '06:30'];
  timesRangeRegisterPM: string[] = ['13:00', '13:00', '13:00', '13:00', '13:00', '13:00', '13:00'];
  timesStarterAM: string[] = ['07:30', '07:30', '07:30', '07:30', '07:30', '07:30', '07:30'];
  timesStarterPM: string[] = ['12:30', '12:30', '12:30', '12:30', '12:30', '12:30', '12:30'];
  timesTournamentCartsAM: string[] = ['', '', '', '', '', '', ''];
  timesTournamentCartsPM: string[] = ['', '', '', '', '', '', ''];

  amountsTournamentCartsAM: number[]=[0,0,0,0,0,0,0];
  amountsTournamentCartsPM: number[]=[0,0,0,0,0,0,0];

  eventNames: string[] = ['','','','','','',''];
}
