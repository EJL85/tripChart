import React from 'react';

class TripLeft extends React.Component {
    render() {

        var dayLabeler = (dayOfWeek) => {
            switch (dayOfWeek) {
                case 0:
                    return 'Sunday';
                    break;
                case 1:
                    return 'Monday';
                    break;
                case 2:
                    return 'Tuesday';
                    break;
                case 3:
                    return 'Wednesday';
                    break;
                case 4:
                    return 'Thursday';
                    break;
                case 5:
                    return 'Friday';
                    break;
                case 6:
                    return 'Saturday';
                    break;

            }
        };

        var monthLabeler = (month) => {
            switch (month) {
                case 0:
                    return 'January';
                    break;
                case 1:
                    return 'February';
                    break;
                case 2:
                    return 'March';
                    break;
                case 3:
                    return 'April';
                    break;
                case 4:
                    return 'May';
                    break;
                case 5:
                    return 'June';
                    break;
                case 6:
                    return 'July';
                    break;
                case 7:
                    return 'August';
                    break;
                case 8:
                    return 'September';
                    break;
                case 9:
                    return 'October';
                    break;
                case 10:
                    return 'November';
                    break;
                case 11:
                    return 'December';
                    break;
            }
        };

        var dateFormatter = (date) => {
            var month = monthLabeler(date.getMonth());

            var day = date.getDate();

            var year = date.getFullYear();

            var dayOfWeek = dayLabeler(date.getDay());

            let dateString = `${dayOfWeek}, ${month} ${day} ${year}`;

            return dateString;
        };

        var minSecFormat = (timeUnit) => {
            console.log(timeUnit);
            if (timeUnit < 10) {
                return `0${timeUnit}`;
            } else {
                return timeUnit;
            }
        };

        var timeFormatter = (date) => {
            var hour = date.getHours();
            var minute = minSecFormat(date.getMinutes());
            var seconds = minSecFormat(date.getSeconds());
            let timeString = `${hour}:${minute}:${seconds}`;
            return timeString;
        };

        var date1 = new Date();

        var arrival = new Date ('August 31, 2018 00:00:00');

        var monthDifference = arrival.getMonth() - date1.getMonth();

        const daysInEachMonth = [31,28,31,30,31,30,31,31,30,31,30,31];

        var daysLeftInMonth = (date) => {
            let day = date.getDate();
            let daysLeftInMonth = daysInMonth(date) - day;
            if (daysLeftInMonth === 0) {
                return daysInMonth(date)
            } else {
                return daysLeftInMonth;
            }
        }

        var daysInMonth = (date) => {
            let month = date.getMonth();
            let daysInMonth = daysInEachMonth[month];
            return daysInMonth;
        }

        var daysLeft = daysLeftInMonth(arrival) + daysLeftInMonth(date1);

        return(
            <div className={`tripLeft ${this.props.showTripLeft}`}>
                <h1>It is {dateFormatter(date1)}</h1>
                <h1>I'll be there on {dateFormatter(arrival)}</h1>
                <h1>That means there are {daysLeft} days of anticipation left ;)</h1>
            </div>
        );
    }
}

export default TripLeft;