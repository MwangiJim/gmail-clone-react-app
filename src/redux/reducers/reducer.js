import { createSlice } from "@reduxjs/toolkit";

export const SliceReducer = createSlice({
    name:'email',
    initialState:{
       emailPost:[

       ],
       starredPost:[

       ],
       postDisplay:{

       },
       UserDetails:{

       }
    },
    reducers:{
        AddPost:(state,action)=>{
            return {
                ...state,
                emailPost:[...state.emailPost,action.payload]
            }
        },
        StarredPost:(state,action)=>{
            return {
                ...state,
                starredPost:[...state.starredPost,action.payload]
            }
        },
        RemoveStarredPost:(state,action)=>{
            const index = StarredPost.indexOf((postIndex)=>{
                postIndex= index
            })
            console.log(index)
            let newPost = [...state.starredPost]
            if(index <= 0){
                newPost.splice(index,1)
            }
            return{
                ...state,
                starredPost:newPost
            }
        },
        PostView:(state,action)=>{
            return{
                ...state,
                postDisplay:action.payload
            }
        },
        DetailsView:(state,action)=>{
            return{
                ...state,
                UserDetails:action.payload
            }
        }
    }
})

export const {AddPost,StarredPost,RemoveStarredPost,PostView,DetailsView} = SliceReducer.actions
export default SliceReducer.reducer