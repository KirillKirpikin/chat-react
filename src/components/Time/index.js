
import format from 'date-fns/format'
const Time = ({date}) => format(new Date(date), 'M/d/yy ,  h:mm a');

export default Time;