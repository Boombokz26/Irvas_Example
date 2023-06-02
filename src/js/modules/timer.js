const addZero = (num) => {
  return num <= 9 ? '0' + num : num;
};

const getTimeRemaining = (endtime) => {
  const t = Date.parse(endtime) - Date.now();
  const seconds = Math.floor((t / 1000) % 60);
  const minutes = Math.floor((t / 1000 / 60) % 60);
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  const days = Math.floor(t / (1000 * 60 * 60 * 24));

  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
};

const updateClock = (timer, endtime) => {
  const days = timer.querySelector("#days");
  const hours = timer.querySelector("#hours");
  const minutes = timer.querySelector("#minutes");
  const seconds = timer.querySelector("#seconds");

  const updateTime = () => {
    const t = getTimeRemaining(endtime);

    days.textContent = addZero(t.days);
    hours.textContent = addZero(t.hours);
    minutes.textContent = addZero(t.minutes);
    seconds.textContent = addZero(t.seconds);

    if (t.total <= 0) {
      days.textContent = "00";
      hours.textContent = "00";
      minutes.textContent = "00";
      seconds.textContent = "00";

      clearInterval(timeInterval);
    }
  };

  updateTime();
  const timeInterval = setInterval(updateTime, 1000);
};

const timer = (id, deadline) => {
  const timer = document.querySelector(id);
  updateClock(timer, deadline);
};

export default timer;
