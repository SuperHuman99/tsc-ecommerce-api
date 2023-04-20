import logger from 'pino'
import dayjs from 'dayjs'

const log = logger({
    base: {
        pid: false
    },
    timestamp: () => `"time"L "${dayjs().format()}"`
})

export default log