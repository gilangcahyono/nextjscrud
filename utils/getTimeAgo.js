export const getTimeAgo = (date) => {
  const now = new Date();
  const past = new Date(date);
  const diff = Math.floor((now.getTime() - past.getTime()) / 1000); // detik

  const secondsIn = {
    minute: 60,
    hour: 3600,
    day: 86400,
    week: 604800,
  };

  if (diff < secondsIn.hour) return `${Math.floor(diff / secondsIn.minute)}m`;
  if (diff < secondsIn.day) return `${Math.floor(diff / secondsIn.hour)}h`;
  if (diff < secondsIn.week) return `${Math.floor(diff / secondsIn.day)}d`;
  return `${Math.floor(diff / secondsIn.week)}w`;
};
