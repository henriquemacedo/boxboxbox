import React, { Component } from "react";

import Header from "../design-system/organisms/Header";
import CalendarLink from "../design-system/atoms/CalendarLink";
import CalendarWrapper from "../design-system/organisms/CalendarWrapper";
import CalendarItem from "../design-system/molecules/CalendarItem";
import Footer from "../design-system/organisms/Footer";
import calendar from "../utils/calendar";

class App extends Component {
  state = {
    calendar: calendar
  };

  render() {
    return (
      <>
        <Header>
          {/* <CalendarLink
            name="Apple Calendar"
            link="webcal://p14-calendars.icloud.com/published/2/AAAAAAAAAAAAAAAAAAAAABzHiddr5qqJIbjWfXdCmzoLag3e7jWm-NB4wLP4W5E1vEr4fJYo5VQq68K8zxQMEgBhNc3qTqFdEOEYSluylBo"
          /> */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="44" viewBox="0 0 16 44"><path d="M8.02 16.23c-.73 0-1.86-.83-3.05-.8-1.57.02-3.01.91-3.82 2.32-1.63 2.83-.42 7.01 1.17 9.31.78 1.12 1.7 2.38 2.92 2.34 1.17-.05 1.61-.76 3.03-.76 1.41 0 1.81.76 3.05.73 1.26-.02 2.06-1.14 2.83-2.27.89-1.3 1.26-2.56 1.28-2.63-.03-.01-2.45-.94-2.48-3.74-.02-2.34 1.91-3.46 2-3.51-1.1-1.61-2.79-1.79-3.38-1.83-1.54-.12-2.83.84-3.55.84zm2.6-2.36c.65-.78 1.08-1.87.96-2.95-.93.04-2.05.62-2.72 1.4-.6.69-1.12 1.8-.98 2.86 1.03.08 2.09-.53 2.74-1.31" fill="#fff"/></svg>
          <CalendarLink
            name="Google"
            link="https://calendar.google.com/calendar?cid=aGVucmlxdWVtYWNlZG8ucHRfbW9pdm5nZWZ0YjcxcXNjNmI5cW9qcWFlZjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
          /> */}
        </Header>
        <CalendarWrapper>
          {Object.keys(this.state.calendar).map(key => (
            <CalendarItem
              key={key}
              index={key}
              details={this.state.calendar[key]}
            />
          ))}
        </CalendarWrapper>
        <Footer />
      </>
    );
  }
}

export default App;
