import { getRecommendPosts } from "@/api";
import { getAllTags } from "@/api/tag";

export function useAppAside() {
  async function fetchRecommendPosts(){
    let list = []
    try {
      const res:any = await getRecommendPosts()
      if (res.code===0){
        list=res.data.list
      }
    }catch (e) {
      console.log(e)
    }
    return {
      list
    }
  }

  async function fetchAllTags(){
    let list = []
    try {
      const res:any = await getAllTags()
      if (res.code===0){
        list=res.data.list
        console.log(list)
      }
    }catch (e) {
      console.log(e)
    }
    return {
      list
    }
  }

  return {
    fetchRecommendPosts,
    fetchAllTags
  }
}