export const getDateFromOrderFormat = (formattedDate) => {
    if (!formattedDate) {
        return null
    }

    let initialDate = formattedDate.trim()

    let array = initialDate.split("/")
    // let year = parseInt(array[2])
    // let month = parseInt(array[1]) - 1
    // let day = parseInt(array[0])
    let year = array[2]
    let month = array[1]
    let day = array[0]

    // let date = new Date(year, month, day)

    return year + "-" + month + "-" + day
}

export const formatDate = (incomingDate, hour) => {
    let date = new Date(incomingDate)
    let [textHours, textMinutes] = hour.split(':')
    date.setHours(parseInt(textHours))
    date.setMinutes(parseInt(textMinutes))

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}



export const getMonthString = (value) => {
    switch (value) {
      case 0:
        return "01";
        break;
      case 1:
        return "02";
        break;
      case 2:
        return "03";
        break;
      case 3:
        return "04";
        break;
      case 4:
        return "05";
        break;
      case 5:
        return "06";
        break;
      case 6:
        return "07";
        break;
      case 7:
        return "08";
        break;
      case 8:
        return "09";
        break;
      case 9:
        return "10";
        break;
      case 10:
        return "11";
        break;
      case 11:
        return "12";
        break;
    }
  };