import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDate } from "../redux/taskSlice"; 
import {
  format,
  addDays,
  subDays,
  isToday,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
} from "date-fns"; // Handling dates

const Calendar = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.tasks.selectedDate); 
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // The start and end of the current month
  const startOfCurrentMonth = startOfMonth(currentMonth);
  const endOfCurrentMonth = endOfMonth(currentMonth);

  // The days of the current month
  const daysInMonth = eachDayOfInterval({
    start: startOfCurrentMonth,
    end: endOfCurrentMonth,
  });

  // To handle date selection
  const handleDateSelect = (date) => {
    dispatch(setSelectedDate(date)); 
  };

  // To navigate to the next month
  const nextMonth = () => {
    setCurrentMonth(addDays(currentMonth, 32)); // To go to the next month
  };

  // To navigate to the previous month
  const prevMonth = () => {
    setCurrentMonth(subDays(currentMonth, 32)); // To go to the previous month
  };

  useEffect(() => {
    if (!selectedDate) {
      dispatch(setSelectedDate(new Date())); // To set default selected date to today 
    }
  }, [dispatch, selectedDate]);

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={prevMonth}>{"<"}</button>
        <span>{format(currentMonth, "MMMM yyyy")}</span>
        <button onClick={nextMonth}>{">"}</button>
      </div>
      <div className="calendar-grid">
        {daysInMonth.map((date, index) => (
          <div
            key={index}
            className={`calendar-day ${isToday(date) ? "today" : ""} ${
              selectedDate && format(selectedDate, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
                ? "selected"
                : ""
            }`}
            onClick={() => handleDateSelect(date)} // To handle the date selection
          >
            {format(date, "d")}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;






