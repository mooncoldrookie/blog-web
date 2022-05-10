import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn' // import locale
import customParseFormat from 'dayjs/plugin/customParseFormat'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)
dayjs.locale('zh-cn')
dayjs.extend(customParseFormat)

export default dayjs
