function getDayOfWeek(date) {
    // Create a Date object from the date string.
    const d = new Date(date);
  
    // Get the day of the week from the Date object.
    const dayOfWeek = d.getDay();
  
    // Return the day of the week as a string.
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayOfWeek];
  }
  