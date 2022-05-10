import axios from '@/utils/request'

export function recordAccess(date:string) {
  return axios({
    url: '/log/record/access',
    method: 'POST',
    data:{
      date
    }
  })
}
