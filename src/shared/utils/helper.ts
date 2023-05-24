// types
import type { MonthDay } from '@/types/general.types';
// import type { UsersAvatartDto } from '@/types/initialization.types';
import type { firstAndLastDays } from '@/types/general.types';

export const deepClone = (obj: object) => {
  return JSON.parse(JSON.stringify(obj));
};

export const getYearToString = (currentYear: number | string): string => {
  return String(currentYear);
};

export const getTranslatedMonth = (currentYear: number, currentMonth: number, lang: string): string => {
  const month = new Date(currentYear, currentMonth).toLocaleString(lang, { month: 'long' });
  return month[0].toUpperCase() + month.slice(1);
};

export const getMonthDays = (currentYear: number, currentMonth: number, lang: string): MonthDay[] => {
  const daysCount = getDaysCount(currentYear, currentMonth);
  const days = [];

  for (let i = 1; i <= daysCount; i++) {
    const day = new Date(currentYear, currentMonth, i).toLocaleString(lang, {
      weekday: 'long',
      day: '2-digit',
    });

    days.push({
      id: i,
      day: day,
      month: currentMonth,
      year: currentYear,
    });
  }

  return days;
};

export const getDaysCount = (currentYear: number, currentMonth: number): number => {
  return 33 - new Date(currentYear, currentMonth, 33).getDate();
};

export const getCurrentDate = (year: number, month: number, day: number): string => {
  return new Date(year, month, day + 1).toISOString().split('T')[0];
};

export const getFirstAndLastDay = (currentYear: number, currentMonth: number): firstAndLastDays => {
  const firstDay = new Date(currentYear, currentMonth, 2).toISOString().split('T')[0];
  const lastDay = new Date(currentYear, currentMonth, getDaysCount(currentYear, currentMonth) + 1)
    .toISOString()
    .split('T')[0];

  return { firstDay: firstDay, lastDay: lastDay };
};

// export const getUserAvatar = (
//   userId: number,
//   avatars: UsersAvatartDto[],
//   amoSubdomain: string,
//   amoTopLevelDomain: string
// ): string | void => {
  // const avatar = avatars.find(el => el.id === userId)?.avatar;
  // if (avatar) return 'https://' + amoSubdomain + '.amocrm.' + amoTopLevelDomain + avatar;
// };

export const currectIntervals = (intervals: any): boolean => {
  for (let i = 0; i < intervals.length; i++) {
    const intervalMain = intervals[i];
    const fromMain = '' + intervalMain.from + intervalMain.fromMinutes;
    const toMain = '' + intervalMain.to + intervalMain.toMinutes;

    if (+toMain > 2400) return true;
    if (+fromMain >= +toMain) return true;

    for (let j = 0; j < intervals.length; j++) {
      if (i >= j) continue;
      const interval = intervals[j];
      const from = '' + interval.from + interval.fromMinutes;

      if (+from <= +toMain) return true;
    }
  }
  return false;
};

export const preparationIntervals = (periods: any): any => {
  const intervals: any = [];

  periods.forEach((period: any) => {
    const timeFrom = period.timeFrom.split(':');
    const timeTo = period.timeTo.split(':');

    intervals.push({
      from: timeFrom[0],
      fromMinutes: timeFrom[1],
      to: timeTo[0],
      toMinutes: timeTo[1],
    });
  });

  return intervals;
};

export const preparationPeriods = (scheduleId: any, users: any, dates: any, intervals: any) => {
  const periods: any = [];

  users.forEach((user: any) => {
    dates.forEach((date: any) => {
      periods.push({
        scheduleId: +scheduleId,
        amoUserId: user,
        date: date,
        intervals: intervals.map((interval: any) => {
          return {
            timeFrom: interval.from + ':' + interval.fromMinutes + ':00',
            timeTo: interval.to + ':' + interval.toMinutes + ':00',
          };
        }),
      });
    });
  });

  return periods;
};

export const preparationRecursivePeriods = (scheduleId: any, users: any, dates: any, intervals: any) => {
  const periods: any = [];

  users.forEach((user: any) => {
    dates.forEach((date: any) => {
      periods.push({
        scheduleId: +scheduleId,
        amoUserId: user,
        dayOfWeek: date,
        intervals: intervals.map((interval: any) => {
          return {
            timeFrom: interval.from + ':' + interval.fromMinutes + ':00',
            timeTo: interval.to + ':' + interval.toMinutes + ':00',
          };
        }),
      });
    });
  });

  return periods;
};

export const isNotEqualValues = (value1: any, value2: any): boolean => {
  return value1 !== value2;
};

export const changeDateFormat = (format: string): string => {
  return format.replace(/[D,d]/g, 'DD').replace(/[M,m]/g, 'MM').replace(/[Y,y]/g, 'YYYY');
};

export const checkImageURL = (url: string): boolean => {
  return url.match(/^http[^\\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gim) != null;
};
